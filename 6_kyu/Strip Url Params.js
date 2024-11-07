/*
Complete the method so that it does the following:
Removes any duplicate query string parameters from the url (the first occurence should be kept)
Removes any query string parameters specified within the 2nd argument (optional array)
Examples:
stripUrlParams('www.codewars.com?a=1&b=2&a=2') === 'www.codewars.com?a=1&b=2'
stripUrlParams('www.codewars.com?a=1&b=2&a=2', ['b']) === 'www.codewars.com?a=1'
stripUrlParams('www.codewars.com', ['b']) === 'www.codewars.com'
*/

function stripUrlParams(url, paramsToStrip = []) {
  let [baseUrl, queryString] = url.split("?");
  if (!queryString) return baseUrl;
  const params = new Map();
  queryString.split("&").forEach((param) => {
    const [key, value] = param.split("=");
    if (!params.has(key) && !paramsToStrip.includes(key)) {
      params.set(key, value);
    }
  });

  const filteredQueryString = [...params]
    .map(([key, value]) => `${key}=${value}`)
    .join("&");
  return filteredQueryString ? `${baseUrl}?${filteredQueryString}` : baseUrl;
}
