var StringBuffer = require("./src/util/StringBuffer");

//Create
var stringBuffer = new StringBuffer();

stringBuffer.append("hello String");
stringBuffer.append("when we append no strings are created, only buffer appended in memory");

stringBuffer.append(332); //Numbers too. append them as string

stringBuffer.append(true); //Boolean append as string, "true" or "false"

stringBuffer.append({dd:34, hh:"hello"}); //Objects will be append as JSON strings of them.
stringBuffer.append(3.225);
//Print
console.log(stringBuffer.toString()); // toString() will get us the buffer as string.
////Above Log Prints:
////hello Stringwhen we append no strings are created, only buffer appended in memory332true{"dd":34, "hh":"hello"}
var stringBuffer1 = new StringBuffer();
stringBuffer1.append(332); //Numbers too. append them as string

stringBuffer1.append(true); //Boolean append as string, "true" or "false"
console.log(stringBuffer1.toString()); // toString() will get us the buffer as string.
stringBuffer.append("yoyo");
console.log(stringBuffer.toString());