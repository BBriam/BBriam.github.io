const plantilla_header = {
  template: `  <header class="header">
                  <div class="malla_3_header">
                    <div class="logo">
                    <a href="index.html"><img src="/static/img/astronauta_gamer_logo_titulo.jpg" alt="logo_header" class="logo_header"></a>
                    </div>
                    <div class="borde_buscar">
                      <form action="" class="container buscar">
                        <div class="row">
                          <div class="col-11">
                            <input type="text" class="form-control" id="validationCustom01" placeholder="buscar" required>
                          </div>
                          <div class="col-1">
                            <button type="submit" class="btn btn-primary mb-3"><i class="fa-solid fa-magnifying-glass"></i></button>
                          </div>
                        </div>
                      </form>
                    </div>
                    <nav class="navbar">
                      <div class="malla_4_nav">
                        <div class="tit_nav_a">Indumentaria
                          <div class="malla_1_nav_a">
                            <div class="borde_link_nav_item"><a class="link_nav" href="/camisas.html">Camisas</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/pantalones.html">Pantalones</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/zapatos.html">Zapatos</a></div>
                          </div>
                        </div>
                        <div class="tit_nav_b">Electronica
                          <div class="malla_1_nav_b">
                            <div class="borde_link_nav_item"><a class="link_nav" href="/tarjetas_graficas.html">GPU</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/procesadores.html">CPU</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/mouse.html">Mouse</a></div>
                          </div>
                        </div>
                        <div class="tit_nav_c">Accesorios
                          <div class="malla_1_nav_c">
                            <div class="borde_link_nav_item"><a class="link_nav" href="/sillas.html">Sillas</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/mochilas.html">Mochilas</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/fundas.html">Fundas</a></div>
                            <div class="borde_link_nav_item"><a class="link_nav" href="/headsets.html">Headsets</a></div>
                          </div>
                        </div>
                        <a class="tit_nav_d" href="/registro.html">Registrese</a>
                      </div>
                    </nav>
                  </div>
                </header>`
}

const pers_header = Vue.createApp({
  components : {
    'p_header': plantilla_header
  }
  }).mount("#header") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion

const plantilla_aside = {
  template: `
    <coingecko-coin-price-marquee-widget class="barra_cripto" coin-ids="bitcoin,litecoin,vechain,monero" currency="ars"
      locale="es">
    </coingecko-coin-price-marquee-widget>`
}

const pers_aside = Vue.createApp({
  components : {
    'p_aside': plantilla_aside
  }
  }).mount("#asid") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion

const plantilla_footer = {
  template: `
    <div class="malla_3_footer">
      <div class="contactos">
        CONTACTOS
        <br>
        <a href="mailto:contacto@gamerlandia.com">preguntas-sugerencias@gamerlandia.com</a>
        <br>
        <a href="mailto:rrhh@gamerlandia.com">rrhh@gamerlandia.com</a>
        <br>
        <a href="mailto:reclamos@gamerlandia.com">reclamos@gamerlandia.com</a>
      </div>
      <div class="infocompany">
        INFORMACION EMPRESARIAL
        <br>
        <a href="/politicas.html">Politicas</a>
        <br>
        <a href="/terminos.html">Terminos y condiciones</a>
        <br>
        <a href="/ubicaciones.html">Ubicaciones</a>
      </div>
      <div class="redes_soc">
        REDES SOCIALES
        <br>
        <a href="https://www.facebook.com/"><i class="fa-brands fa-square-facebook"></i> Facebook</a>
        <br>
        <a href="https://twitter.com/home"><i class="fa-brands fa-square-twitter"></i> Twitter</a>
        <br>
        <a href="https://www.instagram.com/"><i class="fa-brands fa-square-instagram"></i> Instagram</a>
      </div>
    </div>`
}

const pers_footer = Vue.createApp({
  components : {
    'p_footer': plantilla_footer
  }
  }).mount("#foot") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion





const { createApp } = Vue
createApp({
  data(){
    return{
      mensaje: "Ubicaciones",
    }
  }
}).mount("#app")


