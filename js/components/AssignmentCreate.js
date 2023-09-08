export default {
    template: /*html*/`
        <form @submit.prevent="add">
            <div class="mb-6">
                <input class="border border-gray-400 p-1 w-full text-gray-600"
                    type="text"
                    name="assignment"
                    id="assignment"
                    placeholder="New assignment..."
                    required
                    v-model="newAssignment"
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
    },
}