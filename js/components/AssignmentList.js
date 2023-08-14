import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="font-bold text-xl mb-2">
                {{ title }}
                <span>({{ assignments.length }})</span>
            </h1>
            
            <assignment-tags 
                :initial-tags="this.assignments.map(a => a.tag)"
                v-model:currentTag="currentTag"
            />

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
        }
    }
}