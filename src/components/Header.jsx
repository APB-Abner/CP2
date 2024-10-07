import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PaintBrushIcon, PuzzlePieceIcon, MusicalNoteIcon, CameraIcon, ArrowPathRoundedSquareIcon, PencilIcon } from '@heroicons/react/24/outline'
import FlyMenu from './FlyMenu'

const navigation = [
    { name: 'Home', href: '/', current: true, hasMenu: false },
    {
        name: 'Works', href: 'works', current: false, hasMenu: true, subMenu: [
            {
                name: 'Música',
                description: 'Uma longa jornada',
                icon: MusicalNoteIcon,
                href: 'music',
            },
            {
                name: 'Games',
                description: 'Um descobrimento',
                icon: PuzzlePieceIcon,
                href: 'game',
            },
            {
                name: 'Fotografia',
                description: 'Um trabalho',
                icon: CameraIcon,
                href: 'photo',
            },
            {
                name: 'Pintura',
                description: 'Uma arte',
                icon: PaintBrushIcon,
                href: 'paint',
            },
            {
                name: 'Desenho',
                description: 'Um amor',
                icon: PencilIcon,
                href: 'draw',
            },
            {
                name: 'Treino',
                description: 'Um orgulho',
                icon: ArrowPathRoundedSquareIcon,
                href: 'work',
            },
        ],
    },
    { name: 'Sobre', href: 'about', current: false, hasMenu: false },
    { name: 'Contato', href: 'contact', current: false, hasMenu: false },
]

const solutions = [

];

const callsToAction = [

];


function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Header() {
    return (
        <Disclosure as="nav" className="bg-gray-800">
            <div className="row mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
                <div className="d-flex h-16 items-center sm:justify-between">
                    <div className="inset-y-0 left-2 flex max-h-max items-center sm:hidden">
                        {/* Mobile menu button */}
                        <DisclosureButton className="group relative inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                            <span className="absolute -inset-0.5" />
                            <span className="sr-only">Open main menu</span>
                            <Bars3Icon aria-hidden="true" className="block h-6 w-6 group-data-[open]:hidden" />
                            <XMarkIcon aria-hidden="true" className="hidden h-6 w-6 group-data-[open]:block" />
                        </DisclosureButton>
                    </div>
                    <div className="flex flex-shrink-0 items-center justify-center">
                        <img
                            alt="Abner"
                            src="logo.svg"
                            className="h-8 w-auto"
                        />
                        <div className="hidden sm:ml-12 sm:flex sm:items-center sm:justify-end">
                            <FlyMenu className="flex space-x-6" navigation={navigation} solutions={solutions} callsToAction={callsToAction} />
                        </div>
                    </div>
                </div>
            </div>

            <DisclosurePanel className="sm:hidden">
                <div className="space-y-1 px-2 pb-3 pt-2">
                    {navigation.map((item) => (
                        <DisclosureButton
                            key={item.name}
                            as="a"
                            href={item.href}
                            aria-current={item.current ? 'page' : undefined}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'block rounded-md px-3 py-2 text-base font-medium',
                            )}
                        >
                            {item.name}
                        </DisclosureButton>
                    ))}
                </div>
            </DisclosurePanel>
        </Disclosure>
    )
}







