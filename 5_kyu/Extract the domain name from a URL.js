// Extract the domain name from a URL

/*
Write a function that when given a URL as a string, parses out just the domain name and returns it as a string. For example:

* url = "http://github.com/carbonfive/raygun" -> domain name = "github"
* url = "http://www.zombie-bites.com"         -> domain name = "zombie-bites"
* url = "https://www.cnet.com"                -> domain name = cnet"
*/

function domainName(url) {
    let domain = url;
    
    if (domain.indexOf("://") > -1) {
      domain = domain.split('/')[2];
    } else {
      domain = domain.split('/')[0];
    }
    
    if (domain.indexOf("www.") > -1) {
      domain = domain.split('www.')[1];
    }
    
    domain = domain.split(':')[0];
    domain = domain.split('.')[0];
    
    return domain;
  }