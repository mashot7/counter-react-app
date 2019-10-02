import React, { Component } from 'react'

class counter extends Component {
  state = {
    count: 0,
    // imageUrl: "https://picsum.photos/200"
    tag: ['lemon', 'banana', 'pineapple']
  }

  render () {
    return (
      <React.Fragment>
        <ul>
          {this.state.tag.map(tag => <li key={tag}>{tag}</li>)}
        </ul>
      </React.Fragment>
    )
  }

}

export default counter
