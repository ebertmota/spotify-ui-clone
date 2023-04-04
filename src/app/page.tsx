"use client";
import { Header, NavigationMenu } from "@/components";
import { Dropdown } from "@/components/dropdown";

export default function Home() {
  return (
    <main className="flex ">
      <NavigationMenu />
      <div>
        <Header />
      </div>
      <Dropdown title="Ebert Mota" items={[{title: 'Sair'}]}/>
    </main>
  )
}
