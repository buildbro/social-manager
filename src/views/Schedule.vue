<template>
  <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
    <h1 class="mb-4">Schedule Post</h1>

    <div class="nav-schedule">
      <button type="button" @click="gotoManager()" class="bg-white text-blue mx-auto p-2 rounded mb-4">Manage posts</button>
    </div>

    <h4 class="mb-2">Select social site:</h4>
    <div class="form">
      <div class="social-sites mb-4">
        <div class="form-group mb-2">
          <label><input class="mr-2" type="radio" name="site" value="facebook" v-model="site"/>Facebook</label>
        </div>
        <div class="form-group mb-2">
          <label><input class="mr-2" type="radio" name="site" value="twitter" v-model="site"/>Twitter</label>
        </div>
        <div class="form-group mb-2">
          <label><input class="mr-2" type="radio" name="site" value="linkedin" v-model="site"/>Linkedin</label>
        </div>
      </div>
      <div class="handles my-4 border p-4">
        <h4 class="mb-2">Select handle</h4>
        <div class="form-group mb-2" v-for="page in pages" :key="page._id">
          <label><input class="mr-2" type="radio" v-bind:value="page" v-model="selectedPage" />{{ page.name }}</label>
        </div>

        <button class="bg-white text-blue mx-auto p-2 rounded mt-4" @click="addHandle()">Add Handle</button>
      </div>
      <div class="post-content">
        <div class="form-group flex flex-col mb-4">
          <label class="mb-2 uppercase font-bold text-lg">Message</label>
          <textarea name="message" rows="5" class="w-100" cols="12" v-model="postBody"></textarea>
        </div>
        <div class="post-type flex">
          <div class="form-group mr-4">
            <label><input class="mr-2" type="radio" name="type" value="facebook" checked/>Text only</label>
          </div>
          <div class="form-group mr-4">
            <label><input class="mr-2" type="radio" name="type" value="twitter"/>Picture</label>
          </div>
          <div class="form-group mr-4">
            <label><input class="mr-2" type="radio" name="type" value="linkedin"/>Video</label>
          </div>
        </div>
      </div>

      <div class="form-group my-4">
        <label class="mr-2">Scheduled time</label>
        <input type="datetime-local" v-model="scheduledTime"/>
      </div>

      <button class="bg-white text-blue mx-auto p-2 rounded mt-4" @click="sendPost(site)">Save</button>
    </div>
    <p>{{ message }}</p>
  </div>
</template>
<script>
    import db from '../db'
    import axios from 'axios';
  export default {
      data: () => ({
          appSecret: '8da61a8f42c78dd0edaa7f24bbded2d3',
          appId: '2875178422757557',
          pages: [],
          site: null,
          selectedPage: null,
          scheduledTime: null,
          postBody: null,
          posts: null,
          info: 'hello',
          message: null,
      }),

      async mounted() {
      },

      watch: {
          site: function (value) {
              this.fetchPages(value);
          },
          selectedPage: function () {
              //TODO, maybe verify that token still works/not expired!
          },
      },

      methods: {
          async fetchPages(site) {
              if (site === 'facebook') {
                  this.pages = await db.pages.find();
              } else {
                  this.pages = null;
              }
          },

          addHandle() {
              this.$router.push({
                  name: 'handle',
                  params: {  }
              });
          },

          gotoManager() {
              this.$router.push({
                  name: 'manager',
                  params: {  }
              });
          },

          sendPost(site) {
              if (site === 'facebook') {
                  const date = (new Date(this.scheduledTime)).getTime()/1000;
                  let pageRequestUrl = `https://graph.facebook.com/${this.selectedPage.id}/feed?published=false&message=${this.postBody}&scheduled_publish_time=${date}&access_token=${this.selectedPage.pageToken}`;

                  axios
                      .post(pageRequestUrl)
                      .then(response => {
                          this.info = response;
                          if (response.status === 200) {
                              this.message = 'Post Scheduled!';
                              this.savePost(response.data.id);
                              alert(this.message);
                          }

                      });
              }
          },

          async savePost(id) {
              const created = await db.posts.insert({
                  title: this.selectedPage.name,
                  id: id,
                  pageToken: this.selectedPage.pageToken,
                  message: this.postBody,
                  scheduledTime: this.scheduledTime
              });

              console.log(created);
          }
      }
  }
</script>
