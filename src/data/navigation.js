import { PaintBrushIcon, PuzzlePieceIcon, MusicalNoteIcon, CameraIcon, ArrowPathRoundedSquareIcon, PencilIcon } from '@heroicons/react/24/outline'

const navigation = [
    { name: 'Home', href: '/', current: true, hasMenu: false },
    {
        name: 'Interesses', href: 'interesses', current: false, hasMenu: true, subMenu: [
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
    { name: 'Memórias', href: 'memory', current: false, hasMenu: false },
    { name: 'Inspirações', href: 'inspirations', current: false, hasMenu: false },
    { name: 'Futuro', href: 'future', current: false, hasMenu: false },
    { name: 'Sobre', href: 'about', current: false, hasMenu: false },
    { name: 'Contato', href: 'contact', current: false, hasMenu: false },
]

export default navigation