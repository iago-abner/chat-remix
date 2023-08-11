import { Link, useLocation, useMatches } from '@remix-run/react'
import { AiFillHome } from 'react-icons/ai'

type BreadcrumbProps = {
  navigation: { titulo: string; href: string }[]
}

export function Breadcrumbs({ navigation }: BreadcrumbProps) {
  const matches = useMatches()
  const location = useLocation()
  const routes = matches.filter(node => node.handle)

  return (
    <div className="mx-6 border-b border-gray-300 text-xs text-high-200">
      <ul className="flex h-11 items-center gap-x-4 px-2">
        <li className="flex items-center">
          <Link to="/" className="hover:text-high-300">
            <AiFillHome className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </li>
        {routes.map(route => {
          return (
            <div key={route.pathname} className="flex gap-x-4">
              {route.handle?.breadcrumb({ currentPage: location.pathname })}
            </div>
          )
        })}
      </ul>
    </div>
  )
}
