<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="6"
          md="3"
          v-for="(vehicle, index) in vehicles" :key="vehicle.name"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/vehicles/${index + 1}.jpg`"
            :alt="`${vehicle.name}`"
          >
          <div>{{ vehicle.name }}</div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Vehicles',
    components: {

    },

    data: () => ({
      vehicles: [],
    }),

    mounted() {
      fetch(`https://swapi.co/api/vehicles/`)
        .then(response => response.json())
        .then(response => response.results.forEach(def => {
          this.vehicles.push({
            name: def.name,
          })
        }));
    },
  }
</script>

<style lang="css" scoped>

</style>