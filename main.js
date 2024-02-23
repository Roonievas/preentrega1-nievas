let nombreUsuario = prompt(" Por favor ingrese su nombre ")
let edad = prompt("Te damos la bienvenida" + " " + nombreUsuario + " indica tu edad.")

if (edad >= 18) {
    alert("Usted puede solicitar un préstamo en nuestro banco")
    console.log("Usted puede solicitar un préstamo en nuestro banco")
    let montoPrestamo = parseFloat(prompt("Ingrese el monto del préstamo:"));
    CalcularPrestamo(montoPrestamo)



} else {
    alert("No puede solcitar un préstamo en nuestro banco, debe ser mayor de edad.")
    console.log("No puede solcitar un préstamo en nuestro banco, debe ser mayor de edad.")
}




function CalcularPrestamo(montoPrestamo) {

    let interes = 5
    for (let i = 1; i < 13; i++) {
        let total_a_pagar = (montoPrestamo * interes) + montoPrestamo
        let resultado = i * total_a_pagar


        console.log(" Cuota número " + " " + i + " " + "$" + resultado)
        alert(" Cuota número " + " " + i + " " + "$" + resultado)


    }
    

}
