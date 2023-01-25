<template>
  <h1>Button 按钮</h1>
  <Demo :component="ButtonDefault" :descComponent="ButtonDefaultDesc"></Demo>
  <Demo :component="ButtonDisabled" :descComponent="ButtonDisabledDesc"></Demo>
  <!-- <ButtonLink></ButtonLink>
  <ButtonDefault></ButtonDefault>
  <ButtonText></ButtonText>
  <ButtonRound></ButtonRound>
  <ButtonSize></ButtonSize> -->
</template>

<script lang="ts">
import ButtonLink from "../../components/Button/ButtonLink.vue";
import ButtonDefault from "../../components/Button/ButtonDefault.vue";
import ButtonText from "../../components/Button/ButtonText.vue";
import ButtonRound from "../../components/Button/ButtonRound.vue";
import ButtonSize from "../../components/Button/ButtonSize.vue";
import Demo from "../../components/common/Demo.vue";
import ButtonDefaultDesc from "../../components/Button/ButtonDefaultDesc.vue";
import ButtonDisabled from "../../components/Button/ButtonDisabled.vue";
import ButtonDisabledDesc from "../../components/Button/ButtonDisabledDesc.vue";
export default {
  components: {
    ButtonLink,
    ButtonDefault,
    ButtonText,
    ButtonRound,
    ButtonSize,
    Demo,
    ButtonDefaultDesc,
    ButtonDisabled,
    ButtonDisabledDesc,
  },
  setup() {
    console.log(ButtonDefault);

    return { ButtonDefault, ButtonDefaultDesc, ButtonDisabled,ButtonDisabledDesc };
  },
};
</script>

<style>
</style>