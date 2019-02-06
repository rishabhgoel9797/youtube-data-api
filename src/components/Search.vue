<template>
<div>
    <div class="container">
        <input v-model="id" type="text" placeholder="Search playlists with channel id">
        <router-link :to="'/playlist/' + id">{{id }}</router-link>
    </div>
</div>
</template>

<script>
export default {
    name: "Search",
    components:{
        
    },
    data()
    {
        return {
            id: ""
        }
    },
    methods:{
        getDetails()
        {
            console.log(this.id);
        }
    }
}
</script>

<style scoped>
.container
{
    max-width: 500px;
    margin: 0 auto;
   
}
input[type="text"]
{
 padding: 10px 90px;
 border: 2px solid #ccc;
 border-radius: 5px; 
}
</style>
