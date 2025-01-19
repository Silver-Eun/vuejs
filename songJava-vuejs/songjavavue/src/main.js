import { createApp, h } from 'vue'
import HomeComponent from './components/Home'
import BoardListComponent from "./components/BoardList.vue";
import BoardFormComponent from "./components/BoardForm.vue";
import ErrorComponent from './components/Error'

const routes = {
    "/": HomeComponent,
    "/board/list": BoardListComponent,
    "/board/form": BoardFormComponent,
    '/error': ErrorComponent
};

const SimpleRouter = {
    data: () => ({
        currentRoute: window.location.pathname
    }),

    computed: {
        CurrentComponent() {
            return routes[this.currentRoute]
        }
    },

    render() {
        return h(this.CurrentComponent)
    }
}

createApp(SimpleRouter).mount("#app");