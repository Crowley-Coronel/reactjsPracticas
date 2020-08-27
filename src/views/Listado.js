import React, { useState } from 'react'
import { Table, Button } from 'reactstrap'
import axios from 'axios'
import Pagination from 'react-js-pagination';

class Listado extends React.Component {
  state = { results: [], activePage: 1, books: [] }

  componentDidMount() {
    console.log('entra en component did mount')
    axios.get('http://fakerestapi.azurewebsites.net/api/Books').then((resp) => {
      this.setState({ results: resp.data })
    })
  }

  eliminar = (id) => {
    console.log(id)
  }

  handlePageChange(pageNumber){
    this.setState({activePage: pageNumber});
  }

  render() {
    return (
      <div>
        {this.state.results.length > 0 ? (
          <Table striped style={{ width: '700px', textAlign: 'center' }}>
            <thead>
              <tr>
                <th>ID</th>
                <th>Titulo</th>
                <th>Descripcion</th>
                <th></th>
              </tr>
            </thead>
            <tbody>

              {this.state.results.slice(this.state.activePage * 10, (this.state.activePage + 1) * 10).map((book, index) => (
                <tr key={index}>
                  <th scope="row">{book.ID}</th>
                  <td>{book.Title}</td>
                  <td>{book.Description}</td>
                  <td>
                    <Button
                      color="danger"
                      size="sm"
                      onClick={() => this.eliminar(book.ID)}
                    >
                      x
                    </Button>
                  </td>
                </tr>
              ))}
            </tbody>
          </Table>
        ) : (
          <small> CARGANDO. . .</small>
        )}

        <Pagination className="pagination"
        activePage={this.state.activePage}
        itemsCountPerPage={10}
        totalItemsCount={100}
        pageRangeDisplayed={5}
        onChange={this.handlePageChange.bind(this)}
      />
      </div>
    )
  }
}

export default Listado
