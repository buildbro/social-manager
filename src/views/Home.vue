<template>
  <div class="bg-black text-white flex-1 ml-56" style="font-family: 'Poppins', sans-serif;">
    <transition name="animation" enter-active-class="animated fadeIn faster" leave-active-class="animated fadeOut faster">
      <div v-if="titleBarVisible" class="text-white bg-grey-darkest border-b border-grey p-3 text-center fixed z-10 w-full pr-56">
        Social Manager
      </div>
    </transition>
       <h1 class="text-center pt-4 pb-4 font-normal" style="font-family: 'Poppins', sans-serif;"> Add Social Account </h1>
       <div class="border-b border-grey-darker mb-10 mx-10"></div>
    <div class="flex mb-10 px-10">
      <div class="w-1/2 mr-4 bg-grey-darkest rounded-lg flex px-8 py-6" @click="story('Get Focused, Fast')">
        <div class="flex-1">
           <div class="text-center">
          <img src="../assets/facebook.png" alt="image" class="rounded-full w-40">
        </div>
          <h1 class="font-normal text-2xl mb-4">Facebook</h1>
          <p class="text-grey-light text-xs leading-normal">OmniFocus transforms your to-do list. Click to read how.</p>
           <div class="mb-8 text-right">
              <button class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                Add Account
              </button>
            </div>
        </div>
       
      </div>

      <div class="w-1/2 ml-4 bg-grey-darkest rounded-lg px-8 py-6" @click="story('Apps That Look Great in Dark Mode')">
       <div class="text-center">
          <img src="../assets/twitter.png" alt="image" class="rounded-full w-40">
        </div>
        <h1 class="font-normal text-2xl mb-4" >Twitter</h1>
        <p class="text-grey-light text-xs leading-normal mb-4">Dark is the new black.</p>
      <div class="mb-8 text-right">
              <button class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                Add Account
              </button>
            </div>
      </div>

      <div class="w-1/2 ml-4 bg-grey-darkest rounded-lg px-8 py-6" @click="story('Apps That Look Great in Dark Mode')">
       <div class="text-center">
          <img src="../assets/linkedin.png" alt="image" class="rounded-full w-40">
        </div>
        <h1 class="font-normal text-2xl mb-4" >Linkedin</h1>
        <p class="text-grey-light text-xs leading-normal mb-4">Dark is the new black.</p>
        <div class="mb-8 text-right">
              <button class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                Add Account
              </button>
            </div>
      </div>
    </div>

    <div class="border-b border-grey-darker mb-10 mx-10"></div>


    <!-- end apps-games-we-love -->

    <!-- <div class="border-b border-grey-darker mb-10 mx-10"></div> -->


    <!-- end top-paid -->
    <!-- <div class="border-b border-grey-darker mb-10 mx-10"></div> -->

    <!-- <div class="text-grey mb-10 px-10">
      Terms & Conditions
    </div> -->

  </div>
</template>

<script>
// import Flickity from 'vue-flickity'

// @ is an alias to /src
export default {
  name: 'home',
  components: {
    // Flickity
  },
  created() {
    window.addEventListener('scroll', this.toggleTitleBar, { passive: true })
  },
  data() {
    return {
      // image2: require('../assets/discover1-2.jpg'),
      titleBarVisible: false,
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        wrapAround: false

        // any options from Flickity can be used
      }
    }
  },
  methods: {
    toggleTitleBar() {
      // console.log(window.scrollY);

      // if (window.scrollY > 0) {
      //   this.titleBarVisible = true
      // } else {
      //   this.titleBarVisible = false
      // }

      // throttle or debounce for better performance (with lodash)
      this.titleBarVisible = window.scrollY > 0 ? true : false
    },
    story(title) {
      this.$router.push({
        name: 'story',
        params: { title }
      })
    },
    product(title) {
      this.$router.push({
        name: 'product',
        params: { title }
      })
    }
  }
}
</script>

<style scoped>
@import url('https://fonts.googleapis.com/css2?family=Poppins&display=swap');
</style>>


