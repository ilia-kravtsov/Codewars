function generateBC(url, separator) {
  url = url.replace(/^(https?:\/\/)/i, "").split(/[?#]/)[0];

  const parts = url.split("/");
  let pathParts = parts.slice(1);

  if (pathParts.length) {
    let lastPart = pathParts[pathParts.length - 1];
    if (/^index\.(html|htm|php|asp)$/i.test(lastPart)) {
      pathParts.pop();
    } else {
      lastPart = lastPart.replace(/\.(html|htm|php|asp)$/i, "");
      pathParts[pathParts.length - 1] = lastPart;
    }
  }

  if (pathParts.length === 0 || pathParts[0] === "") {
    return '<span class="active">HOME</span>';
  }

  function processName(name) {
    if (name.length > 30) {
      const ignore = new Set([
        "the",
        "of",
        "in",
        "from",
        "by",
        "with",
        "and",
        "or",
        "for",
        "to",
        "at",
        "a",
      ]);
      return name
        .split("-")
        .filter((word) => !ignore.has(word.toLowerCase()))
        .map((word) => word[0])
        .join("")
        .toUpperCase();
    } else {
      return name.replace(/-/g, " ").toUpperCase();
    }
  }

  const breadcrumbs = [];

  breadcrumbs.push('<a href="/">HOME</a>');

  let cumulativePath = "";
  for (let i = 0; i < pathParts.length - 1; i++) {
    const part = pathParts[i];
    if (part === "") continue;
    cumulativePath += "/" + part;
    const displayName = processName(part);
    breadcrumbs.push(`<a href="${cumulativePath}/">${displayName}</a>`);
  }

  const lastPart = pathParts[pathParts.length - 1];
  const displayName = processName(lastPart);

  if (displayName) {
    breadcrumbs.push(`<span class="active">${displayName}</span>`);
  }

  return breadcrumbs.join(separator);
}
