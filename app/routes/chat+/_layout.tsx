import { Outlet } from '@remix-run/react'
import { Layout } from '~/components/Layout'

export default function () {
  const navPages = [
    { titulo: 'Início', href: '#' },
    { titulo: 'Mapa Geral', href: '#' },
  ]

  return (
    <Layout navigation={navPages}>
      <Outlet />
    </Layout>
  )
}
