import React, { useState } from 'react'

import './down.css'

const downInfo = [
  {
    id: '1',
    title: '500+',
    description: 'Lives touched'
  },
  {
    id: '2',
    title: '10+',
    description: 'States reached'
  },
  {
    id: '3',
    title: '50+',
    description: 'Donations'
  }
]

const Down = () => {

  const [downs, setDowns] = useState(downInfo)

  return (
    <section className="down">
      <div className="container downer">
        {
          downs.map(({id, title, description}) => {
            return <div key={id} className="down-info">
              <h3>{ title }</h3>
              <p>{ description }</p>
            </div>
          })
        }
      </div>
    </section>
  )
}

export default Down