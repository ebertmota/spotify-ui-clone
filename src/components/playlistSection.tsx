import { ReactNode } from "react"
import { Card } from "./card"



const playlists = [{
  title: 'Do you feel ?',
  owner: 'Ebert Mota',
  url: 'https://open.spotify.com/playlist/4UVSWBw9scePVEHqeco6N5?si=a60c1b6f1a6d4091',
  cover_img: 'https://avatars.githubusercontent.com/u/48302018?v=4'
}]

export const PlaylistSection: React.FC = () => {
  return (
    <div>
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