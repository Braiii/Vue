import AssignmentList from "./AssignmentList.js";
import AssignmentCreate from "./AssignmentCreate.js";

export default {
    components: { AssignmentList, AssignmentCreate },

    template: /*html*/`
        <assignment-list :assignments="filters.inProgress" title="In Progress"></assignment-list>
        <assignment-list :assignments="filters.completed" title="Completed"></assignment-list>
        <assignment-create @add="add"></assignment-create>
    `,

    data() {
        return {
            assignments: [
                { id: 1, name: 'Build portfolio', complete: false },
                { id: 2, name: 'Apply for a job', complete: false },
                { id: 3, name: 'Learn new things', complete: false }
            ]
        }
    }, 

    computed: {
        filters() {
            return {
                'inProgress': this.assignments.filter(assignment => ! assignment.complete),
                'completed': this.assignments.filter(assignment => assignment.complete)
            }
        }
    },

    methods: {
        add(name) {
            this.assignments.push({
                name: name,
                complete: false,
                id: this.assignments.length + 1
            });
        }
    }
}