import React from 'react'
import { Table, Button } from 'reactstrap'
import PaginationComponent from 'react-reactstrap-pagination'
import './css/tabla.css'

class Tabla extends React.Component {
  state = { activePage: 1 }

  eliminar = (id) => {
    console.log(id)
  }

  handlePageChange(pageNumber) {
    this.setState({ activePage: pageNumber })
  }

  bodyTable() {
    let _books
    /*if(this.props.busqueda){
      _books = this.props.books;
    }else{
      _books = this.props.books.slice( (this.state.activePage - 1) * 10, this.state.activePage * 10)
    }*/
    _books = this.props.books.slice(
      (this.state.activePage - 1) * 10,
      this.state.activePage * 10,
    )
    return _books.map((book, index) => (
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
    ))
  }

  cargando() {
    return (
      <div className="loader">
        <small> CARGANDO. . .</small>
      </div>
    )
  }

  render() {
    return (
      <div>
        {this.props.books.length > 0 ? (
          <div>
            <Table
              striped
              style={{ width: '700px', textAlign: 'center' }}
              bordered
              hover
              size="sm"
              responsive
            >
              <thead>
                <tr>
                  <th>ID</th>
                  <th>Titulo</th>
                  <th>Descripcion</th>
                  <th></th>
                </tr>
              </thead>
              <tbody>{this.bodyTable()}</tbody>
            </Table>
            <PaginationComponent
              defaultActivePage={this.state.activePage}
              maxPaginationNumber={10}
              totalItems={this.props.books.length}
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
          this.cargando()
        )}
      </div>
    )
  }
}

export default Tabla
