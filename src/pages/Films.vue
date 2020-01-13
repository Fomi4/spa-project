<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="film in films" :key="film.id"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/films/${film.id}.jpg`"
            :alt="`${film.title}`"
          >
          <div>Episode {{ film.id }}: {{ film.title }}</div>
          <div>{{ film.director }} | {{ film.producer }}</div>
          <router-link :to="{name: 'SingleFilm', params: { id: film.id }}">To Film</router-link>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Films',
    components: {

    },

    data: () => ({
      films: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/films/`)
        .then(response => response.json())
        // .then(response => console.log(response));
        .then(response => response.results.forEach(def => {
          console.log(def);
          this.films.push({
            id: def.episode_id,
            title: def.title,
            description: def.opening_crawl,
            director: def.director,
            producer: def.producer,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>