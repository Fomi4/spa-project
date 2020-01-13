<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(view, index) in species" :key="view.name"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/species/${index + 1}.jpg`"
            :alt="`${view.name}`"
          >
          <div>{{ view.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Species',
    components: {

    },

    data: () => ({
      species: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/species/`)
        .then(response => response.json())
        .then(response => response.results.forEach(def => {
          this.species.push({
            name: def.name,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>