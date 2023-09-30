<template>
  <div>
    <inputTask/>
    <task/>
  </div>
</template>

<script>
import task from '@/components/task.vue';
import inputTask from '@/components/inputTask.vue';

export default {
  components: {
    task,
    inputTask
  },
};
</script>

<style lang="scss" scoped>

</style>