Given a list of strings, the goal is to group all strings together which are the same under some caesar shift.

For example if we apply caesar 5 "haskell" the result would be "mfxpjqq". Similarly caesar 17 "haskell" = "yrjbvcc".

Then caesarSort ["mfxpjqq","yrjbvcc"] = [["mfxpjqq","yrjbvcc"]] as caesar 21 "mfxpjqq" = "haskell" and caesar 9 "yrjbvcc" = "haskell".

The input will be a list of lower case strings (letters from a to z). The order of the output does not matter.

Some more examples

caesarSort(["a","b"]) === [["a","b"]]
caesarSort(["ab","ac"]) === [["ab"],["ac"]]
caesarSort(["za","yz"]) === [["za","yz"]]
caesarSort(["ab","zz","bc"]) === [["ab","bc"],["zz"]]