import React from 'react'
import ReactAutocomplete from 'react-autocomplete'
import { getStates, fakeRequest } from '../data/utils.js'
import './autocomplete.css'

class Autocomplete extends React.Component {
  state = { unitedStates: getStates() }

  requestTimer = null

  render() {
    return (
      <ReactAutocomplete
        inputProps={{ id: 'states-autocomplete' }}
        wrapperStyle={{ position: 'relative', display: 'inline-block' }}
        value={this.state.value}
        items={this.state.unitedStates}
        getItemValue={(item) => item.name}
        onSelect={(value, item) => {
          // set the menu to only the selected item
          this.setState({ value, unitedStates: [item] })
          // or you could reset it to a default list again
          // this.setState({ unitedStates: getStates() })
        }}
        onChange={(event, value) => {
          this.setState({ value })
          clearTimeout(this.requestTimer)
          this.requestTimer = fakeRequest(value, (items) => {
            this.setState({ unitedStates: items })
          })
        }}
        renderMenu={(children) => <div className="menu">{children}</div>}
        renderItem={(item, isHighlighted) => (
          <div
            className={`item ${isHighlighted ? 'item-highlighted' : ''}`}
            key={item.abbr}
          >
            {item.name}
          </div>
        )}
        menuStyle={{
          borderRadius: '3px',
          boxShadow: '0 2px 12px rgba(0, 0, 0, 0.1)',
          background: 'rgba(255, 255, 255, 0.9)',
          padding: '2px 0',
          fontSize: '90%',
          position: 'fixed',
          overflow: 'auto',
          maxHeight: '50%', // TODO: don't cheat, let it flow to the bottom
        }}
      />
    )
  }
}

export default Autocomplete
