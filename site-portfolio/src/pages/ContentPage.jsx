import React from 'react'
import { useParams } from 'react-router-dom'

// Importar suas imagens
import Fagote from '../assets/fagote.jpeg'
import Fo from '../assets/Ebaa.jpeg'
import Pintura from '../assets/pintura.jpeg'
import Desenho from '../assets/desenho.jpeg'
import Espelho from '../assets/espelho.jpg'

// Configurar as informações de cada categoria
const categoryData = {
    music: {
        name: 'Música',
        description: 'Uma longa jornada musical...',
        imageSrc: Fagote,
        imageAlt: 'Imagem de Fagote'
    },
    game: {
        name: 'Games',
        description: 'Um descobrimento no mundo dos games...',
        imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
        imageAlt: 'Imagem de Games'
    },
    photo: {
        name: 'Fotografia',
        description: 'Um trabalho criativo na fotografia...',
        imageSrc: Fo,
        imageAlt: 'Imagem de Fotografia'
    },
    paint: {
        name: 'Pintura',
        description: 'A arte da pintura...',
        imageSrc: Pintura,
        imageAlt: 'Imagem de Pintura'
    },
    draw: {
        name: 'Desenho',
        description: 'Um amor pelo desenho...',
        imageSrc: Desenho,
        imageAlt: 'Imagem de Desenho'
    },
    work: {
        name: 'Treino',
        description: 'O orgulho no treino...',
        imageSrc: Espelho,
        imageAlt: 'Imagem de Treino'
    }
}

function CategoryPage() {
    // Pega o parâmetro dinâmico da URL
    const {name} = useParams()

    // Busca os dados correspondentes à categoria
    const categoryInfo = categoryData[name]

    // Se não encontrar a categoria, pode renderizar algo como "Página não encontrada"
    if (!categoryInfo) {
        return <h1>Categoria não encontrada</h1>
    }

    // Renderizar a página da categoria dinamicamente
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h1 className="text-3xl font-bold text-gray-900">{categoryInfo.name}</h1>
                    <p className="mt-4 text-lg text-gray-600">{categoryInfo.description}</p>
                    <div className="mt-6">
                        <img
                            alt={categoryInfo.imageAlt}
                            src={categoryInfo.imageSrc}
                            className="h-full w-full object-cover object-center rounded-lg"
                        />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CategoryPage
