<template>
  <div>
    <img :src="dog" />
  </div>
</template>

<script>
import dogService from '../services/DogService.js'
export default {
    data(){
        return {
            dog:''
        }
    },
    created(){
        dogService.getDog()
         .then(response => {
            console.log(response)
            this.dog = response.data.message;
        }) 
    }
}
</script>

<style>

</style>