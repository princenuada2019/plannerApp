<template>
  <div style="height: 100%">
    <header>
        <app-header></app-header>
    </header>
    <v-content style="height: inherit">
        <router-view></router-view>
    </v-content>
  </div>
</template>

<script>
import Header from '../../components/Header'

export default {
  data () {
    return {
      toggle: false
    }
  },
  components: {
    appHeader: Header
  }
}
</script>

<style scoped>
  .dashboard {
    height: 100%;
  }
</style>
