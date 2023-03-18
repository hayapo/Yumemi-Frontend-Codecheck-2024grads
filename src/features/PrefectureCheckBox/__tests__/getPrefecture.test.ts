import { setupServer } from "msw/node"
import { handlers } from "@/mocks/handler"
import { getPrefectures } from "../lib/api/getPrefectures"
import { rest } from "msw"

export const server = setupServer(...handlers)

beforeAll(() => server.listen())
afterEach(() => server.resetHandlers())
afterAll(() => server.close())

describe("test getPrefectures.ts", () => {
  test("get prefectures properly", async () => {
    const result = await getPrefectures()
    expect(result.length).toBe(47)
  })
  test("test reqeust Forbidden", () => {
    server.use(
      rest.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", (req, res, ctx) => {
        return res.once(ctx.status(403), ctx.json({ statusCode: "403", message: "Forbidden" }))
      })
    )
    const result = getPrefectures()
    expect(result).rejects.toThrowError()
  })
  test("test reqeust internal server error", () => {
    server.use(
      rest.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", (req, res, ctx) => {
        return res.once(ctx.status(500), ctx.json({ statusCode: "500", message: "internal server error" }))
      })
    )
    const result = getPrefectures()
    expect(result).rejects.toThrowError()
  })
})
