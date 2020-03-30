<template>
  <div class="dashboard">
    <h1>Today</h1>
    <v-btn class="mx-2 my-2 new-task-button" fab dark color="primary" @click="showNewTaskDialog = true">
      <v-icon dark>mdi-plus</v-icon>
    </v-btn>
    <app-new :show-dialog="showNewTaskDialog" @closeDialog="showNewTaskDialog = $event"></app-new>
  </div>
</template>

<script>
import NewTaskDialog from './NewTaskDialog'

export default {
  data () {
    return {
      showNewTaskDialog: false
    }
  },
  components: {
    appNew: NewTaskDialog
  }
}
</script>
