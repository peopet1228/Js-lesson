     //  (  1. 기초  )

//console.log("Hello World");  // 실행 방법 crtl+shift+~ node index.js 

//let a = 10 ;  // let 변수 선언
//console.log(a);

     //  (  2. 백틱  )

//let a = 10;
//console.log(`a의 값은 ${a} 입니다.`);  //백틱 문자열 `` 자바 스트링 같은 느낌
                                     //${} 변수 출력 가능
//let a = "범진 선배";
//console.log(`그 사람은 ${a} 입니다.`);

     //  (  3. 배열  )

//let arr = [];  //JS 배열은 []로 선언 가능 
//arr.push(1)    //JS 배열은 한 배열에 타입 상관없이 아무거나 들감
//arr.push("현구선배")

//console.log(`arr: ${arr}`);

//let arr = [1,2,3,4,5,6];
//console.log(arr);

     //  (  4. 객체  ☆중요 )
     //기본적으로 객체 생성은 {}로 할 수 있다
//let person = {};  //빈 객체 생성
//person.name = "박종연";
//person.age = 18;  //객체에 값 추가
//console.log(person);

//객체도 배열처럼 {}안에 '키: 값' 형태로 직접 값을 넣어서 초기화할 수 있다.
//let person = {
//    name: "이기철",
//    age: 18
//};
//console.log(person);

     //  (  5. if문  )

//let a = 1;
//let b = "1";

//if(a == b) {    //값만 검사
//    console.log(`a와 b는 값다`);
//}

//if(a === b) {   //값과 타입까지 검사
//    console.log(`a와 b는 값과 타입이 같다.`);
//}

     //  (  6. for문  )

//let arr = [1,2,3,4,5]

//for(let i = 0; i < arr.length; i++) {
//    console.log(arr[i]);
//}

// 위에꺼 간소화

     //  (  6-1. for in문  )

let arr = [1,2,3,4,5]

for(let i in arr) {
    console.log(arr[i]);
}

// ???: ㅇㄷㅇ....ㅇㄷㅇ..