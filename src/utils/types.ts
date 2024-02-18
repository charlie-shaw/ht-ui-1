export function isFragment(description) {
  return description === Symbol.for("Fragment").description;
}
// 获取非Fragment(v-for)组件
export function getFragmentVnode(vnodes) {
  return vnodes.map((item) => {
    if (!isFragment(item.type.description)) return item;
  });
}

// 获取v-for内部的子元素，以及外部正常传入slot中的Vnode
export function getSlotVnode(vnodes) {
  return vnodes
    .map((item) => {
      if (!isFragment(item.type.description)) {
        return item;
      } else {
        return item.children;
      }
    })
    .flat(Infinity);
}
