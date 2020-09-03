import React, { useState } from 'react'
import { Table, Button } from 'reactstrap'
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";
import 'bootstrap/dist/css/bootstrap.min.css'

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
          <div>
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

          <PaginationComponent
            defaultActivePage={this.state.activePage}
            maxPaginationNumber={10}
            totalItems={this.state.results.length}
            pageSize={10}
            onSelect={this.handlePageChange.bind(this)}
            firstPageText="<<"
            previousPageText="<"
            nextPageText=">"
            lastPageText=">>"
            size="sm"
            ></PaginationComponent>
        </div>
        ) : (
          <div>
          <small> CARGANDO. . .</small>
          </div>
        )}

      </div>
    )
  }
}

export default Listado
