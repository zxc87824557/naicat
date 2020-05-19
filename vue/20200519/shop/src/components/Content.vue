<template lang="pug">
  #Content
    table
      tr(v-for="(cat, index) in categories" :key="index")
        td {{ cat.name }}
        td
          img(:src="cat.items1")
        td
          img(:src="cat.items2")
</template>

<script>
export default {
  data () {
    return {
      categories: [
        {
          name: '流行皮件',
          items1: './img/0403.jpg',
          items2: './img/0404.jpg'
        },
        {
          name: '流行鞋區',
          items1: './img/0405.jpg',
          items2: './img/0406.jpg'
        },
        {
          name: '流行飾品',
          items1: './img/0407.jpg',
          items2: './img/0408.jpg'
        }
      ]
    }
  }
}
</script>
