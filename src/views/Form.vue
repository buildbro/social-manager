<template>
  <!-- <transition name="router-animation" enter-active-class="animated slideInRight faster"> -->
    <div class="bg-black ml-56 flex-1 text-white pt-10 px-10">
      <!-- <h1 class="mb-12">{{ title }}</h1> -->
      <button class="text-white bg-blue px-4 py-2 rounded-lg" @click="$router.go(-1)">Back</button>

      <section  class="flex flex-wrap">
        <div class="w-1/2 mx-auto">
            <form>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2 pt-2"
                        for="grid-password"
                        >Email</label
                      ><input
                        type="email"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Email"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >Password</label
                      ><input
                        type="password"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="Password"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="relative w-full mb-3">
                      <label
                        class="block uppercase text-gray-700 text-xs font-bold mb-2"
                        for="grid-password"
                        >save as</label
                      ><input
                        type="text"
                        class="px-3 py-3 placeholder-gray-400 text-gray-700 bg-white rounded text-sm shadow focus:outline-none focus:shadow-outline w-full"
                        placeholder="enter name to be saved"
                        style="transition: all 0.15s ease 0s;"
                      />
                    </div>
                    <div class="text-center mt-6">
                      <button
                        class="bg-blue-900 text-white active:bg-gray-700 text-sm font-bold uppercase px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 w-full"
                        type="button"
                        style="transition: all 0.15s ease 0s;"
                      >
                        Save
                      </button>
                    </div>
                  </form>
        </div> 
      </section>
    </div>
  <!-- </transition> -->
</template>

<script>
export default {
  props: ['title']
}
</script>

