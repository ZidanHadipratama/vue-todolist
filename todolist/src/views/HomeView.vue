<template >
  <div class="wrap-home">
    <div class="absolute">
      <navBar @nginput="this.input=!this.input" class="masuk"/>
    </div>
    <div class="absolute" :class="{'nginput': input}">
      <inputTask v-if="input" @done="filterData(this.prio)" class="masuk"/>
    </div>
    <div class="wrappp flex column" @click="this.input=false">
      <div class="buton flex xcenter ycenter">
          <div class="extreme-round all basic-shadow button" @click="filterData('all')" :class="{'bg-blue':this.prio==='all', 'border-blue':this.prio!=='all'}">All</div>
          <div class="extreme-round high basic-shadow button" @click="filterData('high')" :class="{'bg-red':this.prio==='high', 'border-red':this.prio!=='high'}">High</div>
          <div class="extreme-round medium basic-shadow button" @click="filterData('medium')" :class="{'bg-yellow':this.prio==='medium', 'border-yellow':this.prio!=='medium'}">Medium</div>
          <div class="extreme-round low basic-shadow button" @click="filterData('low')" :class="{'bg-green':this.prio==='low', 'border-green':this.prio!=='low'}">Low</div>
          <div class="extreme-round done basic-shadow button" @click="filterData('done')" :class="{'bg-blue':this.prio==='done', 'border-blue':this.prio!=='done'}">Done</div>
      </div>
      <div class="task flex" >
        <task
          v-for="(item, index) in sortingTaskData"
          :task="item" 
          :key="index"
          @mark-as-done="markTaskAsDone"
          @ngapus="ngapus"
        />
      </div>
    </div>
  </div>
</template>

<script>
import task from '@/components/task.vue';
import inputTask from '@/components/inputTask.vue';
import navBar from '@/components/navBar.vue';
import axios from 'axios';

export default {
  components: {
    task,
    inputTask,
    navBar
  },
  data(){
    return{
      taskData: [],
      input: false,
      prio: "all",
    }
  },
  computed: {
    sortingTaskData() {
      // Sort the taskData array based on prio and status
      return this.taskData.sort((a, b) => {
        // Compare prio first
        if (a.prio === "high" && b.prio !== "high") return -1;
        if (a.prio !== "high" && b.prio === "high") return 1;
        if (a.prio === "medium" && b.prio === "low") return -1;
        if (a.prio === "low" && b.prio === "medium") return 1;

        // If prio is the same, compare status
        if (a.status === true && b.status === false) return -1;
        if (a.status === false && b.status === true) return 1;

        // If both prio and status are the same, maintain their original order
        return 0;
      });
    },
    filteredTaskData() {
      if (this.prio === 'all') {
        return this.taskData; // Show all tasks
      } else if (this.prio === 'done') {
        return this.taskData.filter((task) => task.status === "true"); // Show completed tasks
      } else {
        return this.taskData.filter((task) => task.prio === this.prio); // Show tasks with the selected prio
      }
    }
  },
  methods:{
    async retrieveFormData() {
      // Iterate through localStorage keys
      await axios.get('http://localhost:3000/api/Todo')
        .then(response => {
          // Assign the fetched data to the todoList array
          this.taskData = response.data.docs;
          // console.log(this.taskData[0])
          // console.log("status: ")
          // console.log(this.taskData[0].status)
        })
        .catch(error => {
          console.error('Error fetching data:', error);
        });
      
      // console.log("di dalam retrieve", this.taskData)
    },
    markTaskAsDone(taskId) {
    // Find the task with the matching ID
      const taskToUpdate = this.taskData.find((task) => task.id === taskId);

      // Check if the task exists
      if (taskToUpdate) {
        // Update the task's status to true
        taskToUpdate.status = "true";

        // Send a PUT request to update the task in your Payload CMS
        axios.put(`http://localhost:3000/api/Todo/${taskToUpdate.id}`, taskToUpdate)
          .then(response => {
            console.log('Task updated:', response.data);
          })
          .catch(error => {
            console.error('Error updating task:', error);
          });
      }
      // this.retrieveFormData();
    },
    ngapus(taskId) {
      // Send a DELETE request to remove the task from your Payload CMS
      axios.delete(`http://localhost:3000/api/Todo/${taskId}`)
        .then(response => {
          console.log('Task deleted:', response.data);

          // Update your local taskData array to remove the deleted task
          this.taskData = this.taskData.filter(task => task.id !== taskId);
        })
        .catch(error => {
          console.error('Error deleting task:', error);
        });
      // this.retrieveFormData();
    },
    closeEditMenuOnClickOutside(event) {
      // Check if the click event target is not within the ".menu" element
      if (!event.target.closest('.masuk')) {
        this.input = false;
      }
    },
    async filterData(arg){
      this.prio=arg
      this.input=false
      await this.retrieveFormData()
      this.taskData=this.filteredTaskData
      // console.log(this.taskData[0])
      // console.log(this.sortingTaskData)
    }
  },
  created() {
    // Retrieve form data from localStorage when the component is created
    this.retrieveFormData();
    // console.log(this.taskData)
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
.wrap-home{
  position: relative;
  height: 100%;
}

.absolute{
  position: absolute;
  transition: 0.5s;
}

.nginput{
  background-color: rgba(0, 0, 0, 0.334);
  width: 100vw;
  height: 100%;
  z-index: 97;
}
.wrappp{
  background-color: rgba(224, 234, 255, 1);
  width: 100vw;
  height: 100vh;
  padding: 20px 40px;
  gap: 20px;
}

.task{
  margin-left: 50px;
  gap: 30px;
  flex-wrap:wrap;
  z-index: 80;
}

.buton{
  margin-left: 50px;
  gap: 10px;
  width: fit-content;

  .button{
    padding: 4px 16px;
  }
}
</style>