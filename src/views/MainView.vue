<template>
  <div id="main-view">
    <div class="container">
      <loading :active="isLoading" color="#007BFF" transition="fade"></loading>
      <FilterModal></FilterModal>
      <div class="row">
        <div class="col-3">
          <div class="button-wrap">
            <div class="row">
              <button type="button" class="btn btn-outline-success col-12" data-toggle="modal" data-target="#filter-modal" data-backdrop="static" data-keyboard="false">필터</button>
            </div>
          </div>
        </div>

        <div class="col-md-6 offset-md-3 col-4 offset-5">
          <div class="button-wrap order-btn">
            <div class="row">
              <div class="col-6">
                <form class="form-inline" v-on:submit.prevent>
                  <select class="form-control form-control-sm" name="searchType" v-model="searchType">
                    <option value="contents">내용</option>
                    <option value="title">제목</option>
                    <option value="email">작성자</option>
                  </select>
                  <input class="from-control" type="text" placeholder="검색어를 입력해주세요." v-model="searchValue">
                </form>
              </div>
              <span class="col-3 sort" v-on:click="sort('asc')" v-bind:class="this.getOrd== 'asc' ? 'active' : ''"> 오름차순</span>
              <span class="col-3 sort" v-on:click="sort('desc')" v-bind:class="this.getOrd == 'asc' ? '' : 'active'"> 내림차순</span>
            </div>
          </div>
        </div>
      </div>

      <!-- 리스트(게시글, 광고)-->
      <div class="row">
        <div class="col-12" v-for="index in filterList.length" v-bind:key="index">
          <Post v-if="filterList.length!=0" :post="filterList[index-1]" :category="getCategory"></Post>
          <div v-if="ads.length!=0 && (index%10)%3 == 0 && (index%10)/3 ==1">
            <Advertisement :advertisement="ads[Math.floor(index/10)]"></Advertisement>
          </div>
        </div>
        <!-- <div class="col-12" v-for="index in posts.length" v-bind:key="index">
          <Post v-if="posts.length!=0" :post="posts[index-1]" :category="getCategory"></Post>
          <div v-if="ads.length!=0 && (index%10)%3 == 0 && (index%10)/3 ==1">
            <Advertisement :advertisement="ads[Math.floor(index/10)]"></Advertisement>
          </div>
        </div> -->
        <div class="button-wrap col-12">
            <div class="row">
              <button type="button" class="btn btn-outline-success col-4 offset-4" @click="viewMore()">
                더보기
              </button>
            </div>
          </div>
      </div>


    </div>
  </div>
</template>

<script>
import FilterModal from '../components/FilterModal'
import Post from '../components/Post'
import Advertisement from '../components/Advertisement'
import Loading from 'vue-loading-overlay';
import 'vue-loading-overlay/dist/vue-loading.css';

export default {
  name: 'MainView',
  components: {
    Loading,FilterModal,Post,Advertisement
  },
  data() {
    return {
    }
  },
  computed :{
    isLoading(){
      return this.$store.getters.getIsLoading
    },
    posts(){
      return this.$store.getters.getPosts
    },
    ads(){
        return this.$store.getters.getAdvertisements
    },
    getOrd(){
      return this.$store.getters.getOrd
    },
    getCategory(){
      return this.$store.getters.getCategory
    },
    filterList(){
      let postList = this.posts

      if(this.searchValue.length > 0){
        postList = postList.filter(post =>{
          let result;
          switch (this.searchType) {
            case "contents":
              result = post.contents.toLowerCase().includes(this.searchValue.toLowerCase());
              break;
            case "title":
              result = post.title.toLowerCase().includes(this.searchValue.toLowerCase());
              break;
            case "email":
              result = post.email.toLowerCase().includes(this.searchValue.toLowerCase());
              break;
            default:
              result = false;
          }
          return result;
        })
      }
      return postList;
    },
    searchType : {
      get: function(){
        return this.$store.getters.getSearchType
      },
      set : function(value){
        this.$store.commit('updateSearchType',value)
      }
    },
    searchValue : {
      get : function(){
        return this.$store.getters.getSearchValue
      },
      set : function(value){
        this.$store.commit('updateSearchValue',value)
      }
    }
  },
  methods : {
    sort(changedOrd) {//ord가 변경 됬을때
      if (this.getOrd != changedOrd) {
        this.$store.dispatch('ordChange', changedOrd);
      }
    },
    viewMore() {
      this.$store.dispatch('moreList');
    },
    formChanged(){

    }
  },
  created(){
    if(this.posts == 0){// 처음으로 MainView 컴포넌트가 생성된 경우
      this.$store.dispatch('setCategory')
      this.$store.dispatch('setPosts')
      this.$store.dispatch('setAdvertisements')
    }
  },
  mounted(){

  },
  beforeDestroy(){

  }
}
</script>

<style lang="less">
#app {
  -ms-user-select: none;
  -moz-user-select: -moz-none;
  -khtml-user-select: none;
  -webkit-user-select: none;
  user-select: none;

  /*공통내용 */
  a{
    color: #000;
    display: block;
    text-decoration: none;
  }

  .button-wrap {
    padding: 15px;
    .btn-outline-success{
      border-color: #00c854;
      &:hover{
        background: #00c854;
      }
    }
  }

  .row {
    + .row {
      margin-top: 15px;
    }

    div[class^="col-"] {
      &:first-child {
        .card {
          margin-top: 0;
        }
      }

      .card {
        margin-top: 15px;

        .card-subtitle {
          display: block;
          width: 100%;
          margin-bottom: 0.75rem;
          span {
            position: relative;
            line-height: 1.75rem;
            + span {
              padding-left: 15px;
              &:before{
                content: '';
                display: block;
                width: 1px;
                height: 0.75rem;
                position: absolute;
                top: 0;
                bottom: 0;
                margin: auto;
                left: 7.5px;
                background: #000;

              }
            }
          }
        }
      }
    }
  }

  .card {
      &:hover {
          border-color: #00c854;

          .card-header {
              border-color: #00c854;
          }
      }

      .card-header {
          background: rgba(0, 0, 0, 0.01);
      }

      .card-text {
          display: -webkit-box;
          overflow: hidden;
          -ms-text-overflow: ellipsis;
          text-overflow: ellipsis;
          -webkit-line-clamp: 2;
          -webkit-box-orient: vertical;
          white-space: inherit;
      }

      &.ad-card {
          .card-body {
              .card-text {
                  display: -webkit-box;
                  overflow: hidden;
                  -ms-text-overflow: ellipsis;
                  text-overflow: ellipsis;
                  -webkit-line-clamp: 2;
                  -webkit-box-orient: vertical;
                  white-space: inherit;
              }
          }
      }
  }
  form{
      select,
      input{
          display: inline-block;
          font-size: 0.85rem;
          line-height: 1rem;
          height: 2rem;
      }
      select{
          width: calc(30% - 5px);
          margin-right: 5px;
      }
      input{
          width: 70%;
          padding: 0 5px;
          -webkit-border-radius: 0.2rem;
          -moz-border-radius: 0.2rem;
          border-radius: 0.2rem;
          background: #fff;
          border: 1px solid rgba(0, 0, 0, 0.125);
      }

  }


  .order-btn{
    .sort{
      text-align: right;
      &.active{
        color: #00c854;
      }
    }
  }
}

</style>
