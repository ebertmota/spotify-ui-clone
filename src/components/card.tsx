import Image from "next/image"

type CardProps = {
  title: string;
  owner: string;
  url: string;
  cover_img: string;
}

export const Card: React.FC<CardProps> = (props) => {
  const { title, owner, cover_img, url } = props;

  function redirectToUrl() {
    window.open(url, '_blank')
  }

  return (
    <div
      onClick={redirectToUrl} 
      className="flex flex-col flex-1 justify-self-center cursor-pointer rounded-md justify-around items-center bg-black-350 transition-colors duration-300 ease-in-out hover:bg-black-320 max-w-[400px] w-[226px] h-[316px] py-4 px-4">
        <div className="flex max-h-44">
        <Image 
          alt={title} 
          src={cover_img}
          width={194} 
          height={194}
          className="rounded object-cover"
        />
        </div>
        <div className="flex flex-col items-start w-full text-white">
          <strong>{title}</strong>
          <span>By {owner}</span>
        </div>
    </div>
  )
}