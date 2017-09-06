let smartReturn = (more, less, nega) => {
  if (nega) return '-' + less;
  else return more;
}

let stringMax = (a, b) => {
  a = a.trim();
  b = b.trim();
  let negatives = false;

  if (a[0] === '-' && b[0] !== '-') return smartReturn(b, a, negatives);
  else if (b[0] === '-' && a[0] !== '-') return smartReturn(a, b, negatives);
  else if (a[0] === '-' && b[0] === '-') negatives = true;

  let dots = 0;

  for (var i = 0; i < Math.min(a.length, b.length); i++) {
    if (a[i] === '.' && b[i] !== '.') {
      // console.log('found the a dot')
      return smartReturn(b, a, negatives);
    }
    else if (b[i] === '.' && a[i] !== '.') {
      // console.log('found the b dot')
      return smartReturn(a, b, negatives);
    }
    else if (a[i] === '.' && b[i] === '.') {
      // console.log('found 2 dots');
      dots++;
      break;
    }
  }

  if (dots === 0 && a.length !== b.length && ( (Math.max(a.length, b.length) === a.length)? a[i]:b[i] ) !== '.') {
    let longer = (Math.max(a.length, b.length) === a.length)? a:b;
    let shorter = (Math.max(a.length, b.length) === a.length)? b:a;
    // console.log(longer + ' is the number with more whole digits.');
    return smartReturn(longer, shorter, negatives);
  }

  // console.log('checking individual digits');

  let aDigits = [], bDigits = [];
  for (let j = 0; j < Math.min(a.length, b.length); j++) {
    if (a[j] !== '.') {
      if (a[j] > b[j]) return smartReturn(a, b, negatives);
      else if (b[j] > a[j]) return smartReturn(b, a, negatives);
    }
  }

  // console.log('they are equal numbers');
  return smartReturn(a, b, negatives);
}
