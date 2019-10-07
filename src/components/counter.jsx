import React, {Component} from 'react'

class counter extends Component {
	state = {
		count: 0,
		// imageUrl: "https://picsum.photos/200"
		// tag: ['lemon', 'banana', 'pineapple']
	};
  //
	// constructor(props) {
  //   super(props);
  //   this.handleIncrement = this.handleIncrement.bind(this);
  // }

  handleIncrement = () => {
    this.setState({
      count: this.state.count + 1
    })
  };
  handleDecrement = () => {
    this.setState({
      count: this.state.count - 1
    })
  };

	render() {
		return (
			<div>
        <button
          onClick={this.handleDecrement}
          className="btn btn-secondary btn-sm"
        >-
        </button>
        <span className={this.getBadgeClasses()}>{this.formatCount()}</span>
				<button
					onClick={this.handleIncrement}
					className="btn btn-secondary btn-sm"
				>+
				</button>
			</div>
		)
	}


	getBadgeClasses() {
		let classes = 'badge m-2 badge-';
		classes += this.state.count === 0 ? 'warning' : 'primary';
		return classes;
	};

	formatCount() {
		return this.state.count;
	};
}

export default counter
