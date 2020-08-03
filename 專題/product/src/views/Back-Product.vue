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
            b-form-input(type="text", placeholder="商品名稱", v-model="title")
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
      b-row
        b-col
          b-table(:fields="fields")
            template(v-slot:cell(action)="data")
              b-btn(variant="danger" @click='delProduct(data.index)') 刪除
            template(v-slot:cell(index)="data")
            template(v-slot:cell(src)="data")
              img(controls :src="data.item.src" style="width:100px")
</template>

<script>
export default {
  data () {
    return {
      title: '',
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
          label: '操作'
        }
      ],
      images: []
    }
  },
  computed: {
    user () {
      return this.$store.getters.account
    }
  },
  methods: {
    delProduct () {
      return this.$store.commit
    },
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
          .then(res => {
            this.images.push(
              {
                type: this.brand,
                title: this.description,
                src: process.env.VUE_APP_APIURL + '/product/' + res.data.name,
                _id: res.data._id,
                edit: false,
                model: res.data.name
              }
            )
          }).catch(error => {
            console.log(error)
          })
      }
      this.title = ''
      this.price = ''
      this.count = ''
      this.brand = null
      this.src = null
      this.description = ''
    },
    edit (image) {
      image.edit = true
      image.model = image.title
    },
    update (image) {
      this.axios.patch(process.env.VUE_APP_APIURL + '/product/' + image._id, { description: image.model })
        .then(response => {
          image.edit = false
          image.title = image.model
        })
        .catch(() => {
          alert('發生錯誤')
        })
    },
    cancel (image) {
      image.edit = false
      image.model = image.title
    },
    del (image, idx) {
      this.axios.delete(process.env.VUE_APP_APIURL + '/product/' + image._id)
        .then(response => {
          this.images.splice(idx, 1)
        })
        .catch(() => {
          alert('發生錯誤')
        })
    }
  },
  mounted () {
    this.axios.get(process.env.VUE_APP_APIURL + '/naicat/' + this.account)
      .then(response => {
        this.images = response.data.result.map(d => {
          return {
            type: d.brand,
            title: d.description,
            src: process.env.VUE_APP_APIURL + '/product/' + d.name,
            _id: d._id,
            edit: false,
            model: d.name
          }
        })
      }).catch(() => {
        alert('發生錯誤')
      })
  }
}
</script>
