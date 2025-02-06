/*
 Expand the braces of the specified string. See https://en.wikipedia.org/wiki/Bash_(Unix_shell)#Brace_expansion

 In the input string, balanced pairs of braces containing comma-separated substrings represent alternations that specify multiple alternatives which are to appear at that position in the output.

@param {string} str
@return {Array.<string>}
NOTE: The order of output string does not matter.

Example:

"~/{Downloads,Pictures}/*.{jpg,gif,png}" -> [ "~/Downloads/*.jpg"
                                            , "~/Downloads/*.gif"
                                            , "~/Downloads/*.png"
                                            , "~/Pictures/*.jpg"
                                            , "~/Pictures/*.gif"
                                            , "~/Pictures/*.png"
                                            ]
"It{{em,alic}iz,erat}e{d,}, please." -> [ "Itemized, please."
                                        , "Itemize, please."
                                        , "Italicized, please."
                                        , "Italicize, please."
                                        , "Iterated, please."
                                        , "Iterate, please."
                                        ]
"thumbnail.{png,jp{e,}g}" -> [ "thumbnail.png"
                             , "thumbnail.jpeg"
                             , "thumbnail.jpg"
                             ]
"nothing to do" -> [ "nothing to do" ]
(c)RSS
*/

function expandBraces(str) {
  function helper(s) {
    const results = [];
    const first = s.indexOf("{");
    if (first === -1) return [s];
    let stack = 0,
      end = -1;
    for (let i = first; i < s.length; i++) {
      if (s[i] === "{") stack++;
      else if (s[i] === "}") {
        stack--;
        if (stack === 0) {
          end = i;
          break;
        }
      }
    }
    if (end === -1) return [s];
    const before = s.slice(0, first);
    const after = s.slice(end + 1);
    const content = s.slice(first + 1, end);
    let parts = [];
    let part = "";
    let level = 0;
    for (let i = 0; i < content.length; i++) {
      const ch = content[i];
      if (ch === "{") {
        level++;
        part += ch;
      } else if (ch === "}") {
        level--;
        part += ch;
      } else if (ch === "," && level === 0) {
        parts.push(part);
        part = "";
      } else {
        part += ch;
      }
    }
    parts.push(part);
    for (let alt of parts) {
      const expandedAlts = helper(alt);
      for (let expAlt of expandedAlts) {
        const combined = before + expAlt + after;
        const further = helper(combined);
        for (let f of further) results.push(f);
      }
    }
    return results;
  }
  return helper(str);
}
