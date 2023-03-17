import { AxiosRequestConfig } from "axios"

const BASE_URL = "https://opendata.resas-portal.go.jp/"

/**
 * axiosの基本設定を返す関数 \
 * 各APIはこのoptionを利用する
 * @param {string} endpoint - 各APIのエンドポイント
 * @return {AxiosRequestConfig<any>} option
 */
export const AxiosOption = (endpoint: string): AxiosRequestConfig => {
  const option: AxiosRequestConfig = {}

  // APIエンドポイントを設定
  option.baseURL = BASE_URL
  option.url = endpoint

  // メソッドを設定
  option.method = "GET"

  // options.headersはundefinedの可能性がある
  if (option.headers === undefined) {
    option.headers = {}
  }
  // API-KEYを設定
  option.headers["X-API-KEY"] = import.meta.env.VITE_RESAS_API_KEY

  return option
}
