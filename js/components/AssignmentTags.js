export default {
    template: /*html*/ `
        <div class="flex gap-2 mb-6">
            <button 
                @click="$emit('update:currentTag', tag)"
                class="border rounded text-xs p-1.5 py-px capitalize"
                :class="{
                    'border-blue-500 text-blue-500': tag === currentTag
                }"
                v-for="tag in tags"
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
    },
}