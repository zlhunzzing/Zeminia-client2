import { createStore } from 'redux';

function reducer(state, action) {
    if(state === undefined) {
        return { islogin: false,
            monster: false,
        toggleMenu: function(time) {
            if(time === "monster") {
              document.querySelector('.menuBar').style.display = 'none'
              document.querySelector('.battleBar').style.display = 'block'
            } else
            if(document.querySelector('.menuBar').style.display === 'none') {
              document.querySelector('.menuBar').style.display = 'block'
              document.querySelector('.battleBar').style.display = 'none'
            }
          },
        }
    }
}

const store = createStore(reducer)

export default store;