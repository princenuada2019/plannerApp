import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

export default new Vuetify({
  rtl: true,
  // custome theme
  theme: {
    themes: {
      light: {
        primary: '#1565C0',
        secondary: '#76FF03',
        error: '#b71c1c'
      }
    }
  }
})
