
export const txtSlicer = ( text , max )=>{
  return text.length >= max ? text.slice(0 , max) + "..." : text
}
