<template>
  <div class="post">
    <div class="card">
      <router-link :to="{ path : 'post', query : { no : post.no} }">
              <header class="card-header clearfix">
                  <span> {{category[post.category_no-1].name}} </span>
                  <span class="float-right">글 번호 : {{post.no}}</span>
              </header>
              <div class="card-body">
                  <p class="card-subtitle overflow-hidden float-left">
                      <span class="">{{post.email}}</span>
                      <span class="">{{post.updated_at}}</span>
                  </p>
                      <h4 class="card-title">{{post.title}}</h4>
                      <p class="card-text">{{post.contents}}</p>
              </div>
      </router-link>
    </div>
  </div>
</template>

<script>
export default {
  name: 'Post',
  props : {
    post : { type : Object},
    category : { type : Array }
  }
}

</script>
