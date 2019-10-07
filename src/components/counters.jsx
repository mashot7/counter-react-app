import React, {Component} from 'react'
import Counter from './counter';

class Counters extends Component {
	static = {

	};
	render() {
		return (
			<React.Fragment>
				<div>
					<Counter/>
					<Counter/>
					<Counter/>
					<Counter/>
				</div>
			</React.Fragment>
		)
	}
}

export default Counters;