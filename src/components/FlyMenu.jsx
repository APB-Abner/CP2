import { Popover, PopoverButton, PopoverPanel } from '@headlessui/react'
import { ChevronDownIcon } from '@heroicons/react/20/solid'
import { Link } from "react-router-dom";

function classNames(...classes) {
    return classes.filter(Boolean).join(' ');
}


export default function FlyMenu({ solutions = [], callsToAction = [], navigation = [] }) {

    return (
        <div className="flex space-x-4">
            {navigation.map((item) => (
                <Popover key={item.name} className="relative">
                    <div className="inline-flex items-center">
                        {/* Link para a página */}
                        <Link
                            to={item.href}
                            className={classNames(
                                item.current ? 'bg-gray-900 text-white' : 'text-gray-300 hover:bg-gray-700 hover:text-white',
                                'rounded-md px-3 py-2 text-sm font-medium'
                            )}
                        >
                            {item.name}
                        </Link>

                        {/* Botão para abrir o menu */}
                        {item.hasMenu && (
                            <PopoverButton className="inline-flex items-center px-1 text-gray-400 hover:text-white">
                                <ChevronDownIcon aria-hidden="true" className="h-5 w-5" />
                            </PopoverButton>
                        )}
                    </div>

                    {/* Menu suspenso */}
                    {item.hasMenu && (
                        <PopoverPanel
                            transition
                            className="absolute left-1/2 z-10 mt-5 flex w-screen max-w-max -translate-x-1/2 px-4 transition data-[closed]:translate-y-1 data-[closed]:opacity-0 data-[enter]:duration-200 data-[leave]:duration-150 data-[enter]:ease-out data-[leave]:ease-in"
                        >
                            <div className="w-screen max-w-md flex-auto overflow-hidden rounded-3xl bg-white text-sm leading-6 shadow-lg ring-1 ring-gray-900/5">
                                <div className="p-4">
                                    {item.subMenu.map((subItem) => (
                                        <div
                                            key={subItem.name}
                                            className="group relative flex gap-x-6 rounded-lg p-4 hover:bg-gray-50"
                                        >
                                            <div className="mt-1 flex h-11 w-11 flex-none items-center justify-center rounded-lg bg-gray-50 group-hover:bg-white">
                                                <subItem.icon
                                                    aria-hidden="true"
                                                    className="h-6 w-6 text-gray-600 group-hover:text-indigo-600"
                                                />
                                            </div>
                                            <div>
                                                <Link
                                                    to={subItem.href}
                                                    className="font-semibold text-gray-900"
                                                >
                                                    {subItem.name}
                                                    <span className="absolute inset-0" />
                                                </Link>
                                                <p className="mt-1 text-gray-600">
                                                    {subItem.description}
                                                </p>
                                            </div>
                                        </div>
                                    ))}
                                </div>

                                {/* Se quiser adicionar chamadas para ação */}
                                <div className="grid grid-cols-2 divide-x divide-gray-900/5 bg-gray-50">
                                    {callsToAction.map((cta) => (
                                        <a
                                            key={cta.name}
                                            href={cta.href}
                                            className="flex items-center justify-center gap-x-2.5 p-3 font-semibold text-gray-900 hover:bg-gray-100"
                                        >
                                            <cta.icon
                                                aria-hidden="true"
                                                className="h-5 w-5 flex-none text-gray-400"
                                            />
                                            {cta.name}
                                        </a>
                                    ))}
                                </div>
                            </div>
                        </PopoverPanel>
                    )}
                </Popover>
            ))}
        </div>
    );
}