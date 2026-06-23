Description
Here are five boxes, each of them is not the same weight(a,b,c,d,e). We don't know their weight, but we know the weight of every two boxes,such as a+b,c+d,a+c,etc... Their order is chaotic, we don't know which one is b+c or a+e or c+d...

Hint: Some things can be inferred, for example: the total weight of the lightest two boxes must be the minimum value of the array. In the same way, the total weight of the heaviest two boxes must be the maximum value of the array.

Please find out what is the weight of the heaviest box. This does not require sophisticated programming skills, only need to think carefully ;-)

Task
Complete function heaviestBox() that accepts a argument weightOfEachTwoBoxes. It's a list of the weight of each two boxes.

You need to calculate the weight of the heaviest box and return an integer value.

Examples
heaviestBox([113,116,110,117,112,118,114,121,120,115]) === 62
heaviestBox([143,158,123,115,108,171,151,143,136,128]) === 93
heaviestBox([156,147,119,135,180,152,123,168,140,164]) === 96