// Code your solutions in this file
const dgm = ["Allen", "Lenalee", "Kanda"];

const end = []
function writeCards(dgm, event) {
    for (let x=0; x<dgm.length; x++) {
        end.push(`Thank you, ${dgm[x]}, for the wonderful ${event} gift!`);
    }
    return end;
}
function countDown() {
    let countDown = 10;
    while (countDown > -1) {
        console.log(countDown--)
    }
    
}