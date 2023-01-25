<template>
  <h1>Button 按钮</h1>
  <Demo :component="ButtonDefault" title="基础用法" :descComponent="ButtonDefaultDesc"></Demo>
  <!-- <ButtonLink></ButtonLink>
  <ButtonDefault></ButtonDefault>
  <ButtonText></ButtonText>
  <ButtonRound></ButtonRound>
  <ButtonSize></ButtonSize> -->
</template>

<script lang="ts">
import ButtonLink from '../../components/Button/ButtonLink.vue'
import ButtonDefault from '../../components/Button/ButtonDefault.vue'
import ButtonText from '../../components/Button/ButtonText.vue'
import ButtonRound from '../../components/Button/ButtonRound.vue'
import ButtonSize from '../../components/Button/ButtonSize.vue'
import Demo from '../../components/common/Demo.vue'
import ButtonDefaultDesc from '../../components/Button/ButtonDefaultDesc.vue'
export default {
  components:{ButtonLink,ButtonDefault,ButtonText,ButtonRound,ButtonSize,Demo,ButtonDefaultDesc},
  setup(){
    // console.log(ButtonDefault.__demo);
    
    return{ButtonDefault,ButtonDefaultDesc}
  }
}
</script>

<style>

</style>