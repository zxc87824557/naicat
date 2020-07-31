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
            b-form-input(type="text", placeholder="商品牌子", v-model="brand")
            br
            b-form-input(type="text", placeholder="商品庫存", v-model="acount")
            br
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
</template>

<script>
export default {

}
</script>
