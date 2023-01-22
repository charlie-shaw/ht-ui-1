<template>
  <ht-button @click="open">
    click to open MessageBox
  </ht-button>
</template>

<script>
import MessageBox from '../lib/Message.vue'
import htButton from '../lib/Button.vue'
import{HtMessageBox} from '../lib/Message'
export default {
    components:{MessageBox,htButton},
    setup(){
        const open = ()=>{
            HtMessageBox.alert('提示信息','标题',{
                confirmButtonText:'OK',
                ok(){
                    console.log('ok');
                }
            })
        }
        return{open}
    }
}
</script>

<style>

</style>