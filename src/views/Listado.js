import React, { useState } from 'react'
import { Table, Button, Input } from 'reactstrap'
import axios from 'axios'
import PaginationComponent from "react-reactstrap-pagination";
import Autocomplete from "../components/Autocomplete";
import 'bootstrap/dist/css/bootstrap.min.css'

class Listado extends React.Component {
  state = { results: [], activePage: 1, books: [], searc: '' }

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

  change(e){
    let query = e.target.value;
    let filtrados = this.state.results.filter(result =>  result.Title.toLowerCase() === query );
    console.log("===============");
    console.log("Query: " + query)
    console.log("Filtrados: " + filtrados);
    this.setState({ results :  filtrados});

  }

  requestTimer = null;

  render() {
    return (
      <div>
       <Input type="search" name="search" id="search" placeholder="Introduce tu busqueda" onChange={this.change.bind(this)} style={{ 'width': '500px'}}/>
        {this.state.results.length > 0 ? (
          <div>
          <Table striped style={{ width: '700px', textAlign: 'center' }} bordered hover size="sm" responsive>
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
