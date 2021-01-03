<template>
    <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
        <webview id="foo" src="https://buildbrothers.com/social-manager-backend/index.php"
                 style="display:inline-flex; width:100%; height:80vh"
                 partition="persist:fb" webpreferences="nativeWindowOpen=true" allowpopups></webview>

        <div id="form-step2" style="display: none">
            {{ message }}
            <p v-for="page in pages" :key="page.name">
                {{ page.name }}
            </p>
            <button type="button" @click="goBack()" class="bg-white text-blue mx-auto p-2 rounded mt-4">Go Back</button>
        </div>
    </div>
</template>
<script>
    import axios from 'axios';
    import db from '../db'
    export default {
        data: ()=> ({
            url: 'https://buildbrothers.com/fblogin.html',
            info: null,
            userToken: null,
            userId: null,
            pages: null,
            message: 'adding page(s)',
        }),

        mounted() {
            const webview = document.querySelector('webview');
            webview.addEventListener('dom-ready', () => {
                let pageUrl = webview.getURL();
                let token = pageUrl.split('?token=');
                token = token[1].split('&uid=');
                this.userToken = token[0];
                this.userId = token[1];
                if (this.userToken.length > 0) {
                    this.gotoStep2();
                }
            })
        }
        ,

        methods: {
            getFullUrl() {
                return this.url;
            },
            gotoStep2() {
                const webview = document.querySelector('webview');
                webview.style.display = "none";
                const step2Container = document.getElementById("form-step2");
                step2Container.style.display = "block";
                this.getPage();
            },

            getPage() {
                //const pageRequestUrl = 'https://graph.facebook.com/' + this.pageId + '?fields=access_token&access_token=' + this.userToken;
                const pageRequestUrl = `https://graph.facebook.com/${this.userId}/accounts?fields=name,access_token&access_token=${this.userToken}`;
                console.log(pageRequestUrl);
                axios
                    .get(pageRequestUrl)
                    .then(response => {
                        this.info = response;

                        this.pages = response.data.data;

                        this.message = 'Pages added!';

                        this.pages.forEach((data) => {
                            //alert(data.name);
                            this.addPage(data);
                        })
                    });
            },

            async addPage(page) {
                const check = await db.pages.find({ id: page.id });
                console.log("Hello" + check);
                if (check.length >1 ) {
                    const remove = db.pages.remove({ id: page.id }, { multi: true });
                    console.log(remove);
                } else if (check.length > 0) {
                    const update = await db.pages.update({ id: page.id }, { $set: { pageToken: page.access_token }});
                    console.log(update);
                } else {
                    const created = await db.pages.insert({
                        name: page.name,
                        id: page.id,
                        pageToken: page.access_token,
                        userId: this.userId,
                        userToken: this.userToken
                    });
                    console.log(created);
                    let usersData = await db.pages.find();
                    console.log( usersData );
                }

            },

            goBack() {
                this.$router.push({
                    name: 'Schedule',
                    params: {  }
                });
            }
        },
        components: {
        }

    }
</script>