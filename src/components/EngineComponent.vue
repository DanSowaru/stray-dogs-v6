<template>
  <section id="engine-view-container">
    <div class="engine-view-slot">
      <p class="engine-view-slot-title">Money</p>
      <p id="money-view-p">
        <!-- TODO: CReate Component: Player Money -->
        <img id="money-symbol" src="@/assets/images/icons/money_icon.png" alt="money icon">
        <span>
          {{ getPlayerMoney }}
        </span>
      </p>
    </div>
    <div class="engine-view-slot">
      <p class="engine-view-slot-title">Time</p>
      <DateComponent />
    </div>
    <div class="engine-view-slot" id="unread-dogs-footer-counter">
      <p class="engine-view-slot-title">Unread Replies</p>
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
        playerMoney: useHiredDogsStore().playerMoney,
        hiredDogs: useHiredDogsStore()
      }
    },

    computed: {
      getPlayerMoney ():string {
        return this.playerMoney.toFixed(2)
      },
      getUnreadDogs (): number | string {
        try {
          return this.hiredDogs.unreadDogs
        } catch (error) {
          return 'error'
        }
      }
    },

    methods: {}

  }
)

</script>
