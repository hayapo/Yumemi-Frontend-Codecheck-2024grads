import { rest } from "msw"
import { mockPrefecturesApi } from "./mockPrefecturesApi"

export const handlers = [rest.get("https://opendata.resas-portal.go.jp/api/v1/prefectures", mockPrefecturesApi)]
