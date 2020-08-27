import React from 'react'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import Bar from './Bar.js'
import Home from './views/Home.js'
import Listado from './views/Listado.js'

const Menu = (props) => {
  return (
    <BrowserRouter>
      <div>
        <Bar />
        <Switch>
          <Route path="/listado" component={Listado} />
          <Route path="/home" component={Home} />
        </Switch>
      </div>
    </BrowserRouter>
  )
}

export default Menu
