export default function faq (state = [], action){
    switch(action.type){
        case 'FAQ_CHANGE_TITLE':
            return Object.assign({}, state, {
                title: action.title
            });
        case 'FAQ_ADD_BOARD':
            return Object.assign({}, state, {
                boards: [...state.boards, action.board]
            });
        case 'FAQ_DELETE_BOARD':
            return Object.assign({}, state, {
                boards: [
                    ...state.boards.slice(0, action.index),
                    ...state.boards.slice(action.index + 1)
                ],
            });
        case 'FAQ_UPDATE_BOARD':
            state.boards[action.index] = action.board;

            return Object.assign({}, state, {
                boards: [...state.boards]
            });

        default:
            return state;
    }
}