// -------------------------------area mains----------------------------------

const plantilla_main_index = {
  template: `
    <div class="marco_slider">
      <ul>
        <li>
          <img src="/static/img/productos/slide1/mas_nuevo_guantes_vr.png" alt="">
          <p>Los productos mas innovadores en un solo lugar</p>
        </li>
        <li>
          <img src="/static/img/productos/slide1/mas_vendidos_mouse.png" alt="">
          <p>Prueba nuestros productos mas actualizados</p>
        </li>
        <li>
          <img src="/static/img/productos/slide1/ofertas_pen_drive.png" alt="">
          <p>Hasta 50% de descuento, no te pierdas de nuestras mejores ofertas</p>
        </li>
      </ul>
    </div>
    <div class="subtitulo">
      <a href="/categorias.html">Categorias mas populares</a>
    </div>
    <div class="malla_3_cate">
      <div class="cat_item_gen">
        <img src="/static/img/productos/botones_categ/zapatos.png" alt="">
        <a href="/zapatos.html"><p> <br> <br> Zapatos</p></a>
      </div>
      <div class="cat_item_gen">
        <img src="/static/img/productos/botones_categ/mouse.png" alt="">
        <a href="/mouse.html"><p> <br> <br> Mouse</p></a>
      </div>
      <div class="cat_item_gen">
        <img src="/static/img/productos/botones_categ/gpu.png" alt="">
        <a href="/tarjetas_graficas.html"><p> <br> <br> GPU</p></a>
      </div>
    </div>`
}

const pers_main_index = Vue.createApp({
  components : {
    'p_main_index': plantilla_main_index
  }
  }).mount("#main_index") // ese es el id que le puse al div
// Las palabras "template" y "components" son parte de la programacion




// -------------------------------area funciones----------------------------------

let ruta_perfil = 'https://randomuser.me/api/?nat=es'//variable donde hacemos referencia al origen de los datos
let ruta_coment = 'https://jsonplaceholder.typicode.com/comments' //variable donde hacemos referencia al origen de los datos
fetch(ruta_perfil) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data1 => traer_nombre1(data1)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

fetch(ruta_perfil) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data1 => traer_nombre2(data1)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

fetch(ruta_coment) //solicitud a la url (promesa)
  .then(response => response.json()) //se resuelve la promesa, al obtener la respuesta la pasa a un determinado formato (json)
  .then(data2 => traer_comentario(data2)) //llamamos a la función mostrardata()
  .catch(error => console.log("Ocurrió un error", error)) // si hay un error será atrapado por catch

const traer_nombre1 = (data) => {
  let obj_nom = data["results"][0]["name"]
  let obj_img = data["results"][0]["picture"]["medium"]
  console.log(obj_img)
  let contenido = ''
  contenido += `
              <img src="${obj_img}" width="50px" height="50px" class="rounded-circle">
              <p class="nom_nom" >${obj_nom["first"]} ${obj_nom["last"]}</p>
              `
  document.getElementById("datos_perfil1").innerHTML = contenido
}

const traer_nombre2 = (data) => {
  let obj_nom = data["results"][0]["name"]
  let obj_img = data["results"][0]["picture"]["medium"]
  console.log(obj_img)
  let contenido = ''
  contenido += `
              <img src="${obj_img}" width="50px" height="50px" class="rounded-circle">
              <p class="nom_nom" >${obj_nom["first"]} ${obj_nom["last"]}</p>
              `
  document.getElementById("datos_perfil2").innerHTML = contenido
}

const traer_comentario = (data) => {
  let id1 = Math.floor(Math.random() * 500).toString()
  let id2 = Math.floor(Math.random() * 500).toString()
  let obj_com1 = data[id1]["body"]
  let obj_com2 = data[id2]["body"]
  let contenido1 = ''
  let contenido2 = ''
  contenido1 += `<p>${obj_com1}</p>`
  contenido2 += `<p>${obj_com2}</p>`
  document.getElementById("datos_comentario1").innerHTML = contenido1
  document.getElementById("datos_comentario2").innerHTML = contenido2
}