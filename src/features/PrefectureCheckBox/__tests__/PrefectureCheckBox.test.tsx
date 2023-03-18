// @vitest-environment jsdom
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { CheckBox } from "@/components"
import { mockPrefecturesData } from "@/mocks/mockPrefecturesData"
import { default as PrefectureCheckBox } from "../components/PrefectureCheckBox"

test("should render correctly", () => {
  mockPrefecturesData.map(({ prefCode, prefName }) => {
    const { container } = render(<CheckBox key={prefCode} label={prefName} id={`pref_${prefCode}`} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

test("label is render correctly", () => {
  mockPrefecturesData.map(({ prefCode, prefName }) => {
    render(<CheckBox key={prefCode} label={prefName} id={`pref_${prefCode}`} />)
    expect(screen.getByLabelText(prefName)).toBeInTheDocument()
  })
})

test("should render correctly", () => {
  const { container } = render(<PrefectureCheckBox />)
  expect(container.firstChild).toMatchSnapshot()
})

test("title is visible", () => {
  render(<PrefectureCheckBox />)
  expect(screen.getByText("都道府県")).toBeInTheDocument()
})
