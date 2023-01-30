<demo>
    基础用法
</demo>
  <template>
  <ht-button type="success" @click.stop="open">Show Message</ht-button>
</template>
    
<script lang="ts">
import HtMessage from "../../lib/Message/Message";
import { h } from "vue";
export default {
  setup() {
    const open =()=>{
      HtMessage({message:'This  is a  message'})
    }
    return { open };
  },
};
</script>
  