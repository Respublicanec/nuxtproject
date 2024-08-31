<template>
  <div>
    <h1>Крутой сайт</h1>
        <nav>
            <ul>
              <nuxt-link to="/about">Калькулятор</nuxt-link>
    <br>
    <NuxtLink to="/">INDEXX</NuxtLink>
    <br>
    <nuxt-link to="/users">users</nuxt-link>
    <br>
    <NuxtPage></NuxtPage>
            </ul>
        </nav>
   
  
  </div>
</template>

<script setup>
const text = ref('')
</script>

<style>

</style>

