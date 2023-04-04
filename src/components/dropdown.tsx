import { CaretDown, CaretUp } from "@phosphor-icons/react";
import Image from "next/image";
import { useState } from "react";

type DropDownProps = {
  title: string;
  items: {
    title: string;
  }[]
}

export const Dropdown: React.FC<DropDownProps> = (props) => {
  const { title, items } = props;

  const [isOpened, setIsOpened] = useState(false);

  const toggleDropdown = () => {
    setIsOpened(currentState => !currentState)
  }

  const Icon = isOpened ? CaretUp : CaretDown;

  return (
  <div className="flex justify-center">
    <div className="relative inline-block mb-20">
      {/* Dropdown toggle button */}
      <Image
             className="flex-shrink-0 object-cover mx-1 rounded-full w-9 h-9"
             src="https://avatars.githubusercontent.com/u/48302018?v=4"
             alt="jane avatar"
             width={9}
             height={9}
           />
      <button onClick={toggleDropdown} className="relative z-10 flex items-center p-2 text-sm text-gray-600 bg-white border border-transparent rounded-md focus:border-blue-500 focus:ring-opacity-40 dark:focus:ring-opacity-40 focus:ring-blue-300 dark:focus:ring-blue-400 focus:ring dark:text-white dark:bg-gray-800 focus:outline-none">
        <span className="mx-1">{title}</span>
        <Icon size={12} color="#FFF" weight="fill"/>
      </button>
      {/* Dropdown menu */}
      {isOpened && (
         <div className="absolute right-0 z-20 w-56 py-2 mt-2 overflow-hidden bg-white rounded-md shadow-xl dark:bg-gray-800">
         {items.map(item => (
           <a
             key={item.title}
             href="#"
             className="block px-4 py-3 text-sm text-gray-600 capitalize transition-colors duration-200 transform dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700 dark:hover:text-white"
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