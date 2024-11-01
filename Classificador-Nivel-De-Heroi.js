let heroi = "Hasgard";
let xp = 9000;
let ranking;

switch (true) {
    case (xp <= 1000):
        ranking = "Ferro";
        break;
    case (xp > 1000 && xp <= 2000):
        ranking = "Bronze";
        break;
    case (xp > 2000 && xp <= 5000):
        ranking = "Prata";
        break;
    case (xp > 5000 && xp <= 7000):
        ranking = "Ouro";
        break;
    case (xp > 7000 && xp <= 8000):
        ranking = "Platina";
        break;
    case (xp > 8000 && xp <= 9000):
        ranking = "Ascendente";
        break;
    case (xp > 9000 && xp <= 10000): // Corrigido o valor de 1000 para 10000
        ranking = "Imortal";
        break;
    default:
        ranking = "Radiante";
}

console.log(`O Herói de nome ${heroi} está no nível de ${ranking}`);
