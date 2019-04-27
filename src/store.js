import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    drawer: false,
    items: [ 
      { text: 'Home', to: '/', icon:'dashboard'},
      { text: 'Attending', to: '/attending', icon: 'perm_contact_calendar'},
      { text: 'Agenda', to: '/agenda', icon:'playlist_add_check'},
      { text: 'Speakers', to: '/speakers', icon:'supervisor_account'}
      
    ]
  },
  getters:{
    links: (state) => {
      return state.items
    }
  },
  mutations: {
    setDrawer: (state, payload) => (state.drawer = payload),
    toggleDrawer: state => (state.drawer = !state.drawer)
  },
  actions: {

  }
})
