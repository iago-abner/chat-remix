import { Link } from '@remix-run/react'
import chatIcon from 'app/assets/icons/chat.svg'
import moonIcon from 'app/assets/icons/moon.svg'
import refreshIcon from 'app/assets/icons/refresh.svg'
import userIcon from 'app/assets/icons/user.svg'
import logo from 'app/assets/images/logo-white.svg'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/solid'
import { z } from 'zod'
import { type Dispatch, Fragment, type SetStateAction, useState } from 'react'
import { Dialog, Transition } from '@headlessui/react'
import { Breadcrumbs } from './breadcrumb'
import { Dropdown } from './Dropdown'

export const DropdownInputSchema = z.object({})

export function Header({
  navigation,
}: {
  navigation: { titulo: string; href: string }[]
}) {
  const [isOpen, setIsOpen] = useState<boolean>(false)

  return (
    <header className="flex max-w-full flex-col gap-y-2 bg-high-background">
      <nav className="flex h-[72px] items-center justify-between bg-primary-pure px-8 py-4">
        <img src={logo} width={90} height={31} alt="logo" />
        <ul className="hidden items-center gap-4 text-sm font-medium text-white sm:flex md:gap-5">
          {navigation.map(item => (
            <li key={item.titulo}>
              <Link to={item.href}>{item.titulo}</Link>
            </li>
          ))}
        </ul>
        <div className="hidden h-6 items-center gap-4 sm:flex">
          <img
            src={refreshIcon}
            alt="ícone recarregar"
            className="cursor-o h-4 w-4"
          />
          <div className="border-l border-gray-400 pl-4">
            <img src={chatIcon} alt="ícone chat" className="h-4 w-4 " />
          </div>
          <img
            src={moonIcon}
            alt="ícone lua"
            className="inline-block h-4 w-4"
          />
          <Dropdown schema={DropdownInputSchema} image={userIcon} />
        </div>
        <button
          className="block cursor-pointer sm:hidden"
          onClick={() => setIsOpen(prev => !prev)}
        >
          <Bars3Icon className="h-6 w-6 text-white" />
        </button>
        <MobileMenu isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <Breadcrumbs navigation={navigation} />
    </header>
  )
}

function MobileMenu({
  isOpen,
  setIsOpen,
}: {
  isOpen: boolean
  setIsOpen: Dispatch<SetStateAction<boolean>>
}) {
  return (
    <Transition.Root show={isOpen} as={Fragment}>
      <Dialog as="div" className="relative z-10" onClose={setIsOpen}>
        <Transition.Child
          as={Fragment}
          enter="ease-out duration-300"
          enterFrom="opacity-0"
          enterTo="opacity-100"
          leave="ease-in duration-200"
          leaveFrom="opacity-100"
          leaveTo="opacity-0"
        >
          <div className="fixed inset-0 bg-gray-500 bg-opacity-75 transition-opacity" />
        </Transition.Child>

        <div className="fixed inset-0 z-10 overflow-y-auto">
          <div className="flex min-h-full justify-center p-4 text-center sm:items-center sm:p-0">
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
              enterTo="opacity-100 translate-y-0 sm:scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 translate-y-0 sm:scale-100"
              leaveTo="opacity-0 translate-y-4 sm:translate-y-0 sm:scale-95"
            >
              <Dialog.Panel className="relative w-full transform overflow-hidden rounded-md bg-white p-4">
                <div className="flex flex-col gap-y-4">
                  <div className="flex justify-between">
                    <img src={logo} width={90} height={31} alt="logo" />
                    <button onClick={() => setIsOpen(false)}>
                      <XMarkIcon className="h-6 w-6" />
                    </button>
                  </div>
                  <div className="">
                    {/* <Form method="POST" action="/action">
                      <button
                        type="submit"
                        name="_action"
                        value="LOGOUT"
                        className="mx-2 flex w-full justify-center gap-x-4 py-4 text-low-500"
                      >
                        <img src={exitIcon} alt="" />
                        Sair
                      </button>
                    </Form> */}
                    <Link to="/logout">logout</Link>
                  </div>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </div>
      </Dialog>
    </Transition.Root>
  )
}
