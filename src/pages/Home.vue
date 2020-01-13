<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="4"
          v-for="group in starwarsgroup" :key="group.item"
        >
          <router-link class="nav_link" :to="`/${group.item}`">
            <img
              width="100%"
              :src="`https://starwars-visualguide.com/assets/img/categories/${group.item}.jpg`"
              :alt="`${group.item}`"
            >
            <div class="green darken-2 text-center"><span class="white--text">{{ group.item }}</span></div>
          </router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>

export default {
  name: 'Home',
  data: () => ({
    starwarsgroup: [
      {
        item: 'character'
      },
      {
        item: 'planets'
      },
      {
        item: 'films'
      },
      {
        item: 'species'
      },
      {
        item: 'vehicles'
      },
      {
        item: 'starships'
      }
    ]
  }),
}
</script>

<style lang="css" scoped>
.nav_link {
  text-decoration: none;
}
</style>