export default function Footer() {
    return ( 
        <>
            <footer className="bg-gray-800 text-white py-6">
                <div className="container p-3">
                    <div className="flex flex-col items-center space-y-4 md:flex-row md:justify-between">
                        <ul className="flex space-x-4">
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Sobre
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Contato
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Privacidade
                                </a>
                            </li>
                            <li>
                                <a href="#" className="text-gray-400 hover:text-white">
                                    Termos
                                </a>
                            </li>
                        </ul>
                        <p className="text-sm">&copy; 2024 Abner. Todos os direitos reservados.</p>
                        <div className="flex space-x-4">
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 2.04c-5.51 0-10 4.49-10 10.02 0 4.42 3.58 8.09 8 8.87v-6.26H8.9V12h2.1V9.88c0-2.07 1.24-3.2 3.1-3.2.9 0 1.85.16 1.85.16v2h-1.04c-1.03 0-1.35.64-1.35 1.3V12h2.3l-.37 2.67h-1.93V21c4.42-.78 8-4.45 8-8.87 0-5.53-4.49-10.02-10-10.02z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M22.23 5.924c-.805.358-1.67.6-2.575.708a4.47 4.47 0 001.96-2.462 9.05 9.05 0 01-2.847 1.084A4.457 4.457 0 0015.54 4a4.46 4.46 0 00-4.452 4.452c0 .347.04.686.115 1.01A12.637 12.637 0 013 5.145a4.443 4.443 0 00-.603 2.24c0 1.547.787 2.91 1.983 3.71a4.44 4.44 0 01-2.017-.556v.057a4.457 4.457 0 003.573 4.367c-.42.112-.862.173-1.317.173-.32 0-.635-.03-.94-.088a4.46 4.46 0 004.165 3.1A8.94 8.94 0 012 19.866 12.605 12.605 0 008.86 22c7.548 0 11.675-6.253 11.675-11.675 0-.18-.004-.357-.012-.533a8.34 8.34 0 002.044-2.13l-.004-.004z"
                                    />
                                </svg>
                            </a>
                            <a href="#" className="text-gray-400 hover:text-white">
                                <svg
                                    className="w-6 h-6"
                                    fill="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        d="M12 0C5.373 0 0 5.373 0 12c0 5.991 4.388 10.954 10.124 11.854v-8.385H7.078v-3.47h3.046v-2.642c0-3.02 1.796-4.675 4.548-4.675 1.319 0 2.692.237 2.692.237v2.966h-1.517c-1.494 0-1.952.928-1.952 1.878v2.237h3.318l-.53 3.47h-2.788V24C19.612 22.954 24 18.009 24 12 24 5.373 18.627 0 12 0z"
                                    />
                                </svg>
                            </a>
                        </div>
                    </div>
                </div>
            </footer>
        </>
     );
}

 