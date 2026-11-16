import { describe, it, expect } from 'vitest'
import { mount } from '@vue/test-utils'
import { createPinia, setActivePinia } from 'pinia'
import ProductCard from '@/components/ProductCard.vue'
import { useCartStore } from '@/stores/cart'

const mouse = { id: 3, title: 'Миша Glide Pro', price: 890, image: '' }

describe('ProductCard', () => {
  it('показує назву і ціну товару', () => {
    const pinia = createPinia()
    const wrapper = mount(ProductCard, {
      props: { product: mouse },
      global: { plugins: [pinia] },
    })
    
    expect(wrapper.text()).toContain('Миша Glide Pro')
    expect(wrapper.text()).toContain('890')
  })

  it('кнопка «У кошик» додає товар', async () => {
    const pinia = createPinia()
    setActivePinia(pinia)
    
    const wrapper = mount(ProductCard, {
      props: { product: mouse },
      global: { plugins: [pinia] },
    })
    
    await wrapper.find('button').trigger('click') // «клікаємо» кнопку
    const cart = useCartStore()
    expect(cart.totalCount).toBe(1)
  })
})