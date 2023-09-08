import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: /*html*/`
        <section class="space-y-6">
            <assignment-list :assignments="filters.inProgress" title="In Progress"/>
            <assignment-list :assignments="filters.completed" title="Completed"/>

            <assignment-create @add="add"/>
        </section>
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: 'Finished project', complete: false, tag: 'math' },
                { id: 2, name: 'Chapter 4', complete: false, tag: 'science' },
                { id: 3, name: 'Turn in Homework', complete: false, tag: 'math' }
            ]
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