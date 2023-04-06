import { ref } from 'vue'

/**
 * 
 * @param dom Element元素
 * @returns 返回一个对象，包含translate的X和Y的偏移值，这两个值是一个响应式数据
 */
let dom = null
const startX = ref(0);
const startY = ref(0);
const endX = ref(0);
const endY = ref(0);
let transX = ref(0);
let transY = ref(0);
const privX = ref(0)
const privY = ref(0)
let rangeStartX = null;
let rangeStartY = null;
let rangeEndX = null;
let rangeEndY = null;


/**
 * 保证translateX和translateY在范围之间,超出对其值进行重置
 */
const resetTranslate = ()=>{
    if (transX.value < rangeStartX) {
        transX.value = rangeStartX;
    }
    if (transX.value > rangeEndX) {
        transX.value = rangeEndX;
    }
    if (transY.value < rangeStartY) {
        transY.value = rangeStartY;
    }
    if (transY.value > rangeEndY) {
        transY.value = rangeEndY;
    }
}
const move = (event) => {
    event.stopPropagation();
    event.preventDefault();

    // 移动时，记录鼠标移动的位置作为结束的位置
    endX.value = event.clientX;
    endY.value = event.clientY;
    // 在上一次translate偏移值的基础上，得到新的偏移值
    transX.value = privX.value + endX.value - startX.value;
    transY.value = privY.value + endY.value - startY.value;
    // 保证translateX和translateY在范围之间,超出对其值进行重置
    resetTranslate()

    dom.addEventListener('mouseup', mouseup)
}
const mouseup = (e) => {
    e.stopPropagation();
    e.preventDefault();
    // 每次松开鼠标拖拽结束，记录本次操作的偏移值
    privX.value = transX.value;
    privY.value = transY.value;
    document.removeEventListener('mousemove', move)
}
export default function useTranslate(element) {
    const parent = element.parentElement
    dom = element

    const handler = (e) => {
        e.stopPropagation();
        e.preventDefault();
        startX.value = e.clientX;
        startY.value = e.clientY;
        // 获取translateX范围的start
        rangeStartX = rangeStartX || -parent.getBoundingClientRect().left
        // 获取translateY范围的start
        rangeStartY = rangeStartY || -parent.getBoundingClientRect().top
        // 获取translateX范围的end
        rangeEndX = rangeEndX || window.innerWidth - parent.getBoundingClientRect().right
        // 获取tranlateY范围的end
        rangeEndY = rangeEndY || window.innerHeight - parent.getBoundingClientRect().bottom

        document.addEventListener('mousemove', move)
    };
    dom.addEventListener('mousedown', handler)

    return {
        transX, transY
    }

}