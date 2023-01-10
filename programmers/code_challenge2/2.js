function solution(left, right) {
  var answer = 0;
  for (let i = left; i <= right; i++) {
    if (Number.isInteger(Math.sqrt(i))) {
      answer -= i;
    } else {
      answer += i;
    }
  }
  return answer;
}

//다른 사람 풀이
function solution(left, right) {
  let sum = ((left + right) / 2) * (right - left + 1);
  let l = Math.ceil(Math.sqrt(left));
  while (l ** 2 <= right) sum -= (l++) ** 2 * 2;
  return sum;
}
