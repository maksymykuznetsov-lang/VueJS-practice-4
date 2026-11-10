import { defineStore } from 'pinia'
import { ref, computed } from 'vue'

export const useCartStore = defineStore('cart', () => {
  const items = ref<any[]>([]) // Вказуємо тип масиву any[]
  
  const totalCount = computed(() => items.value.reduce((sum: number, i: any) => sum + i.qty, 0))
  const totalPrice = computed(() => items.value.reduce((sum: number, i: any) => sum + i.price * i.qty, 0))

  function add(product: any) { // Додаємо тип any
    const item = items.value.find((i: any) => i.id === product.id)
    if (item) {
      item.qty++
    } else {
      items.value.push({ ...product, qty: 1 })
    }
  }

  function remove(id: any) { // Додаємо тип any
    items.value = items.value.filter((i: any) => i.id !== id)
  }

  function clear() {
    items.value = []
  }

  return { items, totalCount, totalPrice, add, remove, clear }
})
