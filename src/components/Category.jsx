import Espelho from '../assets/espelho.jpg'
import Fagote from '../assets/fagote.jpeg'
import Fo from '../assets/Ebaa.jpeg'
import Pintura from '../assets/3d/pintura.jpeg'
import Vida from '../assets/momo.jpeg'
import Desenho from '../assets/desenho.jpeg'
import Cur from '../assets/amamos_sono.jpg'
import { Link } from 'react-router-dom'

const callouts = [
    {
        name: 'Música',
        description: 'Uma longa jornada',
        imageSrc: Fagote,
        imageAlt: 'Imagem Fagote',
        href: 'music',
    },
    {
        name: 'Games',
        description: 'Um descobrimento',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Wood table with porcelain mug, leather journal, brass pen, leather key ring, and a houseplant.',
        href: 'games',
    },
    {
        name: 'Fotografia',
        description: 'Um trabalho',
        imageSrc: Fo,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'photo',
    },
    {
        name: 'Pintura',
        description: 'Uma arte',
        imageSrc: Pintura,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'paint',
    },
    {
        name: 'Desenho',
        description: 'Um amor',
        imageSrc: Desenho,
        imageAlt: 'Collection of four insulated travel bottles on wooden shelf.',
        href: 'draw',
    },
    {
        name: 'Treino',
        description: 'Um orgulho',
        imageSrc: Espelho,
        imageAlt: 'Abner no espelho.',
        href: 'work',
    },
    {
        name: 'Familia',
        description: 'Minha vida',
        imageSrc: Vida,
        imageAlt: 'Abner no espelho.',
        href: 'familly',
    }, 
    {
        name: 'Curso',
        description: 'Um orgulho',
        imageSrc: Cur,
        imageAlt: 'Abner no espelho.',
        href: 'work',
    },
]

export default function Example() {
    return (
        <div className="bg-gray-100">
            <div className="d-flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">O Abner</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <Link to={`/${callout.href}`}>
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            alt={callout.imageAlt}
                                            src={callout.imageSrc}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-sm text-gray-500">
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </h3>
                                    <p className="text-base font-semibold text-gray-900">{callout.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
