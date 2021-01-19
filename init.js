(function(){
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

   btnSignUp.addEventListenner('click', e => {
   	const email = txtEmail.value;
   	const pass = txtPassword.value;
   	const auth = firebase.auth();

   	const promise = auth.createUserWithEmailAndPassword(email, pass);
   	promise.catch(e => console.log(e.message));
   });

}()); 
