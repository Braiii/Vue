import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";

export default {
    components: { Assignment, AssignmentTags },

    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="font-bold text-2xl mb-3">{{ title }} ({{ assignments.length }})</h1>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)" 
                v-model:currentTag="currentTag"
            />

            <ul class="border-gray-600 border divide-y divide-gray-600">
                <li v-for="assignment in filteredAssignments" :key="assignment.id">
                    <assignment :assignment="assignment" />
                </li>
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Array
    },

    data() {
        return {
            currentTag: 'all'
        }
    },

    computed: {
        filteredAssignments() {
            return (this.currentTag === 'all') 
                ? this.assignments
                : this.assignments.filter(a => a.tag === this.currentTag);
        }
    }
}