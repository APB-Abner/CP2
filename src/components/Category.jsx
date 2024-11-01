/* eslint-disable react/prop-types */

import { Link } from 'react-router-dom'

export default function Example({callouts, title}) {
    return (
        <div className="bg-gray-100">
            <div className="d-flex mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 ">
                <div className="mx-auto max-w-2xl py-16 sm:py-24 lg:max-w-none lg:py-32">
                    <h2 className="text-2xl font-bold text-gray-900">{title}</h2>

                    <div className="mt-6 space-y-12 lg:grid lg:grid-cols-3 lg:gap-x-6 lg:gap-y-3 lg:space-y-0">
                        {callouts.map((callout) => (
                            <div key={callout.name} className="group relative">
                                <Link to={`/${callout.href}`}>
                                    <div className="relative h-80 w-full overflow-hidden rounded-lg bg-white sm:aspect-h-1 sm:aspect-w-2 lg:aspect-h-1 lg:aspect-w-1 group-hover:opacity-75 sm:h-64">
                                        <img
                                            alt={callout.imageAlt}
                                            src={callout.imageSrc}
                                            className="h-full w-full object-cover object-center"
                                        />
                                    </div>
                                    <h3 className="mt-6 text-base font-semibold text-gray-900 ">
                                        <span className="absolute inset-0" />
                                        {callout.name}
                                    </h3>
                                    <p className="text-sm text-gray-500">{callout.description}</p>
                                </Link>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    )
}
