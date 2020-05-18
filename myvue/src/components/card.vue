<template>
  <div class="card">
    <div class="card-img">
      <img :src="data.img">
    </div>
    <h1>{{data.title}}</h1>
  </div>
</template>

<script>
export default {
  props: {
    data: Object
  }
}
</script>

<style>

</style>
