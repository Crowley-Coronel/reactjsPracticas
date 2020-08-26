import React from 'react'

import { Card, CardText, CardBody, CardTitle, CardHeader } from 'reactstrap'

const CCard = (props) => {
  return (
    <div>
      <Card style={{ width: '400px', margin: '20px' }}>
        <CardHeader> Head </CardHeader>
        <CardBody>
          <img style={{ width: '50px' }} src={props.avatar_url} alt="imagen" />
          <CardTitle>{props.name}</CardTitle>
          <CardText>{props.blog}</CardText>
        </CardBody>
      </Card>
    </div>
  )
}

const CardList = (props) => (
  <div>
    {props.cards.map((card, index) => (
      <CCard {...card} key={index} />
    ))}
  </div>
)

export default CardList
