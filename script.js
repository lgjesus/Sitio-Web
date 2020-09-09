function myFunction(imgs) {
  var expandImg = document.getElementById("expandedImg");
  var imgText = document.getElementById("imgtext");
  expandImg.src = imgs.src;
  imgText.innerHTML = imgs.alt;
  expandImg.parentElement.style.display = "block";
}

function jugar_ahora() {
  var max = 10;
  var min = 1;
  var cant_intentos = 3;
  var acerto = false;
  var numero_aleatorio = Math.round(Math.random() * (max - min) + min);
  var numero;

  var nombre = document.getElementById("nombre").value;

  if (nombre == "") {
    alert("Por favor, ingrese su  nombre para JUGAR");
  } else {
    while (cant_intentos > 0 && acerto != true) {
      cant_intentos--;
      numero = parseInt(prompt("Ingrese el número"));
      if (numero == numero_aleatorio) {
        alert("EUREKA!!");
        acerto = true;
      } else if (numero < numero_aleatorio) {
        alert("PISTA: es mayor");
      } else if (numero > numero_aleatorio) {
        alert("PISTA: es menor");
      } else {
        alert("Le quedan " + cant_intentos + " intentos");
      }
    }

    var dato;
    switch (numero_aleatorio) {
      case 1:
        dato =
          " Sus cuadros bélicos curiosamente no transmiten una emotividad bélica, ni mucho menos sufrimiento; más parecen ser una serie de valiosas postales. Cándido López parecía intentar evadir el sufrimiento pintando curiosas escenas en las que a veces su mirada buscaba reposar en el paisaje natural, impasible y neutro donde la tragedia ocurre.";
        break;
      case 2:
        dato =
          " La pintura de esa guerra es dantesca, al retratar movimientos de masas abigarradas bajo paisajes serenos y en ciertos casos de ensueño, como por ejemplo en Empedrado, entre los bellos palmares de Yatay, o bajo un arrebolado cielo -tal cual ocurre en el cuadro llamado Invernada del ejército oriental.";
        break;
      case 3:
        dato =
          " Aunque la temática principal de Cándido López en muchos puntos coincide con la de Francisco de Goya el tratamiento es completamente distinto, lo representado es completamente distinto; López quizás ha preterido omitido lo nefando de la guerra, y para hacerlo se ha ensimismado en un detallismo y una coloratura que paradójicamente ha desembocado en imágenes idealizadas con una fuerza y una mirada ingenuas.";
        break;
      case 4:
        dato =
          " Aunque inicialmente utilizó una perspectiva triangular próxima al suelo y a la escena, luego cambió a otra, que se volvería llamativa característica: la de los puntos de vista muy elevados que alejan aún más la profundidad de las perspectivas, transportando la mirada hacia distantes horizontes donde la guerra se difumina y parece quedar anonadada.";
        break;
      case 5:
        dato =
          " López perdió el brazo derecho, reeducó el izquierdo y llevó parte de esos bocetos al lienzo";
        break;
      case 6:
        dato =
          " Cuando estalló la Guerra de la Triple Alianza planeaba un viaje a Europa para perfeccionar su arte, pero decidió enrolarse en el ejército para luchar en la guerra";
        break;
      case 7:
        dato =
          " Debido a que la daguerrotipia exigía una extremada composición y planeamiento previo de la imagen, fue en ese período que comenzó a iniciarse en el trabajo de esbozos que le llevarían gradualmente a dedicarse a la pintura. ";
        break;
      case 8:
        dato =
          " Parece haber sido su principal intención documentar escenas de la guerra, no todas, sino determinados momentos épicos, aunque sin ninguna grandilocuencia y ningún patrioterismo. Trató de ser neutral desde la perspectiva de los aliados, y parece haberlo intentado sinceramente.";
        break;
      case 9:
        dato =
          " Es una película documental que destaca las consecuencias de la Guerra de la Triple Alianza entre Brasil, Uruguay y Argentina contra Paraguay, usando como guía los cuadros pintados por Cándido López.";
        break;
      case 10:
        dato =
          " La obra de Cándido López tiene en lo formal mucho en común con la obra del douanier Rousseau; Cándido López se incluye en la naivité (ingenuidad) y allí encontramos su curioso valor.";
        break;
      default:
        "";
    }

    var imagen;
      switch (numero_aleatorio) {
        case 1:
          imagen = "imagenes/choices/ch1.jpg";
          break;
        case 2:
          imagen = "imagenes/choices/ch2.jpg"
          break;
        case 3:
          imagen = "imagenes/choices/ch3.jpg"
          break;
        case 4:
          imagen = "imagenes/choices/ch4.jpg"
          break;
        case 5:
          imagen = "imagenes/choices/ch5.jpg"
          break;
        case 6:
          imagen = "imagenes/choices/ch6.jpg"
          break;
        case 7:
          imagen = "imagenes/choices/ch7.jpg"
          break;
        case 8:
          imagen = "imagenes/choices/ch8.jpg"
          break;
        case 9:
          imagen = "imagenes/choices/ch9.jpg"
          break;
        case 10:
          imagen = "imagenes/choices/ch10.jpg"
          break;
        default:
          "";
      }

    document.getElementById("rdo").innerHTML =
      "El número era: <strong>" + numero_aleatorio + "</strong>";
    document.getElementById("triv").innerHTML = "Trivia:" + " " + dato;
    document.getElementById("imag").innerHTML = '<img src="' + imagen + '"/>';
  }
}

function validar() {
  var txtNombre = document.getElementById("txtNombre");
  if (txtNombre.value === "") {
    alert("Ingrese Nombre");
    txtNombre.style = "background-color:red";
    return;
  } else {
    txtNombre.style = "background-color:white";
  }
  var txtApellido = document.getElementById("txtApellido");
  if (txtApellido.value === "") {
    alert("Ingrese Apellido");
    txtApellido.style = "background-color:red";
    return;
  } else {
    txtApellido.style = "background-color:white";
  }
  var areaCom = document.getElementById("areaCom");
  if (areaCom.value === "") {
    alert("Nos interesa su opinión");
    areaCom.style = "background-color:red";
    return;
  } else {
    areaCom.style = "background-color:white";
  }
  var txtEmail = document.getElementById("txtEmail");
  if (txtEmail.value === "" || !txtEmail.value.includes("@")) {
    alert("Ingrese E-mail");
    txtEmail.style = "background-color:red";
    return;
  } else {
    alert("Suscripción Exitosa");
  }
}
