let time = 25

if (time<11) {
    console.log('Good morning');
} else if (time<17) {
    console.log('Good afternoon');
} else if (time<22) {
    console.log('Good evening');
} else if (time<=24) {
    console.log('Good night');
} else {
    console.log('Sorry, I think you got the time wrong');
}

let sweets=6;

switch(sweets) {
    case 1:
    case 2:
        console.log('It is fine');
        break;
    case 3:
    case 4:
    console.log('It is enough for today');
    break;
    case sweets>5:
        console.log('wow');
        break;
    default:
    console.log('That is too much');     
}