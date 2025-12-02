function distance(coord1, coord2) {
  const R = 6371
  const toRad = d => d * Math.PI / 180
​
  const parse = c => {
    const [lat, lon] = c.split(',').map(s => s.trim())
    const dms = x => {
      const m = x.match(/(\d+)°\s*(\d+)′\s*(\d+)″\s*([NSEW])/)
      let v = +m[1] + m[2] / 60 + m[3] / 3600
      if (m[4] === 'S' || m[4] === 'W') v = -v
      return toRad(v)
    }
    return [dms(lat), dms(lon)]
  }
​
  const [lat1, lon1] = parse(coord1)
  const [lat2, lon2] = parse(coord2)
​
  const dLat = lat2 - lat1
  const dLon = lon2 - lon1
​
  const a =
    Math.sin(dLat / 2) ** 2 +
    Math.cos(lat1) * Math.cos(lat2) * Math.sin(dLon / 2) ** 2
​
  const c = 2 * Math.atan2(Math.sqrt(a), Math.sqrt(1 - a))
​
  return Math.round(R * c)
}
​