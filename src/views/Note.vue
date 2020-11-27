<template>
  <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
        <div class="top-paid text-white px-10">
      <div class="flex justify-between">
        <h2 class="font-normal mb-8">Note</h2>
        <!-- <a href="#" class="text-blue no-underline">See All</a> -->
      </div>

      <div>
        <div class="flex">
          <div class="w-1/2 pr-6">
            <div class="flex mb-8" @click="product('Final Cut Pro')">
              <!-- <div><img src="../assets/icon_fcp.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">1</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Final Cut Pro</div>
                  <div class="text-grey text-xs mb-6">Professional post-production</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $399.99
                  </span>
                </div> -->
              </div>
            </div>

            <div class="flex mb-8" @click="product('Magnet')">
              <!-- <div><img src="../assets/icon_magnet.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">2</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Magnet</div>
                  <div class="text-grey text-xs mb-6">Organize Your Workspace</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $1.39
                  </span>
                </div> -->
              </div>
            </div>

            <div class="flex mb-8" @click="product('DaisyDisk')">
              <!-- <div><img src="../assets/icon_daisydisk.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">3</div>
              <div class="ml-3 flex flex-1 justify-between">
                <div>
                  <div class="mb-1">DaisyDisk</div>
                  <div class="text-grey text-xs mb-6">Recover disk space</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold uppercase">
                    Open
                  </span>
                </div> -->
              </div>
            </div>

          </div>

          <div class="w-1/2 pl-6">
            <div class="flex mb-8" @click="product('The Sims 2: Super Collection')">
              <!-- <div><img src="../assets/icon_sims.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">4</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">The Sims 2: Super Collection</div>
                  <div class="text-grey text-xs mb-6">Your faves in one place</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $39.99
                  </span>
                </div> -->
              </div>
            </div>

            <div class="flex mb-8" @click="product('Word Document Writer Pro')">
              <!-- <div><img src="../assets/icon_word.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">5</div>
              <div class="ml-3 flex flex-1 justify-between border-b border-grey-darker">
                <div>
                  <div class="mb-1">Word Document Writer Pro</div>
                  <div class="text-grey text-xs mb-6">Business</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $39.99
                  </span>
                </div> -->
              </div>
            </div>

            <div class="flex mb-8" @click="product('Antivirus Zap - Virus & Adware')">
              <!-- <div><img src="../assets/icon_antivirusapp.png" alt="icon" class="w-12"></div> -->
              <div class="ml-3">6</div>
              <div class="ml-3 flex flex-1 justify-between">
                <div>
                  <div class="mb-1">Antivirus Zap - Virus & Adware</div>
                  <div class="text-grey text-xs mb-6">Scan & Remove Malware & Adware</div>
                </div>
                <!-- <div>
                  <span class="bg-white text-blue rounded-full px-3 py-1 text-xs font-bold">
                    $6.99
                  </span>
                </div> -->
              </div>
            </div> 
          </div>
        </div>
      </div>
    </div> 
  </div>
</template>
