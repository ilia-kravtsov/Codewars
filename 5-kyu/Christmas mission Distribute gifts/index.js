function distributeGifts(n,wishes){
  let r
  !function f(i,s,a){
    if(r||s>n)return
    if(s==n)return r=a
    for(;i<wishes.length;i++)f(i+1,s+wishes[i],[...a,wishes[i]])
  }(0,0,[])
  return r||"Mission Failed!"
}