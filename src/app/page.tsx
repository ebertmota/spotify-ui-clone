"use client";
import { Header, NavigationMenu, PlaylistSection } from "@/components";

export default function Home() {
  return (
    <main className="flex flex-col">
      <div className="flex">
        <NavigationMenu />
        <div className="flex flex-col flex-1 px-6">
          <Header />
          <div className="mt-8 m-auto max-w-[1940px] h-screen">
            <PlaylistSection />
          </div>
        </div>
      </div>
    </main>
  )
}
