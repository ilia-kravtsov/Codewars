var soundex = function(names) {
  var map = {
    b: '1', f: '1', p: '1', v: '1',
    c: '2', g: '2', j: '2', k: '2', q: '2', s: '2', x: '2', z: '2',
    d: '3', t: '3',
    l: '4',
    m: '5', n: '5',
    r: '6'
  }
  
  return names.split(/\s+/).filter(Boolean).map(function(name) {
    var first = name[0].toUpperCase()
    var s = name.toLowerCase()
    s = s[0] + s.slice(1).replace(/[hw]/g, '')
    s = s.split('').map(function(c) { return map[c] || c }).join('')
    s = s.replace(/(\d)\1+/g, '$1')
    s = s[0] + s.slice(1).replace(/[aeiouy]/g, '')
    var digits = s.slice(1).replace(/\D/g, '')
    digits = (digits + '000').slice(0,3)
    return first + digits
  }).join(' ')
}
​