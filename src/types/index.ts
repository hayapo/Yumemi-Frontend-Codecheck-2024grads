/* RESAS APIから帰ってくる都道府県情報の型 */
export type Prefecture = {
  prefCode: number
  prefName: string
}

/* 都道府県取得(API/api/v1/prefectures)のレスポンスの型 */
export type PrefectureResponse = {
  message: string | null
  result: Prefecture[]
}

/* チェックボックスで選択した都道府県の型 */
export type PrefecturesWithChecked = Prefecture & {
  checked: boolean
}
