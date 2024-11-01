import { Disclosure, DisclosureButton, DisclosurePanel } from '@headlessui/react'
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline'
import FlyMenu from './FlyMenu'
import navigation from '../data/navigation.js'
import { Link } from 'react-router-dom'



const solutions = [];
const callsToAction = [];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-gray-800 sticky-top">
            <div className="row mx-auto max-w-7xl px-2 md:px-6 lg:px-8 ">
                <div className="d-flex h-16 items-center md:justify-between">
                    <div className="inset-y-0 left-2 flex max-h-max items-center md:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-end md:justify-center">
                        <img
                            alt="Abner"
                            src="logo.svg"
                            className="h-8 w-auto"
                        />
                        <div className="hidden md:ml-12 md:flex md:items-center md:justify-end">
                            <FlyMenu className="flex space-x-6" navigation={navigation} solutions={solutions} callsToAction={callsToAction} />
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="md:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <Link
                            key={item.name}
                            to={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </Link>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}







