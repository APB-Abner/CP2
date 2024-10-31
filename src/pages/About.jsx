import Eu from "../assets/eu.jpg"


export default function About() {
    return (
        <div className="row d-flex p-4">
            <div className="col-md-6 col-12 my-3 d-flex justify-center gap-10">
                <p className="text-center content-center">Um apaixonado por tecnologia, sou um ser criativo com adora música, desenho e fotografia. No meu tempo livre, gosto de tocar músicas, treinar, fazer animações e jogar videogame. Minha curiosidade me levou a explorar temas como mitologia, ficção científica e design, tanto nos meus projetos pessoais quanto nos meus hobbies.</p>
            </div>
            <div className="col-md-6 col-12 my-3 justify-center gap-10">
                <img className="figure-img img-fluid rounded" src={Eu} alt="Abner no sol" />
            </div>
        </div>
    );
}

//"col-md-6 col-12 d-flex justify-content-center">
