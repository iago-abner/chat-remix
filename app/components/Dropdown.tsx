import { Menu, Transition } from '@headlessui/react'
import { Link } from '@remix-run/react'
import exitIcon from 'app/assets/icons/exit-line.svg'
import { Fragment } from 'react'

export function Dropdown({ image, schema }) {
  return (
    <Menu as="div" className="relative inline-block items-center ">
      <Menu.Button className="flex w-full items-start rounded-md">
        <img src={image} alt="ícone usuario" className="h-4 w-4" />
      </Menu.Button>
      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items
          className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1
        ring-black ring-opacity-5 hover:bg-gray-100 focus:outline-none"
        >
          <Menu.Item>
            <Link
              to="/logout"
              className="mx-2 flex w-full gap-x-4 py-4 text-low-500"
            >
              <img src={exitIcon} alt="" />
              Sair
            </Link>
          </Menu.Item>
        </Menu.Items>
      </Transition>
    </Menu>
  )
}
