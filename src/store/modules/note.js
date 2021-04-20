import Note from '@/apis/notes.js'
import { Message } from 'element-ui'

const state={
    curNote: {},
    notes: [],
}
const getters={
notes:state=>state.notes
}
const mutations={
    setNote(state,payload){
        state.notes=payload.notes
    },
    addNote(state,payload){
        state.notes.unshift(payload.note)
    },
    updateNote(state,payload){
        let note =state.notes.find(note=>note.id===payload.noteId) || {}
        note.title=payload.title
        note.content=payload.content
    },
    deleteNote(state,payload){
        state.notes=state.notes.filter(note=>note.id!==payload.noteId)
    }
}
const actions={
    getNotes({ commit },{notebookId}) {
        return Note.getAll({notebookId})
          .then(res => {
            commit('setNote', { notes: res.data })
          })
      },
      addNote({ commit }, {notebookId,title,content}) {
        return Note.addNote({notebookId} ,{ title,content })
          .then(res => {
           // console.log('add success...', res)
            commit('addNote', { note: res.data })
            Message.success(res.msg)
          })
      },
      updateNote({ commit }, {noteId,title,content}) {
        return Note.updateNote({noteId}, { title,content  })
          .then(res => {
            commit('updateNote', { noteId: payload.noteId, title: payload.title })
            Message.success(res.msg)
          })
      },
    
      deleteNote({ commit }, { noteId }) {
        return Notebook.deleteNotebook({ noteId })
          .then(res => {
            commit('deleteNotebook', { noteId })
            Message.success(res.msg)
          })
      } 
}

export default {
    state,
    getters,
    mutations,
    actions
}