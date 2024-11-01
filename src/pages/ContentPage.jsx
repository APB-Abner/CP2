import { useParams } from 'react-router-dom';
import Modelo from '../components/Modelo';

// Importar suas imagens
import Fagote from '../assets/fagote.jpeg';
import CA from '../assets/CA.jpeg';
import Bussula from '../assets/Bussula.jpeg';
import Pintura from '../assets/pintura.jpeg';
import Desenho from '../assets/desenho.jpeg';
import Rosto from '../assets/rosto.jpeg';
import A1 from '../assets/1.png'
import A2 from '../assets/2.png'
import A3 from '../assets/3.png'
import M1 from '../assets/m1.jpg'
import ME from '../assets/me.jpg'
import AC from '../assets/ac.jpg'

// Configurar as informações de cada categoria
const categoryData = {
    music: [
        {
            name: 'Fagote',
            description: 'O som profundo e complexo do fagote me conquistou desde a primeira vez que ouvi. Ele traz uma atmosfera única, que é ao mesmo tempo poderosa e introspectiva, e, por isso, se tornou meu instrumento favorito. É quase como se eu pudesse expressar camadas da minha própria personalidade através dele.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Fagote,
            imageAlt: 'Imagem de Fagote'
        },
        {
            name: 'Oboé',
            description: 'Meu segundo instrumento preferido, o oboé, tem uma sonoridade clara e emocional que me conecta a ele em um nível diferente. A expressão que ele proporciona é intensa e delicada ao mesmo tempo, o que o torna perfeito para músicas introspectivas e emocionantes.',
            type: '3d', // Tipo de conteúdo: imagem
            imageSrc: '/oboe.glb',
            scale: 5,
            imageAlt: 'Imagem de outro instrumento musical'
        }
    ],
    photo: [
        {
            name: 'Casamento Alisson e Suellen',
            description: 'Este casamento foi um momento inesquecível, e a fotografia me permitiu capturar a beleza e a emoção daquela ocasião. Amo a fotografia por me dar essa habilidade de guardar e compartilhar momentos especiais, como esse, que carregam tanto significado.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: CA,
            imageAlt: 'Imagem de Fotografia'
        }
    ],
    paint: [
        {
            name: 'O Homem sentado',
            description: 'Gosto de explorar a simplicidade e complexidade das emoções humanas, e este quadro representa bem isso. Pintar algo aparentemente simples, como um homem sentado, me faz refletir sobre a complexidade que existe em cada pessoa, cada gesto, cada momento de pausa.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Pintura,
            imageAlt: 'Imagem de Pintura'
        },
        {
            name: 'O grande rosto',
            description: 'A ideia de pintar um rosto traz um fascínio pela forma humana e suas expressões. Esse rosto é um pouco de mim mesmo e um pouco de todas as pessoas que cruzaram meu caminho. É um tema que sempre me inspira e me conecta à essência das relações humanas.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Rosto,
            imageAlt: 'Imagem de Pintura'
        },
    ],
    draw: [
        {
            name: 'Mapa',
            description: 'Desenhar mapas é como criar novos mundos e cenários onde a imaginação não tem limites. Adoro essa ideia de inventar lugares, distantes ou próximos, e de detalhá-los como se realmente existissem, me permite explorar a fantasia e a possibilidade.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Desenho,
            imageAlt: 'Desenho de um mapa'
        },
        {
            name: 'Bússula',
            description: 'O desenho de uma bússola é um símbolo de busca e orientação, algo que acho essencial para qualquer jornada criativa e pessoal. É um lembrete de que, mesmo no caminho artístico, sempre buscamos algo – talvez uma nova ideia, talvez um propósito.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: Bussula,
            imageAlt: 'Desenho de uma bussula'
        },
    ],
    cp: [
        {
            name: 'Curto prazo',
            description: 'No curto prazo, planejo me aprofundar em habilidades de design e programação para melhorar meus projetos, como o site de customização de carros em 3D que estou desenvolvendo. Quero terminar com um site completo e interativo.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: A1,
            imageAlt: 'Imagem futuro curto'
        },
    ],
    mp: [
        {
            name: 'Médio prazo',
            description: 'No médio prazo, pretendo me aprofundar em programação e dados, quero entender melhor a área de BI e como impactar na soluçãoes atraves disso.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: A2,
            imageAlt: 'Imagem futuro médio'
        },
    ],
    lp: [
        {
            name: 'Longo prazo',
            description: 'No longo prazo, pretendo me tornar um desenvolvedor full-stack e trabalhar em projetos de tecnologia que tenham impacto positivo na sociedade. Quero criar soluções inovadoras e acessíveis para problemas reais.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: A3,
            imageAlt: 'Imagem futuro longo'
        },
    ],
    mi: [
        {
            name: 'Descobertas na Música',
            description: 'Aprender a tocar múltiplos instrumentos foi libertador e transformador. Cada um deles me trouxe diferentes perspectivas e sensações, fazendo com que eu me entendesse melhor.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: M1,
            imageAlt: 'Imagem fagote com partituras atrás'
        }
    ],
    me: [
        {
            name: 'Mudança de Ambiente e Ensino Médio',
            description: 'Ter a oportunidade de representar uma turma como representante foi um desafio e uma conquista pessoal. Isso me ajudou a perceber o valor de ser um bom líder e de escutar as pessoas.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: ME,
            imageAlt: 'Imagem futuro longo'
        }
    ],
    ac: [
        {
            name: 'Descoberta do Autoconhecimento',
            description: 'Conhecer mais sobre TDAH e autocompreensão foram passos essenciais na minha jornada de autoconhecimento. A partir disso, pude entender melhor meus limites e potenciais.',
            type: 'image', // Tipo de conteúdo: imagem
            imageSrc: AC,
            imageAlt: 'Imagem futuro longo'
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
                    {/* Verificação para ajuste de colunas com base na quantidade de items */}
                    <div className={`grid ${categoryItems.length === 1 ? 'grid-cols-1' : 'grid-cols-1 sm:grid-cols-2 lg:grid-cols-3'} gap-y-12 gap-x-8`}>
                        {categoryItems.map((item, index) => (
                            <div key={index} className="group relative">
                                <h1 className="text-3xl font-bold text-gray-900">
                                    {item.name.charAt(0).toUpperCase() + item.name.slice(1)}
                                </h1>
                                <div className={`${categoryItems.length === 1 ? 'd-flex justify-center items-center gap-4 ' : ""}mt-6 w-full bg-white p-4 rounded-lg shadow-md`}>
                                    {/* Condicional para verificar se é imagem ou 3D */}
                                    {item.type === 'image' ? (
                                        <div className="max-w-max h-64 bg-gray-200 rounded-lg overflow-hidden">
                                            <img
                                                src={item.imageSrc}
                                                alt={item.imageAlt}
                                                className="h-full w-full object-cover object-center"
                                            />
                                        </div>
                                    ) : (
                                        <div className="w-full h-64 bg-gray-200 rounded-lg overflow-hidden">
                                            <Modelo modelo={item.imageSrc} scale={item.scale} />
                                        </div>
                                    )}
                                    <p className="mt-2 text-gray-600">{item.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>

    );
}

export default CategoryPage;