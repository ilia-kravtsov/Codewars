function change(s, prog, version) {
  const phoneRegex = /^\+1-\d{3}-\d{3}-\d{4}$/;
  const versionRegex = /^\d+\.\d+$/;
​
  let phoneMatch = s.match(/Phone:\s*(.*)/);
  let versionMatch = s.match(/Version:\s*(.*)/);
​
  if (!phoneMatch || !versionMatch) return "ERROR: VERSION or PHONE";
​
  let phone = phoneMatch[1].trim();
  let ver = versionMatch[1].trim();
​
  if (!phoneRegex.test(phone) || !versionRegex.test(ver))
    return "ERROR: VERSION or PHONE";
​
  if (ver !== "2.0") ver = version;
​
  return `Program: ${prog} Author: g964 Phone: +1-503-555-0090 Date: 2019-01-01 Version: ${ver}`;
}