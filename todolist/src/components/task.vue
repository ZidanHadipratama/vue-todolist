<template>
  <div class="wrapp round basic-shadow flex column" :class="{
    'border-red': task.priority === 'high',
    'border-yellow': task.priority === 'med',
    'border-green': task.priority === 'low',
  }">
    <div class="wrap-atas flex column" :class="{'low-opacity': task.status}">
      <div class="atas flex ycenter">
        <h2 :class="{ 'strike-through': task.status }">{{ task.title }}</h2>
        <div class="menu" @click="this.editMenu=true">
            edit
        </div>
      </div>
      <div class="desc">
        <p>{{ task.desc }}</p>
      </div>
      <div class="line extreme-round"></div>
    </div>
    <button
      class="button extreme-round"
      :class="{
        'border-red': task.priority === 'high' && !isHovered,
        'border-yellow': task.priority === 'med' && !isHovered,
        'border-green': task.priority === 'low' && !isHovered,
        'bg-red': task.priority === 'high' && isHovered,
        'bg-yellow': task.priority === 'med' && isHovered,
        'bg-green': task.priority === 'low' && isHovered,
        'low-opacity': task.status
      }"
      @mouseenter="isHovered = true"
      @mouseleave="isHovered = false"
      @click="markAsDone"
    >
      Done
    </button>
    <taskEdit @ngedit="ngedit" @ngapus="ngapus" v-if="editMenu"/>
  </div>
</template>

<script>
import taskEdit from '@/components/taskEdit.vue';

export default {
  data() {
    return {
      isHovered: false,
      editMenu: false,
    };
  },
  props: {
    task: Object, // Accept a single task as a prop
  },
  methods: {
    markAsDone() {
      // Emit an event to notify the parent component to update the status of this task
      this.$emit('mark-as-done', this.task.id);
      console.log("Done")
    },
    ngedit(){
        this.editMenu=false
    },
    ngapus(){
        this.editMenu=false
        this.$emit('ngapus', this.task.id)
    },
    closeEditMenuOnClickOutside(event) {
      // Check if the click event target is not within the ".menu" element
      if (!event.target.closest('.menu')) {
        this.editMenu = false;
      }
    },
  },
  components: {
    taskEdit,
  },
  mounted() {
    // Add a click event listener to the document to handle clicks outside of ".menu"
    document.addEventListener('click', this.closeEditMenuOnClickOutside);
  },
  beforeUnmount() {
    // Remove the click event listener when the component is about to be destroyed
    document.removeEventListener('click', this.closeEditMenuOnClickOutside);
  },
};
</script>

<style lang="scss" scoped>
.wrapp {
  background-color: var(--putih);
  padding: 20px;
  width: 400px;
  height: 200px;
  justify-content: space-between;
  position: relative;

  .wrap-atas {
    gap: 15px;
  }

  .atas {
    justify-content: space-between;
  }

  .line {
    width: 100%;
    height: 2px;
    background-color: rgb(223, 223, 223);
  }

  .button {
    align-self: flex-end;
    padding: 4px 8px;
  }

  /* Add styles for 'strike-through' class */
  .strike-through {
    text-decoration: line-through;
  }

  /* Add styles for 'low-opacity' class */
  .low-opacity {
    opacity: 0.5;
  }
}
</style>
