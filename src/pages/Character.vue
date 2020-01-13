<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(character, index) in characters" :key="character.name"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/characters/${index + 1}.jpg`"
            :alt="`${character.name}`"
          >
          <div>{{ character.name }}</div>
          <!-- <router-link :to="{name: 'SingleFilm', params: { id: film.id }}">To Film</router-link> -->
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Character',
    components: {

    },

    data: () => ({
      characters: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/people/`)
        .then(response => response.json())
        .then(response => response.results.forEach(def => {
          this.characters.push({
            name: def.name,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>