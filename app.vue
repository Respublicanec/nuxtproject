<template>
  <div>
    <h1>Крутой сайт</h1>
    <nav>
      <ul>
        <nuxt-link to="/calculator">Калькулятор</nuxt-link>
        <br />
        <NuxtLink to="/">INDEXX</NuxtLink>
        <br />
        <nuxt-link to="/notes">Заметки</nuxt-link>
        <br />
        <nuxt-link to="/reactionTimer">Таймер реакции</nuxt-link>
        <br />
        <nuxt-link to="/registrationForm">Форма регистрации</nuxt-link>
        <br />
        <nuxt-link to="/test">Тест</nuxt-link>
        <br />
        <nuxt-link to="/justButton"> Просто кнопка</nuxt-link>
        <br />
        <NuxtPage></NuxtPage>
      </ul>
    </nav>
  </div>
</template>

<script setup>
const text = ref("");
</script>

<style></style>
