<template>
    <div>
        <p v-bind:key="item.id" v-for="item in items">
            <!-- <video> -->
                <iframe v-bind:src="'https://www.youtube.com/embed/'+item.snippet.resourceId.videoId" width="640" height="360"></iframe>
            <!-- </video> -->
            <b>https://www.youtube.com/watch?v={{item.snippet.resourceId.videoId}}</b><br>
            <b>Title: </b>{{item.snippet.title}}<br>
            <b>Description: </b>{{item.snippet.description}}
        </p>
    </div>
</template>

<script>
import Axios from 'axios'
export default {
    name: "Videos",
    data(){
        return{
            id:"",
            items:[
                {
                id:"",
                snippet:
                    {
                    title:"",
                    description:""
                    },
                    resourceId:{
                        videoId:""
                    }
                }
            ]
        }
    },
    created(){
        this.id=this.$route.params.id;
        Axios.get("https://www.googleapis.com/youtube/v3/playlistItems?part=snippet&maxResults=50&playlistId="+this.id+"&key=AIzaSyAFR6GA8mQl8OZCiZjV3wXGwhzYXsonOfk")
        .then(res => this.items=res.data.items)
        .catch(err => console.log(err))
    }
}
</script>
