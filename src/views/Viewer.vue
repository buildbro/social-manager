<template>
    <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
        <webview id="foo" v-bind:src="getFullUrl()"
                 style="display:inline-flex; width:100%; height:110vh"
        v-bind:partition="getPartition()"></webview>
    </div>
</template>
<script>
    export default {
        props: ['userKey', 'url'],
        data: ()=> ({
            fullUrl: '',
        }),
        async mounted() {
            this.fullUrl = this.getFullUrl()
        },
        methods: {
            getFullUrl() {
                let url = this.url;
                let finalUrl = '';
                if (url === 'fb') {
                    finalUrl = 'https://facebook.com';
                } else if (url === 'twitter') {
                    finalUrl = 'https://twitter.com';
                } else if (url === 'lnk') {
                    finalUrl = 'https://linkedin.com';
                }

                return finalUrl;
            },
            getPartition() {
                return "persist:" + this.userKey;
            }
        }
    }
</script>
