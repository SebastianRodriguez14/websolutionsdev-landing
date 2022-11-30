import React from 'react'
import "./parte2.css"
import img1 from '../assets/images/icon1.png'
import img2 from '../assets/images/icon2.png'
import img3 from '../assets/images/icon3.png'

export const LandingPart02 = () => {

  return (
      <div className='todo'>
        <div className='titulo'>
        <h1>Nuestros Servicios</h1>
        </div>
      <div className="contenedor">
      <div className="card">
            <div class="card-encabezado">
                <div class="imagen">
                    <img  src={img1} alt=""/>
                </div>
                
                <div class="title">
                    <h1>Creacion y Desarrollo de Paginas Web </h1>
                </div>          
            </div>
            <div class="card-contenido">
                <div class="desplazar">
                    <h2>Nosotros nos encargaremos de Diseñar y desarrollar tu Pagina Web completamente a tu gusto</h2>
                </div>
            </div>
        </div>

      <div class="card">
            <div class="card-encabezado">
                <div class="imagen">
                    <img  src={img2} alt=""/>
                </div>
                
                <div class="title">
                    <h1>Mantenimientos de Paginas Web </h1>
                </div>
                
            </div>
            <div class="card-contenido">
                <div class="desplazar">
                    <h2>Mejoramos y Agilizamos el funcionamiento de tu Sistema Web</h2> 
                </div>
            </div>
        </div>

        <div class="card">
            <div class="card-encabezado">
                <div class="imagen">
                    <img  src={img3} alt=""/>
                </div>
                
                <div class="title">
                    <h1>Creacion y Desarrollo de E-Commers</h1>
                </div>
                
            </div>
            <div class="card-contenido">
                <div class="desplazar">
                    <h2>Nuestra función se basaría en la creación de catálogos y tiendas online con la última tecnología.</h2>
                    
                </div>
            </div>
        </div>
      </div>
      </div>
  )
}
