export default {
    template: /*html*/`
        <label class="flex items-center justify-between px-3 py-2">
            {{ assignment.name }}

            <input class="ml-3" type="checkbox" v-model="assignment.complete" />
        </label>
    `,

    props: {
        assignment: Object
    }
}