import Vue from 'vue'
import Router from 'vue-router'
import Login from '@/components/Login.vue'
import NotebookList from '@/components/NotebookList.vue'
import NoteDetail from '@/components/NoteDetail.vue'
import TrashDetail from '@/components/TrashDetail.vue'

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: '/login',
      name: 'Login',
      component: Login
    },
    {
      path: '/notebooks',
      name: 'NotebookList',
      component: NotebookList
    },
    {
      path: '/note/:noteId',
      name: 'NoteDetail',
      component: NoteDetail
    }
    ,
    {
      path: '/trash/:noteId',
      name: 'TrashDetail',
      component: TrashDetail
    }
  ]
})
