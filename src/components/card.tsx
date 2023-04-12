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
    window.location.replace(url)
  }

  return (
    <div className="flex flex-col flex-1 cursor-pointer rounded-md justify-around items-center bg-black-350 transition-colors duration-300 ease-in-out hover:bg-black-320 max-w-[400px] w-[226px] h-[316px] py-4 px-4">
      {/* <div className=" hover:bg-white/10"> */}
        <Image 
          alt={title} 
          src={cover_img}
          width={194} 
          height={194}
          className="rounded"
        />
        <div className="flex flex-col items-start w-full text-white">
          <strong>{title}</strong>
          <span>By {owner}</span>
        </div>
      {/* </div> */}
    </div>
  )
}