<template>
  <main>
    <h1>{{$t('message.success')}}</h1>
    <ul>
      <li
        v-for="page in ['Options API', 'Class API', 'Composition API']"
        :key="page"
      >
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script lang="ts">
</script>
