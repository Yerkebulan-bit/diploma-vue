<template>
{{store.state.auth.user}}
</template>

<script setup lang="ts">
import {useStore} from "vuex";
import {computed, onBeforeMount} from "vue";

const store = useStore()
const user = computed(() => store.state.auth.user)
const getUser = async () => {
  await store.dispatch("auth/loadUser")
}

onBeforeMount(async () => {
  await getUser()
})

</script>

<style lang="scss">

</style>