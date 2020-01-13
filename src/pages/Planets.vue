<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(planet, index) in planets" :key="planet.name"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/planets/${index + 2}.jpg`"
            :alt="`${planet.name}`"
          >
          <div>{{ planet.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Planets',
    components: {

    },

    data: () => ({
      planets: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/planets/`)
        .then(response => response.json())
        .then(response => response.results.forEach(def => {
          this.planets.push({
            name: def.name,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>