<template lang="pug">
  #bcak_user
    b-container
      b-row
        b-col
          vs-table(multiple v-model="selected" :data="this.datas")
            template(slot="header")
              h1.text-center 會員資訊
            template(slot="thead")
              vs-th(sort-key="name") 姓名
              vs-th(sort-key="account") 帳號
              vs-th(sort-key="password") 密碼
              vs-th(sort-key="email") 信箱
            template(slot-scope="{data}")
              vs-tr(:data="tr" :key="indextr" v-for="(tr, indextr) in data")
                vs-td(:data="data[indextr].name")
                  span {{data[indextr].name}}
                vs-td(:data="data[indextr].account")
                  span {{data[indextr].account}}
                vs-td(:data="data[indextr].password")
                  span {{data[indextr].password}}
                vs-td(:data="data[indextr].email")
                  span {{data[indextr].email}}
          div
            vs-bttton(@click="openConfirm()" color="danger" type="filled") 刪除
          //- b-table(:items="user" :fields="fields")
          //-   template(v-slot:cell(action)="data")
          //-     b-btn(variant="danger" @click="delCart(data.index)") 刪除
          //-   template(v-slot:cell(index)="data")
</template>

<script>
export default {
  data () {
    return {
      index: '',
      datas: [],
      selected: [],
      fields: [
        {
          key: 'name',
          label: '名字'
        },
        {
          key: 'account',
          label: '帳號'
        },
        {
          key: 'password',
          label: '密碼'
        },
        {
          key: 'email',
          label: '信箱'
        },
        {
          key: 'action',
          label: '操作'
        }
      ]
    }
  },
  methods: {
    openConfirm () {
      this.$vs.dialog({
        type: 'confirm',
        color: 'danger',
        title: '確認刪除',
        text: '確認刪除所選項目嗎',
        accept: this.acceptAlert
      })
    },
    acceptAlert (color) {
      if (this.selected.length < 1) {
        this.$vs.notify({
          color: 'danger',
          title: '錯誤',
          text: '未選擇刪除所選項目'
        })
      } else {
        this.$vs.notify({
          color: 'primary',
          title: '已刪除',
          text: '已順利刪除所選項目'
        })
        this.selected.forEach(data => {
          this.axios.post(process.env.VUE_APP_APIURL + '/deleteuser', {
            account: data.account
          })
            .then(res => {
              if (res.data.success) {
                this.$swal('成功', '取消成功', 'success')
                this.axios.post(process.env.VUE_APP_APIURL + '/alluser')
                  .then(res => {
                    this.datas = res.data.result
                  })
              } else {
                alert('錯誤')
              }
            }).catch(error => {
              alert(error)
            })
        })
      }
    }
  },
  mounted: function () {
    this.axios.post(process.env.VUE_APP_APIURL + '/alluser')
      .then(res => {
        this.datas = res.data.result
      }).catch(error => {
        alert(error)
      })
  },
  computed: {
    user () {
      return this.$store.getters.user
    }
  }
}
</script>
