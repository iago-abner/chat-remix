import { ChevronRightIcon } from '@heroicons/react/24/outline'
import { Link } from '@remix-run/react'
import { cn } from '~/lib/utils'

type Props = {
  href: string
  isCurrentPage: boolean
  children: React.ReactNode
}

export function Crumb({ href, isCurrentPage, children }: Props) {
  return (
    <li key={href} className="flex items-center gap-x-4">
      <ChevronRightIcon className="h-4 w-4" />
      <Link
        to={href}
        className={cn({
          'text-high-400 hover:text-high-500': isCurrentPage,
          'hover:text-high-400': !isCurrentPage
        })}
      >
        {children}
      </Link>
    </li>
  )
}
