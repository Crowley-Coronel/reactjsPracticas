import React from 'react'
import { Input } from 'reactstrap'

class Buscador extends React.Component {
  state = { results: [], activePage: 1, books: [], searc: '' }

  change(e) {
    let query = e.target.value.trim()
    this.props.cambios(query)
  }

  render() {
    return (
      <div>
        <Input
          type="search"
          name="search"
          id="search"
          placeholder="Introduce tu busqueda"
          onChange={this.change.bind(this)}
          style={{ width: '700px' }}
        />
      </div>
    )
  }
}

export default Buscador
