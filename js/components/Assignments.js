import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: /*html*/`
        <section class="flex gap-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress">
                <assignment-create @add="add" />
            </assignment-list>
            <assignment-list 
                v-show="showCompleted"
                :assignments="filters.completed" 
                title="Completed" 
                can-toggle
                v-on:toggle="showCompleted = !showCompleted"
            ></assignment-list>

        <!--  -->
        </section>
    `,

    data() {
        return {
            assignments: [],
            showCompleted: true
        }
    },

    computed: {
        filters() {
            return {
                completed: this.assignments.filter(a => a.complete),
                inProgress: this.assignments.filter(a => ! a.complete)
            }
        }
    },

    created() {
        fetch("http://localhost:3001/assignments")
            .then(response => response.json())
            .then(assignments => {
                this.assignments = assignments;
            });
    },

    methods: {
        add(name) {
            this.assignments.push({
                id: this.assignments.length + 1,
                name: name,
                complete: false,
                tag: 'math',
            });
        }
    }
}