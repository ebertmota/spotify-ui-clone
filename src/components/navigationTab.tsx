import { Icon, IconWeight } from "@phosphor-icons/react";
import { useState } from "react";

type Props = {
  title: string;
  icon: Icon;
  iconWeightOnTitleHover?: IconWeight; 
  onClick: () => void;
  selected: boolean;
}

export const NavigationTab: React.FC<Props> = (props) => {
  const { title, icon, iconWeightOnTitleHover, onClick, selected } = props;
  const IconComponent = icon;
  const defaultIconWeight = 'light';
  const [iconWeight, setIconWeight] = useState<IconWeight>(defaultIconWeight);

  const onTitleHover = () => {
    if (!iconWeightOnTitleHover) return;
    setIconWeight(iconWeightOnTitleHover)
  }

  const onTitleUnHover = () => {
    if (!iconWeightOnTitleHover) return;
    setIconWeight(defaultIconWeight)
  }

  const titleColor = selected ? 'text-white' : 'text-white/[.6] hover:text-white';
  return (
    <a onClick={onClick} href="#" className='list-none flex gap-4 my-2 ease-in-out duration-300'>
      <IconComponent
        size={25} 
        color="#dbdada" 
        weight={selected ? 'fill' : iconWeight}
        className="hover:text-white"
        onMouseEnter={() => setIconWeight('bold')}
        onMouseLeave={() => setIconWeight('light')}
      />
      <span 
        onMouseEnter={onTitleHover}
        onMouseLeave={onTitleUnHover}
        className={titleColor}
      >
        {title}
      </span>
    </a>
  )
}