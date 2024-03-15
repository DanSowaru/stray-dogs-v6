<template>
  <h1>Vue SFC Cheat Sheet</h1>
</template>

<style></style>

<script>

export default {

  name: 'VueSFCCheatSheet',

  components: {}

  data () {
    return {
      dataVariable: 'data'
    }
  },

  computed: {
    computedVariable () {
      // computed code to gerenate variable
      return this.dataVariable
    },
    detailedComputedVariable: {
      get () {
        return this.dataVariable
      },
      set (value) {
        this.dataVariable = value
      }
    }
  },

  methods: {
    methodName () {
      // method code
    }
  },

  props: {
    propName: {
      type: String,
      required: true
    }
  },

  watch: {
    count (newValue, oldValue) {
      console.log(`Count changed from ${oldValue} to ${newValue}`)
    }
  },

  // In a parent component
  provide () {
    return {
      theme: 'dark'
    }
  },

  // In a descendant component
  inject: ['theme'],

  import MyMixin from './MyMixin.js'
  mixins: [MyMixin],

  directives: {
    focus: {
      // custom v-directive definition
    }
  },

  filters: {
    uppercase: function (value) {
      return value.toUpperCase()
    }
  }


}

</script>
