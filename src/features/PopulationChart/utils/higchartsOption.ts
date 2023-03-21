import * as Highcharts from "highcharts"

/* 総人口推移グラフの横軸(年)の最大値と最小値 */
export const MAX_YEAR = new Date().getFullYear()
export const MIN_YEAR = MAX_YEAR - 30

/* HightChartsのOption */
export const HIGHCHARTS_OPTION: Highcharts.Options = {
  chart: {
    style: {
      fontSize: "12px",
    },
  },
  lang: {
    noData: "都道府県を選択してください",
  },
  title: {
    text: "人口構成推移",
  },
  xAxis: {
    title: {
      text: "年",
    },
    tickInterval: 5,
    max: MAX_YEAR,
    min: MIN_YEAR,
  },
  yAxis: {
    title: {
      text: "総人口（人）",
    },
    labels: {
      formatter() {
        return `${this.value.toLocaleString()}`
      },
    },
  },
  accessibility: {
    enabled: false,
  },
  legend: {
    layout: "vertical",
    align: "right",
    verticalAlign: "middle",
    itemStyle: {
      cursor: "default",
      fontWeight: "normal",
    },
    itemHoverStyle: {
      fontWeight: "bold",
    },
    itemMarginBottom: 4,
  },
}
