<template>
  <main>
    <top-bar></top-bar>
    <h1>{{$t('message.success')}}</h1>
    <ul>
      <li
        v-for="page in ['Options API', 'Class API', 'Composition API']"
        :key="page"
      >
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
        <nuxt-link :to="localePath('/auth/sign-in')">
          With {{ page }}
        </nuxt-link>
      </li>
    </ul>
  </main>
</template>

<script>
import TopBar from "@/layouts/top-bar";
export default {
  components: {TopBar}
}
</script>
