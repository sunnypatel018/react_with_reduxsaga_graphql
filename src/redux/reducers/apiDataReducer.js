import { RECEIVE_API_DATA } from '../action/countAction';

const initialState = () => {

};

const apiDataReducer = (state = initialState, { type, data }) => {
    switch (type) {
        case RECEIVE_API_DATA:
            
            return { ...state, data:data };
        default:
            return state;
    }
};

export default apiDataReducer;
