export default {
    action_faq_change_title: (title: string) => {
        return {
            type: 'FAQ_CHANGE_TITLE',
            title
        }
    },

    action_faq_add_board: (board) => {
		return {
			type: 'FAQ_ADD_BOARD',
			board
		}
	},

    action_faq_delete_board: (index: number) => {
		return {
			type: 'FAQ_DELETE_BOARD',
			index
		}
	},

	action_faq_update_board: (index: number, board) => {
		return {
			type: 'FAQ_UPDATE_BOARD',
			index,
			board
		}
	}
}