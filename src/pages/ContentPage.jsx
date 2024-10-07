import React from 'react';
import { useParams } from 'react-router-dom';
import Modelo from '../components/Modelo';

// Importar suas imagens
import Fagote from '../assets/fagote.jpeg';
import Fo from '../assets/Ebaa.jpeg';
import Pintura from '../assets/pintura.jpeg';
import Desenho from '../assets/desenho.jpeg';
import Espelho from '../assets/espelho.jpg';

// Configurar as informações de cada categoria
const categoryData = {
    music: [
        {
            name: 'Fagote',
            description: 'Instrumento preferido',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Fagote,
            imageAlt: 'Imagem de Fagote'
        },
        {
            name: 'Oboé',
            description: '2° instrumento preferido',
            type: '3d', // Tipo de conteúdo: imagem
            imageSrc: '/oboe.glb',
            scale: 5,
            imageAlt: 'Imagem de outro instrumento musical'
        }
    ],
    game: [
        {
            name: 'Games',
            description: 'Um descobrimento no mundo dos games...',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: 'https://tailwindui.com/plus/img/ecommerce-images/home-page-02-edition-02.jpg',
            imageAlt: 'Imagem de Games'
        }
    ],
    photo: [
        {
            name: 'Fotografia',
            description: 'Um trabalho criativo na fotografia...',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Fo,
            imageAlt: 'Imagem de Fotografia'
        }
    ],
    paint: [
        {
            name: 'Pintura',
            description: 'A arte da pintura...',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Pintura,
            imageAlt: 'Imagem de Pintura'
        }
    ],
    draw: [
        {
            name: 'Desenho',
            description: 'Um amor pelo desenho...',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Desenho,
            imageAlt: 'Imagem de Desenho'
        }
    ],
    work: [
        {
            name: 'Treino',
            description: 'O orgulho no treino...',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Espelho,
            imageAlt: 'Imagem de Treino'
        }
    ]
};

function CategoryPage() {
    // Pega o parâmetro dinâmico da URL
    const { name } = useParams();

    // Busca os dados correspondentes à categoria
    const categoryItems = categoryData[name];

    // Se não encontrar a categoria, pode renderizar algo como "Página não encontrada"
    if (!categoryItems) {
        return <h1>Categoria não encontrada</h1>;
    }

    // Renderizar a página da categoria dinamicamente
    return (
        <div className="bg-gray-100">
            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h1 className="text-3xl font-bold text-gray-900">{name.charAt(0).toUpperCase() + name.slice(1)}</h1>
                    <div className="mt-6 grid grid-cols-1 gap-y-12 gap-x-6 sm:grid-cols-2 lg:grid-cols-3 xl:gap-x-8">
                        {categoryItems.map((item, index) => (
                            <div key={index} className="group relative">
                                {/* Condicional para verificar se é imagem ou 3D */}
                                {item.type === 'image' ? (
                                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                        <img
                                            src={item.imageSrc}
                                            alt={item.imageAlt}
                                            className="w-full h-full object-cover object-center"
                                        />
                                    </div>
                                ) : (
                                    <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                        <Modelo
                                        modelo={item.imageSrc}
                                        scale={item.scale}
                                        />
                                    </div>
                                )}
                                <h3 className="mt-4 text-lg font-semibold text-gray-900">{item.name}</h3>
                                <p className="mt-2 text-gray-600">{item.description}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}

export default CategoryPage;