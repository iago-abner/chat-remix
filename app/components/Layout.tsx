import { Header } from './Header'

export function Layout({
  children,
  navigation,
}: {
  children: React.ReactElement
  navigation: {
    titulo: string
    href: string
  }[]
}) {
  return (
    <div className="flex h-screen flex-col">
      <Header navigation={navigation} />
      <main
        role="main"
        className="flex-grow bg-high-background md:overflow-hidden p-4"
      >
        {children}
      </main>
    </div>
  )
}
