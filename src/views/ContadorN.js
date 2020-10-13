import React, { useState } from 'react';

class ContadorN extends React.Component {
    state = {
        contador: 0,
      }

      aumentar(){
        this.setState({ contador : this.state.contador + 1 })

      }

      render() {
        return (
            <div>
          <p>You clicked { this.state.contador } times</p>
          <button onClick={() => this.aumentar() }>
            Click arrow function
          </button>
          <button onClick={this.aumentar.bind(this)} >
              Click function normal
          </button>
        </div>
        )
      }

}

export default ContadorN
