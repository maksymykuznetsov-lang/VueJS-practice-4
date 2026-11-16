import { describe, it, expect, beforeEach } from 'vitest'
import { setActivePinia, createPinia } from 'pinia'
import { useCartStore } from '@/stores/cart'

const mouse = { id: 3, title: 'Миша Glide Pro', price: 890 }

describe('Кошик', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })

  it('додає товар у кошик', () => {
    const cart = useCartStore()
    cart.add(mouse)
    expect(cart.items.length).toBe(1)
    expect(cart.totalCount).toBe(1)
  })

  it('повторне додавання збільшує кількість', () => {
    const cart = useCartStore()
    cart.add(mouse)
    cart.add(mouse)
    expect(cart.items.length).toBe(1)
    expect(cart.totalCount).toBe(2)
  })

  it('рахує загальну суму', () => {
    const cart = useCartStore()
    cart.add(mouse)
    cart.add(mouse)
    expect(cart.totalPrice).toBe(1780)
  })

  it('видаляє товар з кошика', () => {
    const cart = useCartStore()
    cart.add(mouse)
    cart.remove(mouse.id)
    expect(cart.items.length).toBe(0)
  })
})