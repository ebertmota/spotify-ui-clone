import { ReactNode } from "react"
import { Card } from "./card"



const playlists = [
  {
    title: 'Do you feel ?',
    owner: 'Ebert Mota',
    url: 'https://open.spotify.com/playlist/4UVSWBw9scePVEHqeco6N5?si=a60c1b6f1a6d4091',
    cover_img: 'https://i.scdn.co/image/ab67706c0000da842be6697d1b2db411aa5c4065'
  },
  {
    title: 'numb',
    owner: 'Ebert Mota',
    url: 'https://open.spotify.com/playlist/4QS51J5gukvZd9P9uqq2wz?si=b2e5643d03274828',
    cover_img: 'https://i.scdn.co/image/ab67706c0000da8405e726995e2b0911ce8ea000'
  },
  { 
    title: 'Marron 5 mood',
    owner: 'Ebert Mota',
    url: 'https://open.spotify.com/playlist/36Rq4hI9wnD6twJS7GaMf3?si=4590ae28cb794a1e',
    cover_img: 'https://i.scdn.co/image/ab67706c0000da842be28cdc968e47dd4fabfc11'
  },
  { 
    title: 'Panic! mood',
    owner: 'Ebert Mota',
    url: 'https://open.spotify.com/playlist/3kDql3TUUM6oC1AI0Az9g9?si=9726494d24b24623',
    cover_img: 'https://i.scdn.co/image/ab67706c0000da844ba176e626d0bf8ab52d0586'
  }
]

export const PlaylistSection: React.FC = () => {
  return (
    <div className="grid gap-4 grid-cols-3 grid-rows-3 m-auto justify-center ">
      {playlists.map(playlist => (
        <Card 
          key={playlist.title}
          title={playlist.title}
          owner={playlist.owner}
          cover_img={playlist.cover_img}
          url={playlist.url}
        />
      ))}
    </div>
  )
}