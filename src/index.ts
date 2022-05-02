let base: number = Number(dato1.value);
let altura: number = Number(dato2.value);

base = document.getElementById("dato1");
altura = document.getElementById("dato2");

btncalcular.addEventListener("click", () => {
  // TU CODIGO VA AQUI, POR EJEMPLO:
  console.log("el resultado es ", base.value * altura.value);
  //}
});
