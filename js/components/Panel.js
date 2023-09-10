export default {
    template: /*html*/ `
        <div :class="{
            'border rounded-lg p-4' : true,
            'border-white-300 bg-white text-black' : theme === 'light',
            'border-gray-600 bg-gray-700 text-white' : theme === 'dark',
        }">
            <h2 v-if="$slots.heading" class="font-bold text-xl mb-2">
                <slot name="heading" />
            </h2>

            <slot />

            <footer v-if="$slots.footer" class="border-t border-gray-300 mt-6 pt-2 text-sm">
                <slot name="footer" />
            </footer>
        </div>
    `,

    props: {
        theme: { type: String, default: 'dark' }
    }
}