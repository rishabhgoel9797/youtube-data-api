<template>
    <div>
        <h2>I am viewing playlist of chanelId: {{$route.params.id}}</h2>
        <p v-bind:key="item.id" v-for="item in items">
           <router-link :to="'/videos/'+item.id"> {{item.snippet.title}}</router-link><br>
            <img v-bind:src="item.snippet.thumbnails.medium.url">
        </p>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: "Playlist",
    components:{
    },
    data(){
        return{
            channelId:"",
            items:[]
        }
    },
    created(){
        // UCBkNpeyvBO2TdPGVC_PsPUA
         this.channelId=this.$route.params.id;
        Axios.get("https://www.googleapis.com/youtube/v3/playlists?part=snippet&channelId="+this.channelId+"&key=AIzaSyAFR6GA8mQl8OZCiZjV3wXGwhzYXsonOfk")
        .then(res => this.items=res.data.items)
        .catch(err => console.log(err));



    }
}
</script>

