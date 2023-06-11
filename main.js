function palindrome(str) {
  let strArr = str.toLowerCase().split("");
  let anRegex = /[a-z0-9]/i;
  for (let i = 0; i < strArr.length; i++) {
    if (!(anRegex.test(strArr[i]))) {
      strArr.splice(i, 1);
      i--;
    }
  }
  let count = strArr.length - 1;
  for (let i = 0; i < strArr.length; i++) {
    if (strArr[i] !== strArr[count]) {
      return false;
    }
    count --;
  }
  return true;
}
