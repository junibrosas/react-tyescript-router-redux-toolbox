import * as React from 'react';
import * as ReactDOM from 'react-dom';
import { Button } from 'react-toolbox/lib/button';
import { Input } from 'react-toolbox/lib/input';
import AutoComplete from '../../shared/components/AutoComplete';

interface Board {
	question: string,
    answer: string,
    support_link: string,
    link_text: string
}

interface FAQ {
	title: string,
	boards: Array<Board>
}

interface Props {
	faq: FAQ,
	boards: Array<Board>,
	onAddBoard: () => void,
	onDeleteBoard: (index:number) => void,
	onChange: (name:string, value:string) => void,
	onUpdateBoard: (index:number, name:string, value:string) => void
}

interface States {
	intervalId: number
}

class FAQ extends React.Component<Props, States>{
	constructor(props){
		super(props);

		this.state = {
			intervalId: 1
		}
	}

	addBoard(){
		this.props.onAddBoard();
	}
	
	deleteBoard(index){
		this.props.onDeleteBoard(index);
	}

	componentDidMount(){
		
		let intervalId: number = setInterval((boards) => {
			let index = 0;
			for(let board of this.props.boards){
				let boardElement: any = ReactDOM.findDOMNode(this.refs['board-item-'+ index]);
				let buttonElement: any = ReactDOM.findDOMNode(this.refs['btn-board-remove-' + index]);
				let reducer: number = 236;

				// change the top position of the remove button
				buttonElement.style.top = (boardElement.clientHeight - reducer).toString() + 'px';

				index++;
			}
		}, 100);

		this.setState({ intervalId });
	}

	componentWillUnmount(){
		clearInterval(this.state.intervalId);
	}

	handleBoardChange(index, name, value){
		this.props.onUpdateBoard(index, name, value);
	}

	handleChange(name, value){
		this.props.onChange(name, value);
	}

	render() {
		let boardList: Array<Object> = [];

		const { faq, boards } = this.props;

		let index = 0;
		for(let board of boards){
			boardList.push(
				<div key={ index } className="board-item" ref={ 'board-item-'+ index }>
					<div className="col-xs-11">
						<Input type='text' label='Question' value={ board.question } onChange={this.handleBoardChange.bind(this, index, 'question')}/>
						<Input multiline type='text' label='Answer' value={ board.answer }  onChange={this.handleBoardChange.bind(this, index, 'answer')}/>
						<Input type='text' label='Link text' value={ board.link_text } onChange={this.handleBoardChange.bind(this, index, 'link_text')}/>
						<AutoComplete value={ board.support_link } onChange={this.handleBoardChange.bind(this, index, 'support_link') } />
					</div>
					<div className="col-xs-1">
						<Button
							ref={ 'btn-board-remove-'+ index } 
							icon="remove" 
							onClick={ this.deleteBoard.bind(this, index) } 
							style={{ position: 'relative' }}
							floating mini />
					</div>
					<div className="clearfix"></div>
				</div>
			);

			index++;
		}

		return(
			<div className="container">
				<div className="row">
					<div className="col-xs-11">
						<Input type='text' label='Title' value={ faq.title } onChange={this.handleChange.bind(this, 'title') }/>
					</div>
					<div className="col-xs-1"></div>
				</div>
				<div className="row">
					
					{ boardList }

				</div>
				<div className="row">
					<div className="col-xs-12">
						<Button icon="add" label="FAQ" onClick={ this.addBoard.bind(this) } raised />
					</div>
				</div>
			</div>
		);
	}
}
	

export default  FAQ;