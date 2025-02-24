<script>
import TodoItem from './TodoItem.vue';
export default {
    components: {
        TodoItem
    },
    data(){
        return{
            tasks:[
            { id: 1, text: "Learn Vue 3", completed: false },
            { id: 2, text: "Build a project", completed: false },
            { id: 3, text: "Master Vue Components", completed: false }
            ]
        }
    },
    methods:{
        
    }
}

</script>
<template>
    <div>
        <h2>My todo list</h2>
        <ul>
            <TodoItem v-for="task in tasks" :key="task.id" />
        </ul>
    </div>

</template>