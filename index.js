let nickname = "folkcobra"
let Xp = 7000
let lvl

if(Xp < 1000 ){lvl = "ferro"}
else if(Xp >= 1001 && Xp <= 2000){lvl = "bronze"}
else if(Xp >= 2001 && Xp <= 5000){lvl = "prata"}
else if(Xp >= 5001 && Xp <= 7000){lvl = "ouro"}
else if(Xp >= 7001 && Xp <= 8000){lvl = "platina"}
else if(Xp >= 8001 && Xp <= 9000){lvl = "ascendente"}
else if(Xp > 10001){lvl = "radiante"}

console.log( "o jogador " + nickname + " está no nível de " + lvl)
