// 根据组件名获取插槽中的组件
export function GetSlotsByName(name: String, Data: any[]) {
  let result = [];
  Data.forEach((item) => {
    if (isFragment(item.type)) {
      result.push(...(item?.children || []));
    } else if (item.type.__name === name) {
      result.push(item);
    }
  });
  return result;
}

// 判断插槽中的组件是否是v-for渲染的
function isFragment(type: any) {
  return (
    type.toString() === "Symbol(Fragment)" || type.toString() === "Symbol()"
  );
}
