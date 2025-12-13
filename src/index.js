// Função que classifica o nível do herói com base no XP
function classificarNivelHeroi(xp) {
    if (xp <= 1000) {
        return "Ferro";
    } else if (xp <= 1001 && xp <= 2000) {
        return "Bronze";
    } else if (xp <= 2001 && xp <= 5000) { 
        return "Prata";
    } else if (xp <= 5001 && xp <= 7000) {
        return "Ouro";
    } else if (xp <= 7001 && xp <= 8000) {
        return "Platina";
    } else if (xp <= 8001 && xp <= 9000) {
        return "Ascendente";
    } else if ( xp <= 9001 && xp <= 10000) {
        return "Imortal";
    } else if (xp > 10001) {
        return "Radiante";
    }
    return "Nível desconhecido";
    }
    
// Função que calcula o XP máximo para cada nível do herói
function calculadorDeXp(nivel) {
      switch (herois.nivel.toLowerCase()) {
        case "ferro":
     return 1000;
        case "bronze":
            return 2000;
        case "prata":
            return 5000;
         case "ouro":
            return 7000;
        case "platina":
           return 8000;
        case "ascendente":
            return  9000;
        case "imortal":
                return 10000;
        case "radiante":
            return 12000; // Valor hipotético para o nível Radiante
            default: 
               return 0;
      }    
    }
    // Lista de heróis com seus respectivos XP
    const herois = [
        { nome: "Yasmin", xp: 950 },
        { nome: "Lucas", xp: 1500 },
        { nome: "Ayla", xp: 4800 },
        { nome: "Eros", xp: 6800 },
        { nome: "Flora", xp: 7800 },
    ];
    // Laço para percorrer todos os heróis e exibir XP e nível
    for (let i = 0; i < herois.length; i++)  {
        const { nome, xp } = herois[i];
        const nivel = classificarNivelHeroi(xp);
        const xpMaximo = calculadorDeXp(nivel);

        console.log('Herói de nome:  + ${nome} +  está no nivel de  + ${nivel}, + com  + ${xp} +  XP.');

    }


    
   


                    
    

      





