<template>
  <!-- <transition name="router-animation" enter-active-class="animated slideInRight faster"> -->
    <div class="bg-black ml-56 flex-1 text-white pt-10 px-10">
      <!-- <h1 class="mb-12">{{ title }}</h1> -->
        <facebook-login 
      appId="3360767174034340"
      @login="onLogin"
      @logout="onLogout"
      @sdk-loaded="sdkLoaded">
    </facebook-login>
      <!-- <button class="text-white bg-blue px-4 py-2 rounded-lg" @click="$router.go(-1)">Back</button> -->

    </div>
  <!-- </transition> -->
  <!-- 3360767174034340 -->
</template>

<script>
import facebookLogin from 'facebook-login-vuejs';
export default {
  props: ['title'],
  components: {
       facebookLogin
  },
  //  data(){
  //   return{
    //   idImage, loginImage, mailImage, faceImage,
    //   isConnected: false,
    //   name: '',
    //   email: '',
    //   personalID: '',
    //   FB: undefined
    // }
  // },
  methods: { 
  getUserData() {
      this.FB.api('/me', 'GET', { fields: 'id,name,email' },
        userInformation => {
          console.warn("data api",userInformation)
          this.personalID = userInformation.id;
          this.email = userInformation.email;
          this.name = userInformation.name;
        }
      )
    },
    sdkLoaded(payload) {
      this.isConnected = payload.isConnected
      this.FB = payload.FB
      if (this.isConnected) this.getUserData()
    },
    onLogin() {
      this.isConnected = true
      this.getUserData()
    },
    onLogout() {
      this.isConnected = false;
    }
  }
}
</script>

