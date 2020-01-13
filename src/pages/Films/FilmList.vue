<template lang="html">
  <div>
    <div v-for="film in films" :key="film.id">
      <h1>Films list</h1>
      <Film
        :id="film.id"
        :title="film.title"
        :description="film.description"
      />
      <router-link :to="{name: 'SingleFilm', params: { id: film.id }}">To Film</router-link>
    </div>
  </div>
</template>

<script>
  import Film from './Films/Film'

  export default {
    name: 'Films',
    props: {
      films: Array
    },
    components: {
      Film,
    },
  }
</script>

<style lang="css" scoped>

</style>