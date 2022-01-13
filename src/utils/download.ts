// utils.js
export const download = (res: any, type: any, filename: any) => {
  console.log(res);
  // 创建blob对象，解析流数据
  const blob = new Blob([res], {
    // 如何后端没返回下载文件类型，则需要手动设置：type: 'application/pdf;chartset=UTF-8' 表示下载文档为pdf，如果是word则设置为msword，excel为excel
    type: type,
  });
  const a = document.createElement("a");
  // 兼容webkix浏览器，处理webkit浏览器中href自动添加blob前缀，默认在浏览器打开而不是下载
  const URL = window.URL || window.webkitURL;
  // 根据解析后的blob对象创建URL 对象
  const herf = URL.createObjectURL(blob);
  // 下载链接
  a.href = herf;
  // 下载文件名,如果后端没有返回，可以自己写a.download = '文件.pdf'
  a.download = filename;
  document.body.appendChild(a);
  a.click();
  document.body.removeChild(a);
  // 在内存中移除URL 对象
  window.URL.revokeObjectURL(herf);
};
