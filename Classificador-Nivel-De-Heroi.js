let heroi="Hasgard"
let xp = 12345
let ranking
if(xp<=1000){
ranking = "Ferro"
}
else if(xp>1000 &&xp<=2000){
ranking = "Bronze"
}
else if(xp >2000 && xp<=5000){
ranking = "Prata"
}
else if (xp>5000 && xp<=7000){
ranking = "Ouro"
}
else if (xp>7000 && xp<=8000){
    ranking = "Platina"
}
else if (xp>8000 && xp<=9000){
    ranking = "Ascendente"
}
else if (xp>9000 && xp<=1000){
    ranking="Imortal"
}
else{
    ranking="Radiante"
}
console.log(`O Herói de nome ${heroi} está no nível de ${ranking}`)