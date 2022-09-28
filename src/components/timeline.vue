<template>
<vue-timeline-update
  :date="new Date(date)"
  :title="title"
  :business="business"
  :description="description"
  :category="category"
  :icon="icon"
  :color="color"
  />
</template>

<script>
export default {
  props:['date','title','business','description','category','color','icon']
}
</script>
<style>

</style>