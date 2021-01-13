function somar (numero1: number, numero2: number): void {
    console.log("entrada:", numero1, "e", numero2)
    console.log ("a) Soma:", numero1 + numero2);
    console.log("b) Subtração:", numero1 - numero2);
    console.log("c) multiplicação:", numero1 * numero2);
     
    if(numero1 > numero2){
        console.log("d) maior:", numero1)
    }else{
        console.log("d) maior:", numero2)
    }
}
somar(10, 30)