var firebasePass = firebase.database().ref().child("Pass/Text");
var player = 0;
var pCode ="" ;
var uName = "";
var pass1=0;
var pass=0;
var slot ="";
var firebaseRef = firebase.database().ref();
var provider = new firebase.auth.GoogleAuthProvider();

var pass=0;

function playerOne(){
  player = 1;
}
function playerTwo(){
  player = 2;
}
function playerThree(){
  player = 3;
}
function playerFour(){
  player = 4;
}
function playerFive(){
  player = 5;
}
function playerSix(){
  player = 6;
}
function playerSeven(){
  player = 7;
}
function playerEight(){
  player = 8;

  
}
function submitClick(){
  
  firebasePass.once('value').then(function(datasnapshot){
    pass=datasnapshot.val();
    pCode = document.getElementById("pCode").value;
    uName = document.getElementById("uName").value;
    if(uName!="" && player!=0){
      if(pCode == pass){
        firebaseRef = firebaseRef.child("Users/"+player+"/Name");
        firebaseRef.once( 'value', function(datasnapshot){
          slot= datasnapshot.val();
          if(slot!=uName && slot!=""){
            
            window.alert("Slot taken by: "+slot+". Redirecting you to login page.");
            window.location.href="index.html";
            

          }
          else{
            firebase.auth().signInWithPopup(provider).then(function(result) {
              // This gives you a Google Access Token. You can use it to access the Google API.
              var token = result.credential.accessToken;
              // The signed-in user info.
              var user = result.user;
              window.alert(user);
        
              // ...
            }).catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
              // The email of the user's account used.
              var email = error.email;
              // The firebase.auth.AuthCredential type that was used.
              var credential = error.credential;
              window.alert(error);
              // ...
            });
          
            /*firebase.auth().signInAnonymously();
            firebase.auth().setPersistence(firebase.auth.Auth.Persistence.SESSION)
            .then(function() {
              // Existing and future Auth states are now persisted in the current
              // session only. Closing the window would clear any existing state even
              // if a user forgets to sign out.
              // ...
              // New sign-in will be persisted with session persistence.
              
               firebase.auth().signInAnonymously();
            })
            .catch(function(error) {
              // Handle Errors here.
              var errorCode = error.code;
              var errorMessage = error.message;
            });
            firebase.auth().onAuthStateChanged(firebaseUser =>{
              console.log(firebaseUser);
              if (firebaseUser) {
                window.alert("logged in");
              } else {
                window.alert("logged out");
 
                              }
                              
              window.alert("You are Player: " + uName);
              slot = uName;
              firebaseRef.set(uName);
              window.location.href = "main.html";
              
            });*/
          
            
          }
          
        });
        
        }
      else{
        window.alert("Incorrect passcode");
      }
    }
    else if(pCode=""){
      window.alert("Incomplete fields");
    }
    else{
    window.alert("Incomplete fields");
    }
  });
}
function logOut(){
  
  firebase.auth().signOut();
  window.alert("log out");
  
}

  /* if (user) {
     // User is signed in.
     var isAnonymous = user.isAnonymous;
     var uid = user.uid;
     window.alert("logged in");
     // ...
   } else {
     // User is signed out.
     // ...
   } */
   // ...

  /*firebasePass.on('value', function(datasnapshot){
      pass= datasnapshot.val();
      pCode = document.getElementById("pCode").value;
      uName = document.getElementById("uName").value;
      if(uName!="" && player!=0){
        if(pCode == pass){
          window.alert("verifying");
          firebaseRef = firebaseRef.child("Users/"+player+"/Name");
          firebaseRef.on( 'value', function(datasnapshot){
            slot= datasnapshot.val();
            if(slot!= ""){
             
              window.alert("Slot taken by: "+slot+". Redirecting you to login page.");
              window.location.href="index.html";
              

            }
            else{
              window.alert("You are Player: " + uName);
              firebaseRef.set(uName);
              firebase.auth().signInAnonymously();
              firebase.auth().onAuthStateChanged(firebaseUser =>{
                console.log(firebaseUser);
                //window.location.href="main.html";
              });
            
              
            }
            
          });
          
          }
        else{
          window.alert("Incorrect passcode");
        }
      }
      else if(pCode=""){
        window.alert("Incomplete fields");
      }
      else{
      window.alert("Incomplete fields");
      }
  });*/ 


//Auth listener


//Click event listener


 
  //window.location.href="main.html";
  // Import Admin SDK
  
 
 /* 
      window.alert("Correct passcode");
      
      //window.location.href="main.html";
      firebase.auth().signInAnonymously().catch(function(error) {
        // Handle Errors here.
        var errorCode = error.code;
        var errorMessage = error.message;
        // ...
      });
      firebase.auth().onAuthStateChanged(function(user) {
        if (user) {
          // User is signed in.
          console.log(user);
          var isAnonymous = user.isAnonymous;
          var uid = user.uid;
          // ...
        } else {
          // User is signed out.
          // ...
        }
        // ...
      });

    }
    else if(pCode==""||uName==""){
      window.alert("Incomplete field/s");
    }
    else{
      window.alert("Wrong passcode");
    }
  }
    
}  */
  

  