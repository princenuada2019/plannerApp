import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  // custome theme
  theme: {
    themes: {
      light: {
        primary: '#308DFF',
        secondary: '#00D4F4',
        accent: '#DFDFDF',
        error: '#f44336',
        warning: '#ffc107',
        info: '#00bcd4',
        success: '#4caf50'
      }
    }
  }
})
