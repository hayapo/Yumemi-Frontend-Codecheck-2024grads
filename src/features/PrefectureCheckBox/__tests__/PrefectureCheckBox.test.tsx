// @vitest-environment jsdom
import "@testing-library/jest-dom"
import { render, screen } from "@testing-library/react"
import { CheckBox } from "@/components"
import { mockPrefecturesData } from "@/mocks/mockPrefecturesData"
import { default as PrefectureCheckBoxSection } from "../../PrefectureCheckBox"
import { PrefecturesWithCheckedProvider } from "@/contexts"

test("should render <CheckBox ./> correctly", () => {
  mockPrefecturesData.map(({ prefCode, prefName, checked }) => {
    const { container } = render(<CheckBox key={prefCode} label={prefName} checked={checked} id={`pref_${prefCode}`} />)
    expect(container.firstChild).toMatchSnapshot()
  })
})

test("label is render correctly", () => {
  mockPrefecturesData.map(({ prefCode, prefName, checked }) => {
    render(<CheckBox key={prefCode} label={prefName} checked={checked} id={`pref_${prefCode}`} />)
    expect(screen.getByLabelText(prefName)).toBeInTheDocument()
  })
})

test("should render <PrefectureCheckBox /> correctly", () => {
  const { container } = render(
    <PrefecturesWithCheckedProvider>
      <PrefectureCheckBoxSection />
    </PrefecturesWithCheckedProvider>
  )
  expect(container.firstChild).toMatchSnapshot()
})

test("title is visible", () => {
  render(
    <PrefecturesWithCheckedProvider>
      <PrefectureCheckBoxSection />
    </PrefecturesWithCheckedProvider>
  )
  expect(screen.getByText("都道府県")).toBeInTheDocument()
})
