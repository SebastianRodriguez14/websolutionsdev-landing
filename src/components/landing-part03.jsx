import React from 'react'
import ImageRef from '../assets/images/persons1.png'
import Logo from '../assets/images/logo2.png'

export const LandingPart03 = () => {
    return (
        <div className='w-full bg-[#01192D] text-[#EAF2FF]'>
            <div>
                <img
                    className='absolute m-auto top-0 bottom-0 right-0 left-0'
                    src={Logo}
                />
            </div>
            <div
                className={
                    'max-w-[1280px] mx-auto flex flex-col xl:flex-row-reverse h-screen py-10 '
                }
            >
                <div className='text-center px-24 lg:self-center xl:text-end'>
                    <h1 className='text-4xl font-bold'>¿Quienes somos?</h1>
                    <p className='text-lg px-10 mt-5 sm:mt-10 sm:px-10 sm:tracking-wider md:px-28 xl:px-0 xl:text-3xl '>
                        Somos una empresa enfocada en crear, desarrollar y
                        mantener sitios web para grandes organizaciones y/o
                        pequeñas empresas.
                    </p>
                    <p className='text-lg px-10 mt-5 sm:px-10 sm:tracking-wider md:px-28 xl:px-0 xl:text-3xl '>
                        Trabajamos con la opinión de los clientes sobre sus
                        proyectos, ya que esto es clave para lograr juntos una
                        pieza verdaderamente útil que cumpla con sus
                        espectativas.
                    </p>
                </div>
                <img
                    className=' mt-16 w-[300px] sm:w-[400px] md:mt-4 md:w-[450px] self-center xl:w-[500px] lg:mt-0'
                    src={ImageRef}
                />
            </div>
        </div>
    )
}
