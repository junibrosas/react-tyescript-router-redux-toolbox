export default function section(state = [], action){
    switch(action.type){
        case 'SECTION_CHANGE_DETAILS':
            return Object.assign({}, state, {
                title: action.title,
                introduction: action. introduction
            });
        default:
            return state;
    }
}