import React, { Component } from 'react'

class counter extends Component {
  state = {
    count: this.props.value
    // imageUrl: "https://picsum.photos/200"
    // tag: ['lemon', 'banana', 'pineapple']
  }
  //
  // constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = product => {
    console.log(product)
    this.setState({
      count: this.state.count + 1
    })
  }
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  }

  render () {
  	console.log('props', this.props);
    return (
      <div>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >-
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
        <button
          onClick={product => this.handleIncrement(product)}
          className="btn btn-secondary btn-sm"
        >+
        </button>
      </div>
    )
  }

  getBadgeClasses () {
    let classes = 'badge m-2 badge-'
    classes += this.state.count === 0 ? 'warning' : 'primary'
    return classes
  };

  formatCount () {
    return this.state.count
  };
}

export default counter
