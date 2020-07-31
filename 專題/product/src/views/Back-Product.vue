<template lang="pug">
  #back_product
    b-container
      form
        b-row
          hr
          b-col
            h1.text-center 商品更新
            hr
            h2 檔案上傳
            br
            b-form-input(type="text", placeholder="商品名稱", v-model="title")
            br
            b-form-input(type="text", placeholder="商品價錢", v-model="price")
            br
            b-form-input(type="text", placeholder="商品庫存", v-model="count")
            br
            b-form-radio-group(v-model="selected" :options="brand" class="mb-3" value-field="item" text-field="name" disabled-field="notEnabled")
        b-row
          b-col
            b-form(@submit="submit")
              b-form-file(
                v-model="file",
                :state="state",
                placeholder="選擇檔案或拖曳至此",
                drop-placeholder="將檔案拖曳至此",
                required,
                browse-text="瀏覽",
                accept="image/*",
                @input="validateFile"
              )
              p.text-danger 僅支援 1MB 以下的圖片
              b-form-textarea(
                v-model="description",
                placeholder="鞋子說明",
                rows="3",
                max-rows="6",
                maxlength="200",
                @input="validateText",
                :state="textstate"
              )
        b-row
          b-col.d-flex.justify-content-center.my-5
            b-button(type="submit", variant="primary") 上傳
      b-row
        b-col
          b-table(:items="cart" :fields="fields")
            template(v-slot:cell(action)="data")
              b-btn(variant="danger" @click="delCart(data.index)") 刪除
            template(v-slot:cell(index)="data")
              p {{ index }}
            template(v-slot:cell(src)="data")
              img(controls :src="data.item.src" style="width:100px")
              p {{index}}
</template>

<script>
export default {
  data () {
    return {
      title: '',
      price: '',
      brand: ['Nike', 'Jordan', 'Adidas', 'vans', 'New blance'],
      count: '',
      fields: [
        {
          key: 'src',
          label: '商品圖片'
        },
        {
          key: 'title',
          label: '商品名稱'
        },
        {
          key: 'price',
          label: '價格'
        },
        {
          key: 'count',
          label: '庫存'
        },
        {
          key: 'action',
          label: '刪除'
        }
      ]
    }
  },
  methods: {
    addproduct () {
      if (this.title.length < 1) {
        alert('商品名稱未填')
      } else if (this.price.length < 1) {
        alert('商品價格未填')
      } else if (this.count.length < 1) {
        alert('商品庫存未填')
      } else if (this.description.length < 1) {
        alert('商品無描述')
      } else {
        const fd = new FormData()
        fd.append('title', this.title)
        fd.append('price', this.price)
        fd.append('count', this.count)
        fd.append('brand', this.brand)
        fd.append('description', this.description)
        this.title = ''
        this.price = ''
        this.src = null
        this.description = ''

        this.axios.post('http://localhost:3000/product', fd, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(res => {
            alert('新增完成')
          }).catch(error => {
            alert(`${error.response.data.message}`)
          })
      }
    }
  }
}
</script>
