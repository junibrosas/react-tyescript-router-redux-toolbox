import * as React from 'react';
import { Autocomplete } from 'react-toolbox/lib/autocomplete';


interface Props { }
interface States { }

class AutoComplete extends React.Component<Props, States> {
	
	constructor(props){
		super(props);
	}

	handleChange = (value) => {
		this.props.onChange(value);
	};

	render () {
		return (
			<Autocomplete
				multiple={this.props.multiple}
				direction="down"
				selectedPosition="above"
				label="Support link"
				onChange={this.handleChange}
				source={this.props.source}
				value={ this.props.value }
			/>
		);
	}
}


AutoComplete.defaultProps = {
	multiple: false,
	source: {
		'ES-es': 'Spain',
		'TH-th': 'Thailand',
		'EN-gb': 'England',
		'EN-en': 'USA'
	},
	value: ''
}

export default AutoComplete;