import { createStore } from 'redux';

function reducer(state, action) {
    if(state === undefined) {
        return { islogin: false}
    }
}

const store = createStore(reducer)

export default store;