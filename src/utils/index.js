/**
 * 将内联样式字符串转换为对象
 * @param {字符串 'display:flex;...'} styleStr
 * @returns  {display:flex}
 */
export const styleStrToObject = (styleStr) => {
  const obj = {};
  const s = styleStr
    .toLowerCase()
    .replace(/-(.)/g, function (m, g) {
      return g.toUpperCase();
    })
    .replace(/;\s?$/g, "")
    .split(/:|;/g);
  for (var i = 0; i < s.length; i += 2) {
    obj[s[i].replace(/\s/g, "")] = s[i + 1].replace(/^\s+|\s+$/g, "");
  }

  return obj;
};

/**
 *
 * @param {目标对象} obj
 * @returns 对象是否为空
 */
export const isEmptyObject = (obj) => {
  return !!Object.keys(obj).length;
};
