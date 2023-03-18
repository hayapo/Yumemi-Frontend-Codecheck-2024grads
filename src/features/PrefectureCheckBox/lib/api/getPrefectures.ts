import { Prefecture, PrefectureResponse } from "@/types"
import { AxiosOption } from "@/lib/api/axiosOption"
import axios, { AxiosResponse } from "axios"

/**
 * @return {Promise<PrefectureResponse[]>} Promiseでラップされた都道府県のリスト\
 * APIレスポンスに関するエラーはここでthrowする
 */
export const getPrefectures = async (): Promise<Prefecture[]> => {
  const endpoint = "api/v1/prefectures"
  const option = AxiosOption(endpoint)
  try {
    const response: PrefectureResponse = await axios(option).then((res: AxiosResponse<PrefectureResponse>) => res.data)
    return response.result
  } catch (err) {
    if (!axios.isAxiosError(err)) throw new Error("Errors other than axios")
    if (err.response) {
      throw new Error(`data: ${err.response.data}, status: ${err.response.status}, headers: ${err.response.headers}`)
    } else if (err.request) {
      throw new Error(err.request)
    } else {
      throw new Error("エラー", err.request.message)
    }
  }
}
