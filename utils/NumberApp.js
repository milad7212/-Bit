export const NumberAppRound=(num)=>{
 return Math.round(num)
 .toString()
 .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
}

export const NumberApp=(num)=>{
    return num
    .toString()
    .replace(/\B(?=(\d{3})+(?!\d))/g, ",")
   }