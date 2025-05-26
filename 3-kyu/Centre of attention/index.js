/*
For this kata, we're given an image in which some object of interest (e.g. a face, or a license plate, or an aircraft) appears as a large block of contiguous pixels all of the same colour. (Probably some image-processing has already occurred to achieve this, but we needn't worry about that.) We want to find the centre of the object in the image.

We'll do this by finding which pixels of the given colour have maximum depth. The depth of a pixel P is the minimum number of steps (up, down, left, or right) you have to take from P to reach either a pixel of a different colour or the edge of the image.

pixel depths pic

In the picture, the red pixel marked "3" has a depth of 3: it takes at least 3 steps from there to reach something other than another red pixel. Note that the steps need not be all in the same direction. Only one red pixel has depth 3: the one right in the middle of the red region. Similarly, the blue pixel marked "2" has a depth of 2 (but it is not the only one with this depth). The green and purple pixels all have depth 1.

The pixels of a given colour with the largest depth will be found at the centre of the biggest solid region(s) of that colour. Those are the ones we want.

The function you'll write (central_pixels) belongs to the following data structure:

class Image
{
 constructor(data, w, h)
 {
  this.pixels = data.slice();
  this.width = w;
  this.height = h;
 }
}
The image data consists of a one-dimensional array pixels of unsigned integers (or just integers, in languages that don't have unsigned integers as such), which correspond to pixels in row-by-row order. (That is, the top row of pixels comes first, from left to right, then the second row, and so on, with the pixel in the bottom right corner last of all.) The values of the pixels array elements represent colours via some one-to-one mapping whose details need not concern us.

The central_pixels function should find and return all the positions (pixels array indices) of the pixels having the greatest depth among all pixels of colour colour).

Note 1. The final test in the suite (Big_Test) is a 16-megapixel image (1 megapixel in the Python version), so you will need to consider the time and space requirements of your solution for images up to that size.

Note 2. The order of pixel positions in the returned array is not important; sort them however you like.

Hint. It is possible to get this done in two passes through the pixel data.
*/

function central_pixels(image, colour) {
  const w = image.width;
  const h = image.height;
  const n = image.pixels.length;
  const depths = new Array(n).fill(-1);
  const q = [];

  for (let r = 0; r < h; r++) {
    for (let c = 0; c < w; c++) {
      const idx = r * w + c;
      if (image.pixels[idx] !== colour) continue;
      if (r === 0 || r === h - 1 || c === 0 || c === w - 1) {
        depths[idx] = 0;
        q.push(idx);
      } else {
        if (
          image.pixels[(r - 1) * w + c] !== colour ||
          image.pixels[(r + 1) * w + c] !== colour ||
          image.pixels[r * w + (c - 1)] !== colour ||
          image.pixels[r * w + (c + 1)] !== colour
        ) {
          depths[idx] = 0;
          q.push(idx);
        }
      }
    }
  }

  for (let i = 0; i < q.length; i++) {
    const idx = q[i];
    const d = depths[idx];
    const r = Math.floor(idx / w);
    const c = idx % w;

    const neighbors = [
      { r: r - 1, c: c },
      { r: r + 1, c: c },
      { r: r, c: c - 1 },
      { r: r, c: c + 1 },
    ];

    for (let { r: nr, c: nc } of neighbors) {
      if (nr < 0 || nr >= h || nc < 0 || nc >= w) continue;
      const nidx = nr * w + nc;
      if (image.pixels[nidx] === colour && depths[nidx] === -1) {
        depths[nidx] = d + 1;
        q.push(nidx);
      }
    }
  }

  let maxd = -1;
  for (let i = 0; i < n; i++) {
    if (image.pixels[i] === colour && depths[i] > maxd) {
      maxd = depths[i];
    }
  }

  const res = [];
  for (let i = 0; i < n; i++) {
    if (image.pixels[i] === colour && depths[i] === maxd) {
      res.push(i);
    }
  }

  return res;
}
