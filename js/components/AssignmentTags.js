export default {
    template: /*html*/`
        <div class="flex gap-4 mb-6">
            <button
                @click="$emit('update:currentTag', tag)" 
                v-for="tag in tags" 
                class="text-xs rounded border px-1 py-px"
                :class="{
                    'text-blue-500 border-blue-500': tag === currentTag
                }"
            >{{ tag }}</button>
        </div>
    `,

    props: {
        initialTags: Array,
        currentTag: String
    },

    computed: {
        tags() {
            return ['all', ...new Set(this.initialTags)];
        }
    }
}