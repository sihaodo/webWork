import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

const store = new Vuex.Store({
    state:{
        name:'helloVueX'
    },
    mutations:{
        edit(state){
            state.name = 'jack'
        }
    }
})

export default store