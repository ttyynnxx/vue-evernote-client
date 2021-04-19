<template>
    <div id="note" class="detail">
      <NoteSidebar/>
      <div id="note-detail">
        <h1>notebookId : {{ $route.query.notebookId }}</h1>
        <h1>noteId : {{ $route.query.noteId }}</h1>
      </div>
    </div>
</template>

<script>
import Auth from '@/apis/auth'
import NoteSidebar from '@/components/NoteSideBar.vue'

export default {
  components:{
    NoteSidebar
  },
  data() {
    return {
      notes: [],
    }
  },
  created() {
    Auth.getInfo().then(res => {
      if (!res.isLogin) {
        this.$router.push({ path: '/login' })
      }
    })
  }
}
</script>

<style lang="less" scoped>
@import url(../assets/css/note-detail.less);

#note {
  display: flex;
  align-items: stretch;
  background-color: #fff;
  flex: 1;
}
</style>
