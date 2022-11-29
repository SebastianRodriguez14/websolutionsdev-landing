import React, { useEffect, useState } from 'react'
import rocketIcon from '../assets/icon_cohete.svg'
import logoBackground from '../assets/logo_background.png'
import './landing-style.css'


export const LandingPart01 = () => {

    const [sizeGradient, setSizeGradient] = useState("5.18")


    useEffect(() => {
        const $rocketIcon = document.getElementById('rocket-icon')
        setTimeout(() => {
            $rocketIcon.style.transform = `translateY(-32%)`
        }, 50)
    }, [])

    useEffect(() => {
        const $backgroundLanding = document.getElementById('background-landing')
        $backgroundLanding.style.background = `radial-gradient(${sizeGradient}% ${sizeGradient}% at 50% 100%,#000710, #004E7A 48.44%, #001329)`
        increaseSizeGradient()
    }, [sizeGradient])


    const generateNewSizeGradient = (sizeIncrease) => {

        return new Promise((response, reject) => {
            const size = parseFloat(sizeGradient)
            setTimeout(() => {
                const newSize = size + sizeIncrease
                response(newSize)
            }, 1)
        })
    }

    const increaseSizeGradient = async () => {
        if (sizeGradient <= 112.11) {

            let sizeIncrease

            if (sizeGradient <= 90) {
                sizeIncrease = 0.2
            } else {
                sizeIncrease = 0.15
            }

            const newSize = await generateNewSizeGradient(sizeIncrease)
            setSizeGradient(newSize.toString())
        }
    }


    return <>
        <div id='background-landing' className='w-full h-screen flex justify-center'>
            <img src={logoBackground} className='landing-logo-bg' />
            <img id='rocket-icon' src={rocketIcon} className='landing-rocket-icon' />
            <div className='landing-layout'>

                <center className='landing-title'>
                    IMPULSA TU<br />NEGOCIO
                </center>
                <span className='landing-slogan'>
                    a base de la tecnología web
                </span>
                <button className='landing-button-meet'>
                    AGENDA UNA REUNIÓN
                </button>
            </div>

        </div>

    </>

}
