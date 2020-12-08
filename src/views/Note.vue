<template>
  <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
    <div class="top-paid text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Note</h2>
      </div>
           <div class="search-container text-center p-4 relative">
      <input type="text" placeholder="Search" class="bg-grey-darker text-grey-light text-xs w-full p-2 pl-8 border border-grey-dark rounded">
      <div class="absolute pin-t py-5 px-2 text-grey-light">
        <svg fill="currentColor" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 18" width="18" height="18"><path class="heroicon-ui" d="M16.32 14.9l5.39 5.4a1 1 0 0 1-1.42 1.4l-5.38-5.38a8 8 0 1 1 1.41-1.41zM10 16a6 6 0 1 0 0-12 6 6 0 0 0 0 12z"></path></svg>
      </div>
    </div>
      <div>
        <div class="flex">
          <div class="w-1/2 pr-6">
            <div class="flex mb-8" @click="product('Final Cut Pro')">
              <div class="ml-3">1</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Final Cut Pro</div>
                  <div class="text-grey text-xs mb-6">Professional post-production</div>
                </div>    
              </div>
            </div>
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
