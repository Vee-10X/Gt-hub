let score = Number(prompt("Please enter your score"));

if (score>=0 && score<=29) {
 alert ("Your grade is: F")
}
else if (score>=30 && score<=40) {
 alert ("Your grade is: E")
}
else if (score>=41 && score<=50) {
 alert ("Your grade is: D")
}
else if (score>=51 && score<=60) {
 alert ("Your grade is: C")
}
else if (score>=61 && score<=80) {
 alert ("Your grade is: B")
}
else if (score>=0 && score<=29) {
 alert ("Your grade is: A")
}
else {
 alert ("Please enter a score between 0 an 100")
}