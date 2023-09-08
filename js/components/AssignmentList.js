import Assignment from "./Assignment.js";

export default {
    components: { Assignment },

    template: /*html*/`
        <section v-show="assignments.length">
            <h1 class="font-bold text-3xl mb-10">{{ title }} ({{ assignments.length }})</h1>

            <ul class="border-gray-600 border divide-y divide-gray-600">
                <li v-for="assignment in assignments" :key="assignment.id">
                    <assignment :assignment="assignment" />
                </li>
            </ul>
        </section>
    `,

    props: {
        title: String,
        assignments: Array
    }
}