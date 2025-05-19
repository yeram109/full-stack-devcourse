const obj1 = {}
const obj2 = { message : "안 빔"}
const num = 1
const str1 = "one"
const str2 = ""  // 문자열도 객체입니다!!

console.log(isEmpty(obj1))  // length === 0
console.log(isEmpty(obj2))  // length === 1

//console.log(Object.keys(num).length === 0)
console.log(isEmpty(str1))
console.log(isEmpty(str2))

function isEmpty(obj) {
    if (obj.constructor === Object)  // 객체인지?
        console.log("객체입니다!")

    if (Object.keys(obj).length === 0) {
        return true;
    } else {
        return false;
    }
}