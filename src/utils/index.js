/**
 * 将内联样式字符串转换为对象
 * @param {字符串 'display:flex;...'} styleStr
 * @returns  {display:flex}
 */
function styleStrToObject(styleStr) {
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
}

export default styleStrToObject;
