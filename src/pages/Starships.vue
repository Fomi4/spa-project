<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(starship, index) in starships" :key="starship.name"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/starships/${index + 9}.jpg`"
            :alt="`${starship.name}`"
          >
          <div>{{ starship.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Starships',
    components: {

    },

    data: () => ({
      starships: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/starships/`)
        .then(response => response.json())
        .then(response => response.results.forEach(def => {
          this.starships.push({
            name: def.name,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>