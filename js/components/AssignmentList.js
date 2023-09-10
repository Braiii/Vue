import Assignment from "./Assignment.js";
import AssignmentTags from "./AssignmentTags.js";
import Panel from "./Panel.js";

export default {
    components: { Assignment, AssignmentTags, Panel },

    template: /*html*/`
        <panel v-show="assignments.length" class="w-72">
            <div className="flex justify-between items-center">
                <h2 class="font-bold text-xl mb-3">{{ title }} ({{ assignments.length }})</h2>

                <button v-show="canToggle" @click="$emit('toggle')">&times;</button>
            </div>
            
            <assignment-tags 
                :initial-tags="assignments.map(a => a.tag)" 
                v-model:currentTag="currentTag"
            />

            <ul class="border-gray-600 border divide-y divide-gray-600">
                <li v-for="assignment in filteredAssignments" :key="assignment.id">
                    <assignment :assignment="assignment" />
                </li>
            </ul>

            <slot />
        </panel>
    `,

    props: {
        title: String,
        assignments: Array,
        canToggle: { type: Boolean, default: false },
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