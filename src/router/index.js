import Vue from 'vue'
import Router from 'vue-router'
import overView from './components/overView'
import task from '../components/task'

Vue.use(Router)

export default new Router({
    routes: [
        {
            path: '/',
            name: 'task',
            component: task
        },
    ]
})
