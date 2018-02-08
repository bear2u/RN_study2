import { EMAIL_CHANGED, PASSWORD_CHANGED } from '../actions/types';

const INITIAL_STATE = { email: '', password: '' };

export default (state = INITIAL_STATE, action) => {
    switch (action.type) {
        case EMAIL_CHANGED:            
            //기존 state를 복사해서 payload 부분을 변경해서 새로운 immutable object를 만들어서 리턴함
            return { ...state, email: action.payload };
        case PASSWORD_CHANGED:
            return { ...state, password: action.payload };
        default:
            return state;
    }
};
