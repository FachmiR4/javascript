// DICE ROLLER
function rollDice(){
    const numOfDice = document.getElementById("numOfDice").value;
    const resultDice = document.getElementById("resultDice");
    const imagesDice = document.getElementById("imagesDice");
    const values = [];
    const images = [];


    for(let i = 0; i < numOfDice; i++){
        const numRand = Math.floor(Math.random() * 6) + 1;
        values.push(numRand);
        images.push(`<img src="dice_images/Dice-${numRand}.png" alt="Dice ${numRand}">`)
    }

    resultDice.textContent = `Dice: ${values.join(", ")}`;
    imagesDice.innerHTML = images.join('');
}