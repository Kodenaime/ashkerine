import React, { useState } from 'react'

import './faqs.css'
const faqsInfo = [
  {
    id: '1',
    title: "What's your source of income?",
    body: 'I assure everyone that i have a very clean source if income and my income is not from any fraudulent or any illegal source of income.'
  },
  {
    id: '2',
    title: 'How can i be  part of this movement?',
    body: 'You can be a part of the great movement today by clicking he Donate button and follow the next steps.'
  },
  {
    id: '3',
    title: 'What state are you coming to next?',
    body: 'That is in the hands of the Lord as i go wherever he leads me there will i go!'
  },
  {
    id: '4',
    title: 'What kind of people do you help?',
    body: 'By the help of God i am used to help those in need and put smiles on the faces of people who are finding it hard.'
  },
  {
    id: '5',
    title: 'Do you love what you do?',
    body: 'Yes!  I love and enjoy every bit of what i do, it feels good to be used to be of help to others.'
  },
  {
    id: '6',
    title: 'Where are you from?',
    body: 'I was born and raised in Lagos State Nigeria.'
  },
]

const Faqs = () => {

  const [infos, setInfos] = useState(faqsInfo)

  return (
    <section className="faqs">
      <div className="container faqs-container">
        <h1>Frequently Asked Questions!</h1>
        <div className="faqs-wrap">
          {
            infos.map(({id, title, body}) => {
              return <div key={id} className="faq">
                <h3>{ title }</h3>
                <p>{ body }</p>
              </div>
            })
          }
        </div>
      </div>
    </section>
  )
}

export default Faqs