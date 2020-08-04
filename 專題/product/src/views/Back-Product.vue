<template lang="pug">
  #back_product
    b-container
      b-form(@submit="submit")
        b-row
          hr
          b-col
            h1.text-center 商品更新
            hr
            h2 檔案上傳
            br
            b-form-input(type="text", placeholder="商品名稱", v-model="name")
            br
            b-form-input(type="text", placeholder="商品價錢", v-model="price")
            br
            b-form-input(type="text", placeholder="商品庫存", v-model="count")
            br
            b-form-radio-group(v-model="brandtype" :options="options" class="mb-3" value-field="brand" text-field="item" disabled-field="notEnabled")
        b-row
          b-col
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
      Photoswipe
        b-row
          b-col(cols="12" md="6" lg="3" v-for="(product, idx) in products" :key="idx")
            b-card
              b-card-img(:src="product.src")
              b-card-body
                b-btn(v-if="product.edit" variant="danger" @click="cancel(product)") 取消
                b-btn(v-else variant="success" @click="edit(product)") 編輯
                b-btn(v-if="product.edit" variant="success" @click="update(product)") 更新
                b-btn(v-else variant="danger" @click="del(product, idx)") 刪除
                hr
                pre(v-if="!product.edit")
                  p 名稱: {{ product.name }}
                  p 庫存: {{ product.count}}
                  p 品牌: {{ product.brand}}
                  p 敘述: {{ product.description }}
                b-form-textarea(v-else v-model="product.model")
</template>

<script>
export default {
  data () {
    return {
      name: '',
      price: '',
      state: null,
      textstate: null,
      file: null,
      brandtype: '',
      options: [
        { brand: 'Nike', item: 'Nike' },
        { brand: 'Jordan', item: 'Jordan' },
        { brand: 'Adidas', item: 'Adidas' },
        { brand: 'vans', item: 'vans' },
        { brand: 'New blance', item: 'New blance' }
      ],
      count: '',
      description: '',
      products: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.account
    }
  },
  methods: {
    validateFile () {
      if (this.src != null) {
        if (this.src.size >= 1024 * 1024 * 5 || !this.src.type.includes('image')) {
          this.state = false
          this.src = null
        } else {
          this.state = true
        }
      }
    },
    validateText () {
      if (this.description.length > 200) {
        this.textstate = false
      } else {
        this.textstate = true
      }
      // this.textstate = (!this.description.length > 200)
    },
    submit (event) {
      event.preventDefault()
      if (this.src != null) {
        if (this.src.size >= 1024 * 1024 * 5 || !this.src.type.includes('image')) {
          this.state = false
          this.src = null
        } else {
          this.state = true
        }
      }
      if (this.name.length < 1) {
        alert('商品名稱未填')
      } else if (this.price.length < 1) {
        alert('商品價格未填')
      } else if (this.count.length < 1) {
        alert('商品庫存未填')
      } else if (this.description.length < 1) {
        alert('商品無描述')
      } else {
        const fd = new FormData()
        fd.append('name', this.name)
        fd.append('image', this.file)
        fd.append('price', this.price)
        fd.append('count', this.count)
        fd.append('brand', this.brandtype)
        fd.append('description', this.description)

        this.axios.post(process.env.VUE_APP_APIURL + '/product', fd, {
          headers: {
            'Content-Type': 'multipart/form-data'
          }
        })
          .then(response => {
            this.products.push(
              {
                _id: response.data._id,
                name: this.name,
                price: this.price,
                count: this.count,
                brand: this.brandtype,
                description: this.description,
                src: process.env.VUE_APP_APIURL + '/product/' + response.data.image,
                edit: false
              }
            )
            this.file = null
            this.name = ''
            this.price = ''
            this.count = ''
            this.brand = null
            this.src = ''
            this.description = ''
          }).catch(error => {
            console.log(error)
            alert(error.response.data.message)
          })
      }
    },
    edit (product) {
      product.edit = true
      product.model = product.title
      this.name = product.name
      this.price = product.price
      this.count = product.count
      this.brand = product.brandtype
      this.description = product.description
    },
    update (product) {
      this.axios.patch(process.env.VUE_APP_APIURL + '/product/' + product._id, { name: this.name, price: this.price, count: this.count, brand: this.brandtype, description: this.description })
        .then(response => {
          product.edit = false
          product.name = this.name
          product.price = this.price
          product.count = this.count
          product.brand = this.brandtype
          product.description = this.description
          this.file = null
          this.name = ''
          this.price = ''
          this.count = ''
          this.brand = null
          this.src = null
          this.description = ''
        })
        .catch(() => {
          alert('發生錯誤')
        })
    },
    cancel (product) {
      product.edit = false
      this.file = null
      this.name = ''
      this.price = ''
      this.count = ''
      this.brand = null
      this.src = null
      this.description = ''
    },
    del (product, idx) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/product/' + product._id)
        .then(response => {
          this.products.splice(idx, 1)
        })
        .catch(error => {
          alert(error)
        })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/product/')
      .then(response => {
        this.products = response.data.result.map(d => {
          return {
            _id: d._id,
            name: d.name,
            price: d.price,
            count: d.count,
            brand: d.brand,
            description: d.description,
            src: process.env.VUE_APP_APIURL + '/product/' + d.image,
            edit: false
          }
        })
      }).catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
