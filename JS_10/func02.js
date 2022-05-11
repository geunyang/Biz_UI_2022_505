// 변수선언
// 선언과 동시에 값 지정, 선언과 동시에 초기화
const num1 = 10;
//num1 = 30 : const 로 선언한 변수에는 다시 값을 저장할 수 없다

// 선언과 동시에 값 지정 또는 선언 후 값 지정
// 선언과 초기화 동시에 하지 않아야됨
let num2;
num2 = 100; //이후에 값을 다시 저장(변경)
num2 = 200;

// 함수 선언
// 매개변수로 num1 을 갖는 func1 이라는 이름의 함수 선언
// 함수의 코드를 실행하려면 이후에 호출해 주어야 한다
function func1(num1) {
  console.log(num1);
}
// 값을 전달하지 않아도 오류 발생하지 않음
func1();
func1(100);
// 두개의 매개변수를 받는 add 함수 선언
// 이 함수는 두개의 매개변수 값을 덧셈하여 return 한다
function add(num1, num2) {
  return num1 + num2;
}
const result1 = add(100, 200);
console.log(result1);

// 타입 상관없이 연산 ㄱ
const str = add("Korea", "대한민국");
console.log(str);
