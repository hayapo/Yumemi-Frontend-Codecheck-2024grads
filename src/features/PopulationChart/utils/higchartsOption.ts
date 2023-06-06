import * as Highcharts from "highcharts"

/* 総人口推移グラフの横軸(年)の最大値と最小値 */
export const MAX_YEAR = new Date().getFullYear()
export const MIN_YEAR = MAX_YEAR - 30

/* HightChartsのOption */
export const HIGHCHARTS_OPTION: Highcharts.Options = {
  chart: {
    height: 500,
    style: {
      fontSize: "12px",
    },
    events: {
      load() {
        this.showLoading()
        setTimeout(this.hideLoading.bind(this), 500)
      },
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
  tooltip: {
    useHTML: true,
    formatter() {
      return `
      <div style="font-size: 15px; font-weight: bold;">
        ${this.series.name}
      </div>
      <div>
        ${this.x}年
      </div>
      <div>
        <span style="
        font-size: 15px;
        font-weight: bold;
        color: ${this.color as string};">
          ${this.y?.toLocaleString()}
        </span>
        <span>人</span>
      </div>
      `
    },
    shape: "square",
    backgroundColor: "#fff",
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
  responsive: {
    rules: [
      {
        condition: {
          maxWidth: 700,
        },
        chartOptions: {
          chart: {
            height: 300,
          },
          legend: {
            layout: "horizontal",
            align: "center",
            verticalAlign: "bottom",
          },
          yAxis: {
            title: {
              text: "総人口（万人）",
            },
            labels: {
              formatter() {
                return `${(this.value as number) / 10000}`
              },
            },
          },
        },
      },
    ],
  },
}
