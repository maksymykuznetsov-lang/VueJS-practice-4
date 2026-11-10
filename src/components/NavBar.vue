<script setup>
import { useCartStore } from '@/stores/cart'
const cart = useCartStore()
</script>

<template>
  <nav class="navbar navbar-expand navbar-dark bg-dark mb-4">
    <div class="container">
      <RouterLink class="navbar-brand" to="/">Shop</RouterLink>
      <div class="navbar-nav">
        <RouterLink class="nav-link" to="/">Товари</RouterLink>
        <RouterLink class="nav-link" to="/cart">
          Кошик
          <span v-if="cart.totalCount > 0" class="badge bg-primary ms-1">{{ cart.totalCount }}</span>
        </RouterLink>
      </div>
    </div>
  </nav>
</template>