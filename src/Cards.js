import React, { useState } from 'react'

import './App.css'
import CardList from './components/CardList'
import Form from './components/Form'

const Cards = () => {
  const [cards, setCards] = useState([])

  const addNewCard = (cardInfo) => {
    setCards(cards.concat(cardInfo))
  }

  return (
    <div>
      <Form onSubmit={addNewCard} />
      <CardList cards={cards} />
    </div>
  )
}

export default Cards
