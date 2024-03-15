<template>
  <section id="engine-view-container">
    <div class="engine-view-slot">
      <p id="money-view-p">
        <!-- TODO: CReate Component: Player Money -->
        <img id="money-symbol" src="@/assets/images/icons/money_icon.png" alt="money icon">
        <span>
          {{ getPlayerMoney }}
        </span>
      </p>
    </div>
    <div class="engine-view-slot">
      <DateComponent />
    </div>

  </section>
</template>

<script lang="ts">

import DateComponent from '@/components/DateComponent.vue'

export default {
  name: 'EngineComponent',
  components: {
    DateComponent
  },

  data () {
    return {
      playerMoney: 50.000000
    }
  },

  computed: {
    getPlayerMoney () {
      return this.playerMoney.toFixed(2)
    }
  },

  methods: {

    rollRandomChance (max) {
      return Math.random() * (max - 0) + 1
    },

    randomEventTrigger () {
      // TODO: Implement event trigger
    }
  }

  // ------------------------------------------------------------------- ------------
  // ------------------------------------------------------------------- LIFECYCLES
  // ------------------------------------------------------------------- ------------

}

</script>
