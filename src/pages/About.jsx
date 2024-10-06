import Eu from "../assets/eu.jpg"


export default function About() {
    return (
        <div className="container p-4">
            <div className="d-flex justify-center gap-10">
                <p className="col-4 text-center content-center">Um apaixonado por tecnologia, sou um ser criativo com adora música, desenho e fotografia. No meu tempo livre, gosto de tocar músicas, treinar, fazer animações e jogar videogame. Minha curiosidade me levou a explorar temas como mitologia, ficção científica e design, tanto nos meus projetos pessoais quanto nos meus hobbies.</p>
                <img className="col-4 figure-img img-fluid rounded " src={Eu} alt="Abner no sol" />
            </div>
        </div>
    );
}

