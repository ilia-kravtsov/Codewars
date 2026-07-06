function functionator(str) {
  const words = str.trim().split(/\s+/);

  function build(index) {
    const obj = {};
    if (index < words.length) {
      obj[words[index]] = () => build(index + 1);
    }
    return obj;
  }

  return build(0);
}