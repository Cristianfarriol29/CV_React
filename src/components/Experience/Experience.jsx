import React from 'react'
import './Experience.scss'

export default function Experience({experience}) {
  return (
    <div className='container'>
      <h1 className='title'>Experiencia Laboral</h1>
      
      <div className="container__card">
        {experience.map((item) => {
          console.log(experience)
          return (
            <div className='list' key={JSON.stringify(item)}>
                <p className="name"> ↗️ {item.name} 📌 {item.where}</p>
                <p className="name"> 📆 Año {item.date}</p>
                
                <p className="name"> 🛠️ {item.description}</p>
               
            </div>
          );
        })}
      </div>


    </div>
  )
}