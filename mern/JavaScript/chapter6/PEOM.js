function dice() {
    const guess = prompt("Lets play dice roll");
    const ran = Math.floor(Math.random() * 6) + 1;
    console.log(ran);
}
dice()