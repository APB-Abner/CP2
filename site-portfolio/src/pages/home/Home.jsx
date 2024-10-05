import Typewriter from "typewriter-effect";
import { introdata } from "../../content_option";
import { Link } from "react-router-dom";
import Apenas from "../../assets/img/Ebaa.jpeg";

export default function Home() {

    return (
        <div className="container my-5 p-4">
            <div className="row d-flex align-items-center">

                <div className="row d-flex col-md-6 my-3 gap-5 text-center">
                    <h2 className="mb-1x">{introdata.title}</h2>
                    <h1 className="fluidz-48 mb-1x text-3xl font-bold">
                        <Typewriter
                            options={{
                                strings: [
                                    introdata.animated.first,
                                    introdata.animated.second,
                                    introdata.animated.third,
                                ],
                                autoStart: true,
                                loop: true,
                                deleteSpeed: 10,
                            }}
                        />
                    </h1>
                    <p className="mb-1x">{introdata.description}</p>
                    <p className="mb-1x">{introdata.c}</p>
                </div>
                <div className="col-md-6 my-3">
                    <img className="rounded" src={Apenas} alt="Abner com câmera" />
                </div>
            </div>
        </div>

    );
}

