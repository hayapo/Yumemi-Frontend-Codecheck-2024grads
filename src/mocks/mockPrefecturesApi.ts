import { ResponseResolver, MockedRequest, restContext } from "msw"
import { mockPrefecturesData } from "./mockPrefecturesData"

export const mockPrefecturesApi: ResponseResolver<MockedRequest, typeof restContext> = (req, res, ctx) => {
  return res(
    ctx.status(200),
    ctx.json({
      message: null,
      result: mockPrefecturesData,
    })
  )
}
