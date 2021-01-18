(function(){
const config = {
    apiKey: "AIzaSyCRyqyQBbsLDb2x4sCLTe4FF8P5mCBAm7A",
    authDomain: "tenis3cv51.firebaseapp.com",
    projectId: "tenis3cv51",
    storageBucket: "tenis3cv51.appspot.com",
    messagingSenderId: "366627943996",
    appId: "1:366627943996:web:5c0e7c69f4e0f5c87ef539"
  };
  firebase.initializeApp(config);
   
   const txtEmail = document.getElementById('txtEmail')
   const txtPassword = document.getElementById('txtPassword')
   const btnLogin = document.getElementById('btnLogin')
   const btnSignUp = document.getElementById('btnSignUp')
   const btnLogout = document.getElementById('btnLogout')

   btnLogin.addEventListenner('click', e => {
   	const email = txtEmail.value;
   	const pass = txtPassword.value;
   	const auth = firebase.auth();

   	const promise = auth.signInWithEmailAndPassword(email, pass);
   	promise.catch(e => console.log(e.message));


   });

}()); 
   
