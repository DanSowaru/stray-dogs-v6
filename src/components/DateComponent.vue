<template>
  <p>
    {{ getCurrentFullTime }}
  </p>

</template>

<script>
export default {
  name: 'DateComponent',

  data () {
    return {

      currentTime: this.useINTLTime(new Date()),
      currentSeconds: new Date().getSeconds(),
      updateTimeInterval: null,
      checkIfTimeIsRoundInterval: null
    }
  },

  computed: {

    getCurrentFullTime () {
      return this.currentTime
    }
  },

  methods: {
    updateTime () {
      this.updateTimeInterval = setInterval(() => {
        if (!(this.currentSeconds % 10 === 0 || this.currentSeconds % 10 === 5)) {
          this.checkIfTimeIsRound()
          clearInterval(this.updateTimeInterval)
        } else {
          this.currentTime = this.useINTLTime()
        }
      }, 5000)
    },

    checkIfTimeIsRound () {
      while (!(this.currentSeconds % 10 === 0 || this.currentSeconds % 10 === 5)) {
        this.currentSeconds = new Date().getSeconds()
        continue
      }
      this.updateTime()
    },

    useINTLTime () {
      const data = new Date()

      const intl = new Intl.DateTimeFormat('pt-BR', {
        // day: '2-digit',
        // month: '2-digit',
        // year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit'
      })

      return intl.format(data)
    }
  },

  // ------------------------------------------------------------------- ------------
  // ------------------------------------------------------------------- LIFECYCLES
  // ------------------------------------------------------------------- ------------

  mounted () {
    this.checkIfTimeIsRound()
  },

  beforeUnmount () {
    clearInterval(this.updateTimeInterval)
  }
}

</script>
