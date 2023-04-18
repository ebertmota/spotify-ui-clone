import spotifyLogo from '@/assets/spotify-logo.svg';
import { House, Icon, MagnifyingGlass, Playlist } from '@phosphor-icons/react'
import Image from 'next/image';
import { useState } from 'react';
import { NavigationTab } from './navigationTab';

type Tab = {
  name: string;
  icon: Icon;
  main?: boolean;
}
const tabs: Tab[] = [
  {
    name: 'Home',
    icon: House,
    main: true
  },
  {
    name: 'Search',
    icon:MagnifyingGlass,
  },
  {
    name: 'Library',
    icon: Playlist
  }
]

export const NavigationMenu: React.FC = () => {
  const [activeTab, setActiveTab] = useState('Home');

  return (
    <div className="bg-black flex flex-col items-start justify-start sm:min-h-full w-64 py-6 px-6">
      <Image src={spotifyLogo} alt="Spotify white logo" width={131} />

      <nav className='flex flex-col w-full mt-10'>
        {tabs.map(tab => (
          <NavigationTab 
            onClick={() => setActiveTab(tab.name)}
            selected={activeTab === tab.name}
            key={tab.name} 
            icon={tab.icon} 
            title={tab.name} 
            iconWeightOnTitleHover={tab.main ? 'bold' : undefined} 
          />
        ))}
      </nav>
    </div>
  )
}