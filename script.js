//function1
function average() {
    var num1 = 10;
    var num2 = 11;
    var num3 = 12;
    var num4 = 13;
    var num5 = 14;
    var num6 = 15;
    var num7 = 16;
    var num8 = 17;
    var num9 = 18;
    var num10 = 19;
    return (num1 + num2 + num3 + num4 + num5 + num6 + num7 + num8 + num9 + num10 ) / 10 ;
}
console.log(average());


// function2
function area() {
    var width = 10;         //طول القاعدة   
    var height = 20;        // طول الإرتفاع
    return 0.5 * (width * height);
}
console.log(area());


// function3
function age_on_days() {
    var years = 30;       //age on years
    return years * 12 * 30   // age on days
}
console.log(age_on_days())


// function4
function sum(){
    var x = 5;
    var y = 10;
    return x + y;
}
console.log(sum())


// function5
function names() {
    var names = ["Mohamed","Hassan","Abdo","Hosam","Eman","Amal","Samir","Waleed","Ashraf","Ahmed"]
    console.log(names[0]);
}
names()


// function6
function print_name(){
    var myName = "Mohamed Hassan Abdelaziz";
    document.getElementById("name").innerHTML = myName;
}
print_name()


// function7
function hours_to_sec() {
    var x = 10;     //hours
    return x * 3600;
}
console.log(hours_to_sec())


// function8
function sum_condition() {
    var num1 = 10;
    var num2 = 20;
    var num3 = 30;
    var num4 = 40;
    sum = num1 + num2 + num3 + num4;
    if (sum > 350) {
        document.getElementById("sumwithcondition").innerHTML = true;
    }
    else {
        document.getElementById("sumwithcondition").innerHTML = false;
    }
}
sum_condition()


// function9
function check_condition() {
    var num = 10;
    if (num = 0) {
        return true;
    }
    else {
        return false;
    }
}
console.log(check_condition())


// function10
function mod() {
    var x = 22;
    var y = 10;
    return x % y;
}
console.log(mod())


// function11
function compare(num1,num2) {
    if (num1 > num2) {
        return num1;
    }
    else if (num2 > num1) {
        return num2;
    }
    else {
        return "num1 = num2"
    }
}
console.log(compare(150,150))


// function12
function checktype(num){
if (isNaN(num)) {
    return "input not a number";
}
else {
    return "input is a number";
}
}
console.log(checktype(60))


// function13
function date() {
    var date = new Date();
    console.log(date)
}
date()
