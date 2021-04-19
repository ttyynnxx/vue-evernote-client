<template>
    <div id="note" class="detail">
      <NoteSideBar/>
      <div id="note-detail">
        <h1>notebookId : {{ $route.query.notebookId }}</h1>
        <h1>noteId : {{ $route.query.noteId }}</h1>
      </div>
    </div>
</template>

<script>
import Auth from '@/apis/auth'
import NoteSideBar from '@/components/NoteSideBar.vue'

export default {
  components:{
    NoteSideBar
  },
  data() {
    return {
      msg: '笔记本详情列表'
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
