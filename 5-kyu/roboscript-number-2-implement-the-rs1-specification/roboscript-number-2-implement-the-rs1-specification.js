function execute(code) {
  let dirs = [[1,0],[0,-1],[-1,0],[0,1]], dir = 0
  let x = 0, y = 0
  let grid = new Map()
  grid.set(`${x},${y}`, true)
  code = code.replace(/([FLR])(\d*)/g,(m,c,n)=>c.repeat(+n||1))
  
  for (let c of code) {
    if (c == 'L') dir = (dir + 3) % 4
    else if (c == 'R') dir = (dir + 1) % 4
    else if (c == 'F') {
      x += dirs[dir][0]
      y += dirs[dir][1]
      grid.set(`${x},${y}`, true)
    }
  }
  
  let xs = [...grid.keys()].map(k=>+k.split(',')[0])
  let ys = [...grid.keys()].map(k=>+k.split(',')[1])
  let minx=Math.min(...xs),maxx=Math.max(...xs),miny=Math.min(...ys),maxy=Math.max(...ys)
  let res=[]
  
  for(let j=maxy;j>=miny;j--){
    let row=''
    for(let i=minx;i<=maxx;i++) row+=grid.has(`${i},${j}`)?'*':' '
    res.push(row)
  }
  return res.join('\r\n')
}