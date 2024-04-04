import { useHiredDogsStore } from '@/stores/HiredDogsStore'
import { createPinia } from 'pinia'
import { createApp } from 'vue'

describe('unreadDogs', () => {
  it('should count how many unread dogs there are in the hiredDogStore', () => {
    const app = createApp({})
    const pinia = createPinia()
    app.use(pinia)

    const store = useHiredDogsStore()

    const result = store.unreadDogs
    expect(result).toBeGreaterThanOrEqual(0)
  })
})
