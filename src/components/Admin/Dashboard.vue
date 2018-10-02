<template>
  <section class="dashboard">
    <Tabs />
  </section>
</template>

<script>
import Tabs from './Tabs'

export default {
  components: { Tabs }
}
</script>

<style lang="scss">
.dashboard
{
  display: flex;
  align-items: center;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>
