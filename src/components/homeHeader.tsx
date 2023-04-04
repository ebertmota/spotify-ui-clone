import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { HeaderNavigationButton } from "./headerNavigationButton"

export const Header: React.FC = () => {
  return (
    <header>
      <div className="flex items-center gap-3">
        <HeaderNavigationButton icon={CaretLeft} />
        <HeaderNavigationButton icon={CaretRight} />
      </div>
    </header>
  )
}