import React from 'react'

const Hero = () => {
    return (
        <>
            {/* <!-- Hero --> */}
            <section className="py-8 bg-blue-50">
                <div
                    className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col items-center"
                >
                    <div className="text-center">
                        <h1
                            className="text-4xl font-extrabold text-blue sm:text-5xl md:text-6xl"
                        >
                            Path to being a techie
                        </h1>
                        <p className="my-4 text-xl text-black">
                            Find the Course that fits your skills and needs
                        </p>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Hero