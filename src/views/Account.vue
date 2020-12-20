<template>
  <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
    <div class="top-paid text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Account</h2>
      </div>
           <div class="search-container text-center p-4 relative">
      <input type="text" placeholder="Search" class="bg-grey-darker text-grey-light text-xs w-full p-2 pl-8 border border-grey-dark rounded">
      <div class="absolute pin-t py-5 px-2 text-grey-light">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="18" height="18"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </div>
    </div>
      <div>
        <div class="flex" v-for="user in usersData" :key="user ._id">
          <div v-if="user.site === 'fb'">
            <img src="../assets/facebook.png" alt="image" class="rounded-full w-10">
          </div>
          <div v-else-if="user.site === 'twitter'">
            <img src="../assets/twitter.png" alt="image" class="rounded-full w-10">
          </div>
          <div v-else-if="user.site === 'lnk'">
            <img src="../assets/linkedin.png" alt="image" class="rounded-full w-10">
          </div>
          <div v-else>

          </div>
          <div class="w-1/2 pr-6" >
            <div class="flex mb-8" @click="openViewer(user.site, user._id)">
              <!-- <div class="ml-3">1</div> -->
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">{{user.saved}} </div>
                  <div class="text-grey text-xs mb-6">{{user.name}}</div>
                </div>
                <button class="text-white" @click="confirmDelete(user._id)">&cross;</button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>

<script>
import db from '../db'
export default {
  data: () => ({
    //  email:'',
    //  password: "",
    //  saved: "",
     usersData:[]
  }),
   async mounted() {
         this.usersData = await db.users.find()
   },
  // methods: {
  //   async addUser() {
  //     const created = await db.users.insert({
  //        name: this.email,
  //        password: this.password,
  //        saved: this.saved
  //     })
  //     console.log(created)
  //     this.usersData = await db.users.find()
  //     console.log( this.usersData )
  //   }
  // }
  methods:  {
    form(title, url) {
      this.$router.push({
        name: 'viewer',
        params: { title, url }
      })
    },
    openViewer(url, userKey) {
      this.$router.push({
        name: 'viewer',
        params: { userKey, url }
      });
    },
    confirmDelete(id) {
      let action = confirm('Are you sure you want to remove this account?');
      if (action == true) {
        db.users.remove({_id: id});
        alert('deleted!')
      }
    }
  }
}
</script>
