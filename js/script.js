//task 

let week =["Понидельник","вторник","среда","четверг","пятница","суббота"]
let date = new Date()
let day = date.getDay()

//1
currentDay = week[day - 1]
console.log(currentDay);

//2
switch (day) {
    case 1 || 2 || 3 || 4 || 5 || 6:
        console.log(week[day - 1]);
        break;    
    default:
        console.log(week[day - 1]);
        break;
}

//3
if(day === 1 || 2 || 3 || 4 || 5 || 6){
    console.log(week[day - 1]);
}else{
    console.log(week[day - 1]);
}
//4 
currentDay = week.filter(item => week.indexOf(item) == day - 1).toString()
console.log(currentDay);