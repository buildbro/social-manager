<template>
    <div class="bg-black flex-1 ml-56 px-10 text-white pt-10">
        <h2 class="mb-4">Recent posts</h2>
        <div>
            <div v-for="post in posts" :key="post._id" class="mb-3 bg-grey-darkest rounded-lg p-4">
                <h4 class="mb-2">{{ post.title }}</h4>
                <p class="mb-3">{{ post.message }}</p>
                <p>Scheduled for {{ post.scheduledTime }}</p>
            </div>
        </div>
    </div>
</template>
<script>

    import db from '../db'
    export default {
        data: () => ({
            posts: null,
        }),

        mounted() {
            this.fetchPosts();
        },

        methods: {
            async fetchPosts() {
                this.posts = await db.posts.find();
            },
        }
    }
</script>