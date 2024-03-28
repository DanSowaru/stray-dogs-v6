<template>
  <section id="engine-view-container">
    <div class="engine-view-slot">
      <p>Money</p>
      <p id="money-view-p">
        <!-- TODO: CReate Component: Player Money -->
        <img id="money-symbol" src="@/assets/images/icons/money_icon.png" alt="money icon">
        <span>
          {{ getPlayerMoney }}
        </span>
      </p>
    </div>
    <div class="engine-view-slot">
      <p>Time</p>
      <DateComponent />
    </div>
    <div class="engine-view-slot" id="unread-dogs-footer-counter">
      <p>Unread Replies</p>
      <p>{{ getUnreadDogs }}</p>
    </div>

  </section>
</template>

<script lang="ts">

import DateComponent from '@/components/DateComponent.vue'
import { defineComponent } from 'vue'
import { useHiredDogsStore } from '@/stores/HiredDogsStore'

export default defineComponent(
  {
    name: 'EngineComponent',
    components: {
      DateComponent
    },

    data () {
      return {
        playerMoney: 50.000000,
        hiredDogs: useHiredDogsStore()
      }
    },

    computed: {
      getPlayerMoney ():string {
        return this.playerMoney.toFixed(2)
      },
      getUnreadDogs (): number {
        try {
          console.log(this.hiredDogs.unreadDogs)
          return this.hiredDogs.unreadDogs
        } catch (error) {
          return 0
        }
      }
    },

    methods: {

      rollRandomChance (max: number) {
        return Math.random() * (max - 0) + 1
      },

      randomEventTrigger () {
        // TODO: Implement event trigger
      }
    }

  }
)

</script>
