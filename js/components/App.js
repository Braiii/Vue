import Assignments from './Assignments.js';
import Panel from './Panel.js';

export default {
    components: { Assignments, Panel },

    template: /*html*/`
        <div class="grid gap-6">
            <assignments></assignments>

            <panel>
                <template #heading>
                    Hello World
                </template>

                this is the body of content
            </panel>

            <panel>
                this is the body of content

                <template #footer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.
                </template>
            </panel>

            <panel theme="light">
                this is the body of content

                <template #footer>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Doloribus, cumque.
                </template>
            </panel>
        </div>
    `,
}