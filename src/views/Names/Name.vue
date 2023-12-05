
<template>
   <h1>Name</h1>
</template>

<script>

import axios from 'axios';
export default {
   name: 'names',
   data() {
      return {
         name: []
      }
   },
   mounted() {
      this.getName();
   },
   method: {
      async getName() {
         await axios.get('http://localhost:80/api/names').then(res => {
            console.log(res);
         })
      }
   },
}
</script>