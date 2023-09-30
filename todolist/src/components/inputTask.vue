<template>
    <div class="wrap basic-shadow">
        <div class="input flex ycenter column">
            <h2>Write your task</h2>
            <div class="flex taskName column">
                <h4>Task Name</h4>
                <input type="text">
            </div>
            <div class="flex taskDesc column">
                <h4>Task Desc</h4>
                <textarea></textarea>
            </div>
            <div class="flex priority column">
                <h4>Priority</h4>
                <div class="buton flex xcenter ycenter">
                    <div class="extreme-round high basic-shadow button border-red">High</div>
                    <div class="extreme-round medium basic-shadow button border-yellow">Medium</div>
                    <div class="extreme-round low basic-shadow button border-green">Low</div>
                </div>
            </div>
            <div class="extreme-round create basic-shadow button bg-blue text-putih">Create</div>
        </div>
    </div>
</template>

<script>
    export default {
        
    }
</script>

<style lang="scss" scoped>
.wrap{
    width: 300px;
    height: 100vh;
}

.input{
    align-items: flex-start;

    * {
        align-items: flex-start;
    }

    h4{
        margin-bottom: 3px;
    }

    .buton{
        gap: 8px;
        font-weight: 800;
    }

    .create{
        margin-top: 40px;
        border: none;
        font-size: 14px;
        padding: 8px 16px;
    }
}

.create{
    align-self: flex-end;
}
</style>