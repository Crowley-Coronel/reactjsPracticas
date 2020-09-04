import React from 'react'
import axios from 'axios'
import Tabla from '../components/Tabla'
import Buscador from '../components/Buscador'

class Listado extends React.Component {
  state = {
    results: [],
    activePage: 1,
    books: [],
    buscando: false,
  }

  componentDidMount() {
    axios.get('http://fakerestapi.azurewebsites.net/api/Books').then((resp) => {
      this.setState({ results: resp.data })
      this.setState({ books: resp.data })
    })
  }

  buscadorChange(query) {
    let _books = this.state.results

    if (query) {
      let filtrados = _books.filter((result) => {
        return result.Title.match(query)
      })
      this.setState({ books: filtrados })
      this.setState({ buscando: true })
    } else {
      this.setState({ books: _books })
      this.setState({ buscando: false })
    }
  }

  render() {
    return (
      <div>
        <Buscador cambios={this.buscadorChange.bind(this)} />
        <Tabla books={this.state.books} busqueda={this.state.buscando} />
      </div>
    )
  }
}

export default Listado
