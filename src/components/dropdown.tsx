import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

type DropDownProps = {
  title: string;
  items: {
    title: string;
    link: string
  }[]
}

type ButtonProps = {
  title: string;
  toggleDropdown: () => void;
  isOpened: boolean;
}

const Button: React.FC<ButtonProps> = ({title, toggleDropdown, isOpened}) => {
  const Icon = isOpened ? CaretUp : CaretDown;

  const background = isOpened ? 'black-300' : 'black';

  return (
    <button onClick={toggleDropdown}  title={title} type="button" 
    className={`bg-${background} hover:bg-black-300 flex text-white items-center justify-between rounded-full pr-2`}>
    <Image
      className="flex-shrink-0 rounded-full object-scale-down mr-1 p-[2px]"
      src="https://avatars.githubusercontent.com/u/48302018?v=4"
      alt="jane avatar"
      width={35}
      height={35}
    />
    <span className="mx-1 font-bold text-sm">{title}</span>
    <Icon size={16} color="#FFF" weight="fill"/>
  </button>
  )
}

export const Dropdown: React.FC<DropDownProps> = (props) => {
  const { title, items } = props;

  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened(currentState => !currentState)
  }

  return (
    <div className="flex justify-center">
      <div className="relative inline-block">
        <Button  
          isOpened={isOpened}
          title={title}
          toggleDropdown={toggleDropdown}
        />
        {/* Dropdown menu */}
        {isOpened && (
          <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-black-300 rounded-md shadow-xl px-1">
          {items.map(item => (
            <a
              key={item.title}
              href={item.link}
              target="_blank"
              className="flex px-2 py-1 w-full text-sm text-white capitalize rounded transition-colors duration-200 transform hover:bg-white/10"
            >
              {item.title}
            </a>
          ))}
        </div>
        )}
      </div>
    </div>
  )
}