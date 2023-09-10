export default {
    template: /*html*/`
        <form @submit.prevent="add" class="mt-5">
            <div class="mb-6 flex">
                <input class="p-2 w-full text-gray-600 focus:outline-none"
                    type="text"
                    name="assignment"
                    id="assignment"
                    placeholder="New assignment..."
                    required
                    v-model="newAssignment"
                >
                <button type="submit" class="bg-white text-black p-2 border-l">Add</button>
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