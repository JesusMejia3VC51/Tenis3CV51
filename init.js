console.log("JS")

 // Your web app's Firebase configuration
 
  var firebaseConfig = {
    apiKey: "AIzaSyAy4CAbdCuLmCJKKTmpvyQ2xRc9QIe_ito",
    authDomain: "snkrs3cv51.firebaseapp.com",
    projectId: "snkrs3cv51",
    storageBucket: "snkrs3cv51.appspot.com",
    messagingSenderId: "618283457035",
    appId: "1:618283457035:web:428d4d5b6782de399b850e"
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  var db = firebase.firestore();

 let arregloUsuarios = [];
  db.collection("usuarios").get().then((querySnapshot) => {
    querySnapshot.forEach((doc) => {

      var obj = doc.data()
        obj.id = doc.id;
        arregloUsuarios.push(obj);
    });
});
  
  console.log(arregloUsuarios)

  function leerDatosUsuario(){
    var id = document.getElementById("usuarioaEliminar").value

    var docRef = db.collection("usuarios").doc(id);

docRef.get().then(function(doc) {
    if (doc.exists) {
        console.log("Document data:", doc.data());
    } else {
        // doc.data() will be undefined in this case
        console.log("No such document!");
    }
}).catch(function(error) {
    console.log("Error getting document:", error);
});
}


  function agregarDatos(){
    var email = document.getElementById("emailNuevoUsuario").value
    var nombre = document.getElementById("nombreNuevoUsuario").value
    var password= document.getElementById("contraseniaNuevoUsuario").value

    if (email == "" || email == null || password == "" || password == null) {
      alert("Llena los campos por favor")
    }else{
        db.collection("usuarios").add({

    Email: email,
    Contrasenia: password,
    Nombre: nombre
})
.then(function(docRef) {
    alert("El usuario se agrego correctamente")
})
.catch(function(error) {
    console.error("Error adding document: ", error);
});

    }
  }
  function registrarse() {
    var email = document.getElementById("emailNuevoUsuario").value
    var password= document.getElementById("contraseniaNuevoUsuario").value
      if (email == "" || email == null || password == "" || password == null) {
        alert("Llena los campos por favor")
      } else {
        console.log("Entro a funcion registrarse")
        console.log("El correo que se va a registrar es:" + email)
        console.log("El password que se va a registrar es:" + password)
        firebase.auth().createUserWithEmailAndPassword(email, password).then((user) => {
          console.log(user)
          alert("Tu cuenta se creo correctamente")
          window.location.href = "index.html"
        }).catch((error) => {
          var errorCode = error.code;
          var errorMessage = error.message;
          alert(errorMessage)
          // ..
        });
      }
    }


function borrarDatosUsuarios(){
  var id = document.getElementById("usuarioaEliminar").value
  db.collection("usuarios").doc(id).delete().then(function() {
    alert("Tu usuario se elimino correctamente")
}).catch(function(error) {
    console.error("Error removing document: ", error);
});
}


function editarUsuario(){
  var id = document.getElementById("usuarioaEliminar").value
  var email = document.getElementById("emailNuevoUsuario").value
  var nombre = document.getElementById("nombreNuevoUsuario").value
  var password= document.getElementById("contraseniaNuevoUsuario").value
  var usuarioAeditar = db.collection("usuarios").doc(id);

// Set the "capital" field of the city 'DC'
return usuarioAeditar.update({
    "Nombre": nombre,
    "Contrasenia":password,
    "Email":email
})
.then(function() {
    console.log("Document successfully updated!");
})
.catch(function(error) {
    // The document probably doesn't exist.
    console.error("Error updating document: ", error);
});

}
