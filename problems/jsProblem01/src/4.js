/*
  아래와 같이 출력되도록 class 문법으로 작성해보세요.
  node 4.js 로 실행

  출력
  현대차이고 노란색입니다.
  기아차이고 빨간색입니다.
*/

class Car {
  constractor (name, color) {
    this.name = name;
    this.color = color;
  }

  move() {
    Car.prototype.move = function() {
    console.log(this.name+"이고 " + this.color+"입니다.")
  }

  var a = new Car("현대", "노란");
  a.move();

  move() {
    Car.prototype.move = function() {
    console.log(this.name+"이고 " + this.color+"입니다.")
  }
  }
  var b = new Car("기아", "빨간");
  b.move();

