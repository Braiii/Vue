import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="font-bold text-xl mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h1>
            
            <div class="flex gap-4 mb-6">
                <button
                    @click="currentTag = tag" 
                    v-for="tag in tags" 
                    class="text-xs rounded border px-1 py-px"
                    :class="{
                        'text-blue-500 border-blue-500': tag === currentTag 
                    }"
                >{{ tag }}</button>
            </div>

            <ul class="border border-gray-600 divide-y divide-gray-600">
                <assignment 
                    v-for="assignment in filteredAssignments" 
                    :key="assignment.id"
                    :assignment="assignment"
                ></assignment>
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Array,
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            if(this.currentTag === 'all') {
                return this.assignments;
            }

            return this.assignments.filter(a => a.tag === this.currentTag);
        },  

        tags() {
            return ['all', ...new Set(this.assignments.map(a => a.tag))];
        }
    }
}