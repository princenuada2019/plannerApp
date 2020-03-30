<template>
  <div>
    <v-navigation-drawer v-model="showDrawer" app right>

      <v-list dense>
        <!-- USER PROFILE TITLE AND SUBTITLE AND AVATAR -->
        <v-list-item two-line>
            <v-list-item-avatar right>
              <img src="@/assets/logo.png">
            </v-list-item-avatar>
            <v-list-item-content class="mr-4">
              <v-list-item-title class="subtitle-2">علی قصاب باشی</v-list-item-title>
              <v-list-item-subtitle>دانش آموز پایه دهم</v-list-item-subtitle>
            </v-list-item-content>
        </v-list-item>

        <v-divider></v-divider>

        <v-list-item
          v-for="item in 3"
          :key="item.icon"
          active-class="primary--text">
          <v-list-item-action>
            <v-icon right>ali</v-icon>
          </v-list-item-action>
          <v-list-item-content>
            <v-list-item-title>aligh</v-list-item-title>
          </v-list-item-content>
        </v-list-item>

      </v-list>

    </v-navigation-drawer>
    <v-app-bar
      color="primary"
      app
      dense
      dark
    >
      <v-app-bar-nav-icon @click.stop="showDrawer = !showDrawer"></v-app-bar-nav-icon>

      <v-toolbar-title>Page title</v-toolbar-title>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  data () {
    return {
      showDrawer: false
    }
  }
}
</script>

<style scoped lang="scss"></style>
