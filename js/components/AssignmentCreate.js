export default {
    template: /*html*/ `
        <form class="mt-6" @submit.prevent="add">
            <div class="mb-6">
                <label 
                    class="block mb-2 uppercase font-bold text-xs text-white"
                    for="assignment"
                >
                    New Assignment
                </label>

                <input class="p-2 w-full text-gray-600"
                    v-model="newAssignment"
                    type="text"
                    name="assignment"
                    id="assignment"
                    placeholder="New Assignment..."
                >
            </div>

            <div class="mb-6">
            <button type="submit"
                class="bg-gray-700 text-white rounded py-2 px-4 hover:bg-gray-600"
            >
                Add
            </button>
            </div>
        </form>
    `,

    data() {
        return {
            newAssignment: ''
        }
    },

    methods: {
        add() {
            this.$emit('add', this.newAssignment);
            this.newAssignment = '';
        }
    }
}