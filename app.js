const nombre = document.getElementById("name")
const apellido = document.getElementById("lastname")
const dni = document.getElementById("dni")
const mail = document.getElementById("email")
const direccion = document.getElementById("address")
const cp = document.getElementById("postal")
const tel1 = document.getElementById("tel1")
const tel2 = document.getElementById("tel2")
const advertencia = document.getElementById("advertencias")
const formulario = document.getElementById("form")


formulario.addEventListener("submit", e=>{
  e.preventDefault()
  let adv = ""
  let regesxEmail = /^\w+([\.-]?\w+)*@\w+([\.-]?\w+)*(\.\w{2,4})+$/
  let regesxNumerico = /^[-+]?[0-9]+$/
  advertencia.innerHTML = ""
  let entrar = false
  if(nombre.value.length < 2){
    adv += `El nombre debe contener dos caracteres o mas. <br>`
    entrar = true
  }
  if(!regesxEmail.test(mail.value)){
    adv += `El email no es valido. <br>`
    entrar = true
  }
  if(apellido.value.length < 2){
    adv += `El apellido debe contener dos caracteres o mas. <br>`
    entrar = true
  }
  if(dni.value.length < 8){
    adv += `El dni debe contener al menos 8 numeros. <br>`
    entrar = true
  }
  if(!regesxNumerico.test(dni.value)){
    adv += `El dni debe contener solo numeros. <br>`
    entrar = true
  }
  if(direccion.value.length < 10){
    adv += `Ingrese la direccion completa. <br>`
    entrar = true
  }
  if(cp.value.length < 4){
    adv += `El codigo postal debe contener 4 digitos. <br>`
    entrar = true
  }
  if(cp.value.length > 4){
    adv += `El codigo postal debe contener 4 digitos. <br>`
    entrar = true
  }
  if(!regesxNumerico.test(cp.value)){
    adv += `El codigo postal debe contener solo numeros. <br>`
    entrar = true
  }
  if(tel1.value.length < 11){
    adv += `El telefono debe contener entre 11 y 13 digitos. <br>`
    entrar = true
  }
  if(tel1.value.length > 13){
    adv += `El telefono debe contener entre 11 y 13 digitos. <br>`
    entrar = true
  }
  if(tel2.value.length < 11){
    adv += `El telefono debe contener entre 11 y 13 digitos. <br>`
    entrar = true
  }
  if(tel2.value.length > 13){
    adv += `El telefono debe contener entre 11 y 13 digitos. <br>`
    entrar = true
  }

  console.log("entrar: ", entrar, "adv: ", adv)
  if(entrar){
    advertencia.innerHTML = adv
  }
  else{
    advertencia.innerHTML = "enviado"
  }
})