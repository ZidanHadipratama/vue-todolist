<template>
    <div class="wrap-out">
        <div class="wrap round basic-shadow flex column" :class="{
            'border-red': task.priority === 'high',
            'border-yellow': task.priority === 'med',
            'border-green': task.priority === 'low',
        }">
            <div class="title">
                <h5>Judul Tugas</h5>
                <input v-model="task.title" class="input-title">
            </div>
            <div class="desc">
                <h5>Deskripsi Tugas</h5>
                <input v-model="task.desc" class="input-desc">
            </div>
            <div class="bnyk">
                <h5>Priority</h5>
                <div class="buton flex xcenter ycenter">
                    <div class="extreme-round high basic-shadow button" @click="this.task.priority='high'" :class="{'bg-red':this.task.priority==='high', 'border-red':this.task.priority!=='high'}">High</div>
                    <div class="extreme-round medium basic-shadow button" @click="this.task.priority='med'" :class="{'bg-yellow':this.task.priority==='med', 'border-yellow':this.task.priority!=='med'}">Medium</div>
                    <div class="extreme-round low basic-shadow button" @click="this.task.priority='low'" :class="{'bg-green':this.task.priority==='low', 'border-green':this.task.priority!=='low'}">Low</div>
                </div>
            </div>
            <button class="extreme-round create basic-shadow button bg-blue text-putih" @click="saveData()">Create</button>
        </div>
    </div>
</template>

<script>
    export default {
        props: {
            task: Object
        },
    }
</script>

<style lang="scss" scoped>

</style>