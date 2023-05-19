
const minuscule=["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z","a","b","c","d"];
const majuscule=["A","B","C","D","E","F","G","H","I","J","K","L","M","N","O","P","Q","R","S","T","U","V","W","X","Y","Z","A","B","C","D"];
const specialCharacters=["!","@","#","$","%","&","!","@","#","$","%","&","!","@","#","$","%","&","!","@","#","$","%","&","!","@","#","$","%","&"];
const numericCharacters=["0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9","0","1","2","3","4","5","6","7","8","9"];
let vectSetout1=[0,0,0,0,];
let maxVectout1=3;
let minVectout1=0;

wantminuscule="hello";
wantmjususcule="hello";
numCharacters="hello";
wantmajuscule="hello";
wantspecialCharacters="hello";
wantnumericCharacters="hello";
dummy="hello";
let Jmax=2;
let jStart=0;
while (jStart<Jmax)  {

        
        var numCharacters = prompt("Please enter an interger number of character desired:", "");      
        var numCharacters = Math.round (numCharacters);
     

                if (numCharacters<8) {
                    numCharacters=8;
                    console.log ("new numCharacters: ", numCharacters);
                }   else if (numCharacters>128) {
                        numCharacters=128;
                        console.log ("new numCharacters: ", numCharacters);
                    }
                      
                if (Number.isNaN(numCharacters)) {
                    console.log("Enter an interger value 123"); 
                    jStart=0;             
                }   else {
                         console.log("It is a number entered");   
                         jStart=Jmax;    
                   }
                        
           
}
var numCharacters = prompt("The total number of characters for the password is :", numCharacters);
        
                    
    let numColdesire=2;  //at least 2 conditions of minuscule, majuscule, number, special character.
    let numCol=0;             

    while (numCol<numColdesire)  {
          
        for (let i=0; i<=maxVectout1;) {    // re-initalialize numCol, vectSetout1[i].
            vectSetout1[i]=0;
            i++;
        }
                var wantminuscule = prompt("Please choose At Least Two Sets of the following: minuscule, majuscule, number, special character; do you want some MINUSCULES : Enter y for yes and else is for no.", "");
                
                if (wantminuscule=="y") {
                    vectSetout1[0]=1;
                } else {
                vectSetout1[0]=0;
                }
                
            
                var wantmajuscule = prompt("Please choose At Least Two Sets of the following: minuscule, majuscule, number, special character; do you want some MAJUSCULES : Enter y for yes and else is for no.", "");
               
                if (wantmajuscule=="y") {
                    vectSetout1[1]=1;
                } else {
                vectSetout1[1]=0;
                }
               
            
                var wantspecialCharacters= prompt("Please choose At Least Two Sets of the following: minuscule, majuscule, number, special character; do you want some SPECIAL CHARACTERS : Enter y for yes and else is for no.", "");
                console.log("wantspecialCharacters is:", wantspecialCharacters);
                if (wantspecialCharacters=="y") {
                    vectSetout1[2]=1;
                } else {
                vectSetout1[2]=0;
                }
              

                var wantnumericCharacters = prompt("Please choose At Least Two Sets of the following: minuscule, majuscule, number, special character; do you want some NUMERIC CHARACTERS : Enter y for yes and else is for no.", "");
                console.log("wawantnumericCharacters is:", wantnumericCharacters);
                if (wantnumericCharacters=="y") {
                    vectSetout1[3]=1;
                } else {
                vectSetout1[3]=0;
                }
              
                    for (let i=0; i<=3;) {
                    
                    numCol=numCol+vectSetout1[i];
                    i++;
                    }
               
                if (numCol<numColdesire) {
                var dummy = prompt("click ok to start over", "");   
                numCol=0; 
                } else {
                numCol=numColdesire;
                }
    }

empty=["","3","5"]  //create an emptied index.
let y=empty[0];
let count1=0;
let ptX=1;
let ptY=1;

while (count1 < numCharacters) {


        ptX = Math.floor((Math.random() * 10) + 1);  // integer 0 to 10
        ptX= ptX*26;  //26 characters
        ptX= ptX/10;
        ptY=Math.floor(ptX);
        ptY=Math.round(ptY);
    if (vectSetout1[0]==1) {
        y= minuscule[ptY] + y;
        count1++;
    } else if (vectSetout1[0]==0) {
        y= empty[0] + y;
    }

        
                ptX = Math.floor((Math.random() * 10) + 1);  // integer 0 to 10
                ptX= ptX*26;  //26 characters
                ptX= ptX/10;
                ptY=Math.floor(ptX);
                ptY=Math.round(ptY);
            if (vectSetout1[1]==1) {
                if (count1 < numCharacters) {
                y= majuscule[ptY] + y;
                }
                    count1++;
            } else if (vectSetout1[1]==0) {
                y= empty[0] + y;
            }
       
 
        
                ptX = Math.floor((Math.random() * 10) + 1);  // integer 0 to 10
                ptX= ptX*26;  //26 characters
                ptX= ptX/10;
                ptY=Math.floor(ptX);
                ptY=Math.round(ptY);
            if (vectSetout1[2]==1) {
                if (count1 < numCharacters) {
                y= specialCharacters[ptY] + y;
                }
                    count1++;
            } else if (vectSetout1[2]==0) {
                y= empty[0] + y;
            }
        

        
                ptX = Math.floor((Math.random() * 10) + 1);  // integer 0 to 10
                ptX= ptX*26;  //26 characters
                ptX= ptX/10;
                ptY=Math.floor(ptX);
                ptY=Math.round(ptY);
            if (vectSetout1[3]==1) {
                if (count1 < numCharacters) { 
                y= numericCharacters[ptY] + y;
                }
                    count1++;
            } else if (vectSetout1[3]==0) {
                y= empty[0] + y;
            }
       
}

// Assignment Code
var generateBtn = document.querySelector("#generate");

// Write password to the #password input
function writePassword() {

  var password = y;
  //var password = generatePassword();
  var passwordText = document.querySelector("#password");

  passwordText.value = password;

}

// Add event listener to generate button
generateBtn.addEventListener("click", writePassword);


