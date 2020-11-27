<template>
  <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
     <div class="search-container text-center p-4 relative">
      <input type="text" placeholder="Search" class="bg-grey-darker text-grey-light text-xs w-full p-2 pl-8 border border-grey-dark rounded">
      <div class="absolute pin-t py-5 px-2 text-grey-light">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="18" height="18"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </div>
    </div>
        <div class="apps-games-we-love text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Recent</h2>
        <a href="#" class="text-blue no-underline">See All</a>
      </div>

      <div class="flex flex-wrap mb-4">
        <div class="w-1/2 flex" @click="product('QuarkXPress 2018 Pro')">
          <div class="w-24">
            <img src="../assets/avatar.png" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">QuarkXPress 2018 Pro</div>
            <div class="text-grey text-xs mb-6">Love Print, Live Digital</div>
            <!-- <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $399.99
              </span>
            </div> -->
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>

        <div class="w-1/2 flex pl-6" @click="product('Pixelmator Pro')">
          <div class="w-24">
            <img src="../assets/avatar.png" alt="icon">
          </div>
          <div class="pl-6 flex-1">
            <div class="mb-1">Pixelmator Pro</div>
            <div class="text-grey text-xs mb-6">Pro image editing for everyone</div>
            <!-- <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $39.99
              </span>
            </div> -->
            <div class="border-b border-grey-darker mb-10"></div>
          </div>
        </div>

        <div class="w-1/2 flex" @click="product('OmniFocus 3')">
          <div class="w-24">
            <img src="../assets/avatar.png" alt="icon">
          </div>
          <div class="pl-6 flex-1 pr-6">
            <div class="mb-1">OmniFocus 3</div>
            <div class="text-grey text-xs mb-6">Accomplish More Every Day</div>
            <!-- <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold uppercase">
                Get
              </span>
            </div> -->
          </div>
        </div>

        <div class="w-1/2 flex pl-6" @click="product('Fantastical 2')">
          <div class="w-24">
            <img src="../assets/avatar.png" alt="icon">
          </div>
          <div class="pl-6 flex-1">
            <div class="mb-1">Fantastical 2</div>
            <div class="text-grey text-xs mb-6">Calendar and Reminders</div>
            <!-- <div class="mb-8">
              <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                $69.99
              </span>
            </div> -->
          </div>
        </div>

      </div>
    </div> 
    <div class="border-b border-grey-darker mb-10 mx-10"></div>
  </div>
</template>
