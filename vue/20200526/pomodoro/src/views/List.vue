<template>
  <div id="list">
    <b-form-input v-model="newtodo"></b-form-input>
    <b-btn variant="success" @click="addTodo">新增</b-btn>
      <b-table-simple :items="todos">
        <draggable v-model="todos" tag="tbody">
          <b-tr v-for="(todo, index) in todos" :key="index">
            <b-td>{{ todo.name }}</b-td>
            <b-td></b-td>
          </b-tr>
        </draggable>
      </b-table-simple>
  </div>
</template>

<script>
export default {
  data () {
    return {
      newtodo: ''
    }
  },
  methods: {
    addTodo () {
      this.$store.commit('addTodo', this.newtodo)
    }
  },
  computed: {
    todos: {
      get () {
        return this.$store.getters.todos
      },
      set (value) {
        this.$store.commit('dragTodo', value)
      }
    }
  }
}
</script>
