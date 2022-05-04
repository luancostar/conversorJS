let distanceInLY = prompt("Digite a distância em anos luz")
let chosenOption = prompt("Para qual unidade deseja converter? \n1. Parsec(pc) \n2. Unidade Astronômica"+
                "\n3. Quilômetros (km) \n\n(Digite o número da opção desejada")

let chosenUnity
let covertedDistance

switch (chosenOption) {
    case "1":
        chosenUnity = "Parsec"
        covertedDistance = distanceInLY * 0.306601
        break
    case "2":
        chosenUnity = "Unidade Astronômica"
        covertedDistance = distanceInLY * 63241.1    
        break
    case "3":
        chosenUnity = "Quilômetros"
        covertedDistance = distanceInLY * 9.5 * Math.pow(10,12)
        break
    default:
        chosenUnity = "Unidade não identificada"
        covertedDistance = "Conversão fora do escopo"
}
alert("Distância em anos luz: " +distanceInLY + "\n" + chosenUnity + ": "+ covertedDistance)