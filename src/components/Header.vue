<template lang="html">
    <v-toolbar>
      <v-toolbar-title>
        <router-link class="light-blue--text" :to="{ name: 'Home', params: {} }">
          <v-img
            alt="Vuetify Logo"
            class="shrink mr-2"
            contain
            src="https://cdn.vuetifyjs.com/images/logos/vuetify-logo-dark.png"
            transition="scale-transition"
            width="40"
          />
        </router-link>
      </v-toolbar-title>

      <v-spacer></v-spacer>

      <v-toolbar-items>
        <router-link class=" nav_link" :to="{ name: 'Home', params: {} }">Home</router-link>
        <router-link class=" nav_link" :to="{ name: 'Films', params: {} }">Films</router-link>
      </v-toolbar-items>
    </v-toolbar>
</template>

<script>
export default {
  name: 'Header',
}
</script>

<style lang="css" scoped>

.v-toolbar {
  flex: none;
}

.nav_link {
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 16px;
  text-decoration: none;
  font-weight: 500;
}

.router-link-exact-active {
  background: #1976d2;
  color: #fff;
}
</style>