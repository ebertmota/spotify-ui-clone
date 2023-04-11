import '@/styles/globals.css'

export const metadata = {
  title: 'Spotify - Web Player',
  description: 'An amazing ui clone of spotify web player.',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body>
        <div className='flex flex-col h-screen bg-gradient-to-b bg-no-repeat from-[#381232] via-black-400/[40]  to-black-400/[99.74]'>
          {children}
        </div>
      </body>
    </html>
  )
}
