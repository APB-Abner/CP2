import { Disclosure, DisclosureButton, DisclosurePanel, Menu, MenuButton, MenuItem, MenuItems } from '@headlessui/react'
import { Bars3Icon, BellIcon, XMarkIcon, PaintBrushIcon, PuzzlePieceIcon, MusicalNoteIcon, CameraIcon, ArrowPathRoundedSquareIcon, PencilIcon } from '@heroicons/react/24/outline'

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

export default navigation