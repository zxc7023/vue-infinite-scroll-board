<template>
  <div class="advertisement" v-if="advertisement != null">
    <header class="card-header col-12">
      <h4 class="card-title">sponser</h4>
    </header>
    <div class="col-12 col-sm-6" style="padding: 0;">
      <img :src="'http://comento.cafe24.com/public/images/'+advertisement.img" class="rounded-0 card-img">
    </div>
    <div class="col-12 col-sm-6">
        <div class="card-body">
            <h4 class="card-title">{{advertisement.title}}</h4>
            <p class="card-text">{{advertisement.contents}}</p>
        </div>
    </div>
  </div>

</template>

<script>
export default {
  name: 'Advertisement',
  props : {
    advertisement : { type : Object}
  }
}
</script>
