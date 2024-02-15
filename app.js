//trabajo actividada maquina de monedas //
const A = 270
const B = 340
const C = 390

let vuelto = 0


let   menu = Number(prompt("----menu----\n Product 1 \n Product 2\n Product 3"))

switch (menu){
    case 1:
        let pago = 0
        while (pago <A){
           let monedas = Number(prompt(" Ingrese las monedas -100-50-10- "))
           if (monedas === 100 || monedas === 10 || monedas === 50){
            pago += 1
           }
           else{
                confirm("Solo de Monedas de $100-$50-$10")
           }
               console.log(pago)
               let vuelto = pago - A
               if (vuelto > 0){
                    confirm("Vuelto")
               }

        } 
        break;
        
    case 2:
        console.log("Product 2")
        break;
    case 3:
        console.log("Product 3")
        break;
    default: "Product not found"
        console.log("Product not found")
        break;
}