<template>
  <div class="modal fade" id="filter-modal" tabindex="-1" role="dialog" aria-labelledby="modalTitle" aria-hidden="true">
    <div class="modal-dialog modal-dialog-centered" role="document">
      <div class="modal-content">
        <div class="modal-header">
          <slot name="header">
            <h5 class="modal-title" id="modalTitle">카테고리</h5>
            <button type="button"
            class="close"
            data-dismiss="modal"
            aria-label="Close" v-on:click="categoryUnchange()">
            <span aria-hidden="true">&times;</span>
          </button>
        </slot>
      </div>
      <div class="modal-body">
        <div class="form-check form-check-inline"
        v-for="section in category"
        :key="section.no">
        <input class="form-check-input"
        type="checkbox"
        :id="section.name"
        :value="section.no" v-model="checkModel">
        <label class="form-check-label"
        :for="section.name">{{section.name}}</label>
      </div>
    </div>
    <div class="modal-footer">
      <slot name="footer">
        <button type="button"
        class="btn btn-secondary"
        data-dismiss="modal" v-on:click="categoryUnchange()">Close</button>
        <button type="button"
        class="btn btn-primary" data-dismiss="modal" v-on:click="categoryChange()"
        >Save</button>
      </slot>
    </div>
  </div>
</div>
</div>
</template>

<script>
  export default {
    name: "FilterModal",
    data() {
      return {
        localChecked : null
      }
    },
    methods : {
      categoryChange(){// 모달에서 'Save' 버튼을 눌렀을 때, 발생하는 메소드
        // FilterModal(하위 컴포넌트)의 localChecked값을 MainView(상위 컴포넌트)의 checked값에 저장
        this.$store.dispatch('categoryChange', this.localChecked);
      },
      categoryUnchange(){// 모달에서 'X'버튼이나 'Close' 버튼을 눌렀을 때, 발생하는 메소드
        //취소 동작을 실행 했기 때문에, 체크값 원래대로 초기화 해야함. localChecked(로컬 체크 값)을 부모의 checked값으로 초기화
        this.localChecked = this.checked
      }
    },
    computed : {
      checkModel : { //카테고리 값을 v-model로 바인딩 하기 위한 함수들
        get : function(){//v-model 값을 가져올 때 사용
          if(this.localChecked == null){//localChecked가 null인 경우 (컴포넌트 created 된 경우, Detail 페이지를 보고 뒤로온 경우)
            //부모 컴포넌트로부터 자식 컴포넌트의 checked 값 초기화
            this.localChecked = this.checked
          }
          return this.localChecked
        },
        set : function(value){//v-model 값을 저장할 때 사용
          //바뀐 checked값을 자식 컴포넌트의 localChecked에 저장 (후에 save 버튼이 눌리면 부모 컴포넌트에 저장)
          this.localChecked = value
        }
      },
      category() {
        return this.$store.getters.getCategory
      },
      checked(){
        return this.$store.getters.getChecked
      }

  },
  created(){

  },
  mounted(){
  }
}
</script>

<style lang="less">

</style>
