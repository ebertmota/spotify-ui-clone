import spotifyLogo from '@/assets/spotify-logo.svg';
import Image from 'next/image';

export const NavigationMenu: React.FC = () => {
  return (
    <div className="bg-black flex flex-col items-start justify-start h-screen w-64 py-6 pl-6">
      <Image src={spotifyLogo} alt="Spotify white logo" width={131} />
    </div>
  )
}