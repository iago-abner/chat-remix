import { AiFillHome } from 'react-icons/ai'
import { Link } from '@remix-run/react'

type Props = {
  children: React.ReactNode
  homePage: string
}

export function BreadcrumbList({ children, homePage }: Props) {
  return (
    <ol className="flex items-center space-x-4 text-high-200">
      <li>
        <div>
          <Link to={homePage} className="hover:text-high-300">
            <AiFillHome className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <span className="sr-only">Home</span>
          </Link>
        </div>
      </li>
      {children}
    </ol>
  )
}
