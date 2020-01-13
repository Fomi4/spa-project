<template lang="html">
  <div>
    <v-container class="grey lighten-5">
      <v-row>
        <v-col
          cols="2"
          md="2"
        >
          <img
            width="100%"
            :src="`https://starwars-visualguide.com/assets/img/films/${id}.jpg`"
            :alt="`${title}`"
          >
        </v-col>
        <v-col
          cols="10"
          md="10"
        >
          <h2 class="sub_title">Episode {{ id }}: {{ title }}</h2>
          <p class="caption"><span class="font-weight-bold">Date Created:</span> {{ release_date }}</p>
          <p class="caption"><span class="font-weight-bold">Director:</span> {{ director }}</p>
          <p class="caption"><span class="font-weight-bold">Producer(s):</span> {{ producer }}</p>
          <p class="caption"><span class="font-weight-bold">Opening Crawl:</span><br />{{ description }}</p>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
  export default {
    name: 'Film',
    props: {
      id: Number,
      title: String,
      description: String,
      release_date: String,
      director: String,
      producer: String,
    },
  }
</script>

<style lang="css" scoped>
.sub_title {
  margin-bottom: 20px;
}
</style>