// 2단 부터 9단까지 구구단을 출력하세요.

// 출력
/*
2x1=2
2x2=4
2x3=6
2x4=8
2x5=10
2x6=12
2x7=14
2x8=16
2x9=18

3x1=3
3x2=6
3x3=9
3x4=12
3x5=15
3x6=18
3x7=21
3x8=24
3x9=27

9단까지
*/

for (var i = 2; i <= 9; i++) {
  // 아래를 완성하세요.
  for (var j = 1; j <= 9; j++) {
    document.write(i + "x" + j + "=" + i * j);
    document.write("<br>");
  }
  document.Write("<br>");
}
