import { createStore } from 'redux';
import { syncHistoryWithStore } from 'react-router-redux';
import { browserHistory, hashHistory } from 'react-router';
import * as Constants from './constants';

import rootReducer from './reducers';

const initialState = { 
    faq: {
        title: '',
        boards: [Constants.faqBoard]
    },
    section: {
        title: '',
        introduction: '',
        items: [
            {
                subtitle: '',
                body: '',
                note: '',
                instructions: [
                    {
                        description: '',
                        tip: '',
                    }
                ],
                lists: [
                    {
                        description: ''
                    }
                ],
            }
        ]
    }
};

// call every reducer and create a single state store
const store = createStore(rootReducer, initialState);

export const history = syncHistoryWithStore( hashHistory, store );

export default store;
