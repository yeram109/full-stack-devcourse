//변수의 데이터 타입 명시
var stdId = 1111;
var stdName = "lee";
var age = 20;
var gender = "male";
var course = "Typescript";
var completed = false;
//열거형 : 사용자 정의 타입
var GenderType;
(function (GenderType) {
    GenderType["Male"] = "male";
    GenderType["Female"] = "female";
    GenderType["GenderNeutral"] = "neutral";
})(GenderType || (GenderType = {}));
var MyStudent = /** @class */ (function () {
    function MyStudent() {
        this.stdId = 91011;
        this.stdName = "park";
        this.age = 30;
        this.gender = GenderType.Male;
        this.course = "node.js";
        this.completed = true;
    }
    MyStudent.prototype.setName = function (name) {
        this.stdName = name;
        console.log("이름 설정: " + this.stdName);
    };
    return MyStudent;
}());
var myInstance = new MyStudent();
myInstance.setName("엘리스");
// function getInfo(id: number): Student {
//   return {
//     stdId: id,
//     stdName: "lee",
//     //age: 20,
//     gender: "female",
//     course: "javascript",
//     completed: true,
//   };
// }
var std = {
    stdId: 91011,
    stdName: "park",
    age: 30,
    gender: GenderType.Female,
    course: "node.js",
    completed: true,
};
function setInfo(student) {
    console.log(student);
}
//setInfo(std);
//console.log(getInfo(5678));
