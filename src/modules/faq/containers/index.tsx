import * as React from 'react';
import FAQ from '../components/Faq';
import * as Constants from '../../../constants';

interface Props { }
interface States { }


class FAQContainer extends React.Component<Props, States> {

    addBoard(){
        this.props.action_faq_add_board(Constants.faqBoard);
    }

    deleteBoard(index){
        this.props.action_faq_delete_board(index);
    }

    updateBoard(index, name, value) {
        let boards = this.props.faq.boards;
        let board = boards[ index ];

		for(let prop in board){
			if(prop == name){
				board = Object.assign({}, board, {
                    [prop]: value // update the property
                });
			}
		}

        this.props.action_faq_update_board(index, board);
    }

    handleChange(name, value){
        this.props.action_faq_change_title(value);
    }

    render(){
        return (
            <FAQ
                faq={ this.props.faq } 
                boards={ this.props.faq.boards }
                onChange={ this.handleChange.bind(this) }
                onAddBoard={ this.addBoard.bind(this) }
                onDeleteBoard={ this.deleteBoard.bind(this) }
                onUpdateBoard={ this.updateBoard.bind(this) } />
        )
    }
}

export default FAQContainer;