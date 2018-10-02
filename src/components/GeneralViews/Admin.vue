<template>
  <section class="admin-page">

    <Header />
    <Dashboard />

  </section>
</template>

<script>
import Header from '../FixedComponents/Header'
import Dashboard from '../Admin/Tabs'

export default {
  components:
  {
    Header,
    Dashboard
  }

}
</script>
