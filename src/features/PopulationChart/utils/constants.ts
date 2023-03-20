import * as Highcharts from "highcharts"

/* 総人口推移グラフの横軸(年)の最大値と最小値 */
export const CURRENT_YEAR = new Date().getFullYear()
export const OLDEST_YEAR = CURRENT_YEAR - 30

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
  },
  yAxis: {
    title: {
      text: "人口数",
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
