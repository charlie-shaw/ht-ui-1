<template>
    
    <Demo :component="MessageType"></Demo>
</template>

<script>
import Demo from "../../components/common/Demo.vue";
import MessageType from "../../components/Message/MessageType.vue";
export default {
    components:{MessageType,Demo},
    setup(){
        return{
            MessageType
        }
    }
}
</script>

<style>

</style>