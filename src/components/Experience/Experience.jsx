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
                <p className="name"> āļø {item.name} š {item.where}</p>
                <p className="name"> š AĆ±o {item.date}</p>
                
                <p className="name"> š ļø {item.description}</p>
               
            </div>
          );
        })}
      </div>


    </div>
  )
}