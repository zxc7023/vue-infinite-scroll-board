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
        <div class="col-md-3 offset-md-6 col-4 offset-5">
          <div class="button-wrap order-btn">
            <div class="row">
              <span class="col-6 sort" v-on:click="sort('asc')" v-bind:class="this.getOrd== 'asc' ? 'active' : ''"> 오름차순</span>
              <span class="col-6 sort" v-on:click="sort('desc')" v-bind:class="this.getOrd == 'asc' ? '' : 'active'"> 내림차순</span>
            </div>
          </div>
        </div>
      </div>

      <!-- search-->
      <!-- <div class="row">
        <div class="col-4 offset-8">
          <form class="form-inline" v-on:submit.prevent>
            <select class="form-control form-control-sm" name="searchType" v-on:change="formChanged" v-model="searchType">
              <option value="contents">내용</option>
              <option value="title">제목</option>
              <option value="email">작성자</option>
            </select>
            <input class="from-control" type="text" placeholder="검색어를 입력하세요." v-model="searchValue" v-on:keyup="formChanged">
          </form>
        </div>
      </div> -->

      <!-- 리스트(게시글, 광고)-->
      <div class="row">
        <div class="col-12" v-for="index in posts.length" v-bind:key="index">
          <Post v-if="posts.length!=0" :post="posts[index-1]" :category="getCategory"></Post>
          <div v-if="ads.length!=0 && (index%10)%3 == 0 && (index%10)/3 ==1">
            <Advertisement :advertisement="ads[Math.floor(index/10)]"></Advertisement>
          </div>
        </div>
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

  .order-btn{
    .sort{
      text-align: right;
      &.active{
        color: #00c854;
      }
    }
  }


  /*공통내용 */
  a{
    color: #000;
    display: block;
    text-decoration: none;
  }
  // .slide-fade-enter-active {
  //   transition: all .3s ease;
  // }
  // .slide-fade-leave-active {
  //   transition: all .8s cubic-bezier(1.0, 0.5, 0.8, 1.0);
  // }
  // .slide-fade-enter, .slide-fade-leave-to
  //   /* .slide-fade-leave-active below version 2.1.8 */ {
  //   transform: translateX(100px);
  //   opacity: 0;
  // }

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
}

</style>
