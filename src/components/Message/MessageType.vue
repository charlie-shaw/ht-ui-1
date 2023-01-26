<demo>
    自定义按钮颜色
</demo>
  <template>
    <ht-button bg="#626AEF" color="white" @click.stop="show">Default</ht-button>
    <Message></Message>
</template>
    
<script lang="ts">
import htButton from "../../lib/Button.vue";
import Message from "../../lib/Message/Message.vue";
import MessageFn from '../../lib/Message/Message.ts'
export default {
  components: { htButton,Message },
  setup(){
    const show = ()=>{
        MessageFn({message:'This is a message',type:'success'})
    }
    return{show}
  }
};
</script>
  