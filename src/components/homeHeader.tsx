import { CaretLeft, CaretRight } from "@phosphor-icons/react"
import { Dropdown } from "./dropdown"
import { HeaderNavigationButton } from "./headerNavigationButton"

export const Header: React.FC = () => {

  return (
    <header className="flex flex-row flex-1 max-h-20 items-center justify-between py-4">
      <div className="flex items-center gap-3 justify-center">
        <HeaderNavigationButton icon={CaretLeft} />
        <HeaderNavigationButton icon={CaretRight} />
      </div>
        <Dropdown 
          title="Ebert Mota" 
          items={[
            { title: 'Github', link: "https://github.com/ebertmota" }
          ]}
        />
    </header>
  )
}