function sc(a){
  return a.sort((x,y)=>x-y).filter((_,i)=>~i%2).concat(a.filter((_,i)=>i%2).reverse())
}