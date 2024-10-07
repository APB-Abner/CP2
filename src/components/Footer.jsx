import React from "react";
import { Link } from "react-router-dom";
import navigation from "../data/navigation";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ')
}

export default function Footer({ }) {
    return ( 
        <>
            <footer className="bottom-0 hidden md:flex bg-gray-800 text-white py-6">
                <div className="container px-5">
                    <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between">
                        <ul className="my-0 flex space-x-4">
                                {navigation.map((item) => (
                                    <Link
                                        key={item.name}
                                        as="a"
                                        to={item.href}
                                        aria-current={item.current ? 'page' : undefined}
                                        className={classNames(
                                             'text-gray-400 hover:text-white',
                                            
                                        )}
                                    >
                                        {item.name}
                                    </Link>))}
                        </ul>
                        <p className="my-0 flex text-center text-sm">&copy; 2024 Abner. Todos os direitos reservados.</p>
                        <div className="my-0 flex space-x-4">
                            <a href="https://github.com/APB-Abner" className="text-gray-400 hover:text-white">
                                <i className="bi bi-github"></i>
                            </a>
                            <a href="https://www.linkedin.com/in/abner-pb/" className="text-gray-400 hover:text-white">
                                <i className="bi bi-linkedin"></i>
                            </a>
                            <a href="https://www.instagram.com/abner.pb/" className="text-gray-400 hover:text-white">
                                <i className="bi bi-instagram"></i>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

 