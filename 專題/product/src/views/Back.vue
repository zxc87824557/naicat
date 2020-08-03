<template>
  <div id="back">
    <h1 class="text-center mt-4 mb-4">後臺管理</h1>
    <div class="container">
      <div class="row justify-content-center">
        <vs-button class="mb-5" @click="active=!active" color="primary" type="filled">編輯</vs-button>
      </div>
      <vs-sidebar
        position-left
        parent="body"
        default-index="1"
        color="primary"
        class="sidebarx"
        spacer
        v-model="active"
      >
        <div class="header-sidebar text-center" slot="header">
          <vs-avatar
            size="150px"
            src="/shoesimg/白底貓.png"/>
          <h4>奶貓鞋店</h4>
        </div>
        <vs-sidebar-item to="/back"  index="1">
          <h4>後台管理</h4>
        </vs-sidebar-item>
        <vs-sidebar-item to="/back-user"  index="2">
          <h4>會員管理</h4>
        </vs-sidebar-item>
        <vs-sidebar-item to="/back-product"  index="3">
          <h4>商品管理</h4>
        </vs-sidebar-item>
      </vs-sidebar>
    </div>
    <div class="container">
      <router-view></router-view>
    </div>
  </div>
</template>

<script>
export default {
  data: () => ({
    active: false
  })
}
</script>
