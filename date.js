var today = new Date();

var minute = today.getMinutes();
var date = today.getDate();
var month = today.getMonth();
month += 1;
var year = today.getFullYear();
var dayList = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
var day = today.getDay();
function getNickname() {
    switch (day) {
        case 0:
            return "Chillday";
        case 1:
            return "Blah";
        case 2:
            return "Brewsday";
        case 3:
            return "Wine";
        case 4:
            return "Thirsty";
        case 5:
            return "Fun";
        case 6:
            return "Slip-n-Slide"; 
        default:
            return "Whatever";
    }
}
var nickName = getNickname();

document.write("<p>", month, "/", date, "/", year, "</p>");
document.write("<p>", "Today is ", nickName, " ", dayList[day], "</p>");