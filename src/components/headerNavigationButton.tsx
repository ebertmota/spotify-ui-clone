import { Icon } from "@phosphor-icons/react"

type NavigationButtonProps = {
  icon: Icon
}
export const HeaderNavigationButton: React.FC<NavigationButtonProps> = (props) => {
  const { icon: ButtonIcon } = props;

  return  (
    <button type="button" className="rounded-full bg-black-400 px-1 py-1 cursor-not-allowed">
      <ButtonIcon size={22} weight="thin" className="text-white/[.9]"/>
    </button>
  )
}