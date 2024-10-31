import Eu from "../assets/eu.jpg"


export default function About() {
    return (
        <div className="container my-5 p-4">
            <div className="row d-flex align-items-center justify-center">
                <div className="row d-flex col-md-6 my-3 gap-2 text-center">
                    <p className="text-center content-center">Meu nome é Abner tenho 19 anos. Sou um apaixonado por tecnologia, sou um ser criativo com adora música, desenho e fotografia. No meu tempo livre, gosto de tocar músicas, treinar, fazer animações e jogar videogame. Minha curiosidade me levou a explorar temas como mitologia, ficção científica e design, tanto nos meus projetos pessoais quanto nos meus hobbies.</p>
                    <p className="text-center content-center"> Minhas horas vagas são preenchidas com um equilíbrio de arte e ação. Quando não estou fotografando ou criando animações, aproveito para tocar algum instrumento, escrever poesias ou explorar novos desafios em jogos.</p>
                    <p className="text-center content-center"> Sou focado e organizado, o que me ajuda a lidar bem com responsabilidades e compromissos, mas mantenho um lado calmo e metódico. Ao mesmo tempo, gosto de trazer energia e intensidade para o que faço.</p>
                </div>
                <div className="col-md-6 my-3 d-flex justify-center">
                    <img className="img-fluid rounded img-50" src={Eu} alt="Abner no sol" />
                </div>
            </div>
        </div>
    );
}

//"col-md-6 col-12 d-flex justify-content-center">
