
//  var arrays = [];// esta vacio
// var valores = ['hola','mascota','comida','adios'];

// for(var i = 0; i < arrays.length; i++){
    // alert(arrays[i]);
// }

// var = Tacos , Alitas, Boneles, pozole, Chilaquiles, Tamales,

//
//
////var valores = ['Tacos','Alitas','Boneless','Pozole','Chilaquiles','Tamales'];
//
//x = 1
//switch (19){
//    case 1:
//        document.write('Sunday');
//        break
//        case 2:
//        document.write('Monday');
//        break
//        case 3:
//        document.write('Tusday');
//        break
//        case 4:
//            document.write('Wednesday')
//            break
//            case 4:
//            document.write('Thusday')
//            break
//            case 4:
//            document.write('Fryday')
//            break
//            case 4:
//            document.write('Saturday')
//            break
//            case 4:
//            document.write('Sunday')
//            break
//            default :
//            // document.write('The Document Is Not In The List')
//
//
//}

// operadores logicos
//for (;;){
      // if (x <=100){
   // document.write(x, '<br />');
   // x++;
      // }else{
          // break;
      // }
//}

// whike loop in java
//x = 1 ;
//while (x<=35){
//    
// document.write(x, '<br />');
// x++; //esto incrementa
//}
//
//// Pop-up boxes in hava
//
////x = prompt ("Please Enter Your Name : ");
////if((x==null) || (x==' ')); 
////   document.write("Sorry! You Have not entered any name. ")
////else
////   document.write('Hello '+x);
//
//// Document... while loop in hava Muy buenos juegos +++++++++++++++++++++++++++++++
//
//var MIN = 1;
//var MAX = 10;
//var secretNumber = Math.floor(Math.random() * (MAX - MIN + 1)) + MIN;
//
//var guesses = 0; //para guardar los numero de imvitados
//var hint = '' ; // for storing hint
//
//do {
//    //get input from user
//    var input = prompt('Please guess a number betwin'+ MIN+ 'and' + MAX
//    +'\n and if it matches with computer guess, Then you win.\n' + hint);
//    if(input == null) {
//        ask = confirm("You have not tried the game!\nDo you want to exit ?");
//        if(ask==true){
//            alert("Thanks! Visit Again.");
//            document.write("<h1>Thanks! Visit Again.<h1>");
//            break;
//        }
//    }else{
//        // get the integer equivalent of the entered number
//        var number = parseInt(input);
//        // increase the number of guesses
//        guesses++;
//        // check input number with the secret number
//        if(number == secretNumber) {
//            alert(`Bravo! you're correct after ${guesses} guess(es) . `);
//        }else{
//            hint = 'Your number is not mtching with computer guess,\nPlease guess again .';
//        }
//    }
//} while (number != secretNumber);




// Introduccion alas funciones

//function printNumbers(From,To) {
//    for(i=From;i<=To;i++)
//        document.write(i+"<br />");
//}
//document.write("Printing numbers form 10 to 20<br />");
//printNumbers(10,20)
//document.write("printing numbers form 15 to 25<br />");
//printNumbers(15,25)


// objetos y propiedades  exemplo

//var Student = {
//    firstName : 'Gasty',
//    lastName : 15
//}
//document.write(Student.firstName+'<br \>')
//document.write(Student.lastName+'<br\>')

// constructor de objetos

//function Student(firstName,lastName,rollNo){
//    this.firstName; //keyword this refers to currrent object
//    this.lastName = lastName;
//    this.rollNo;
//}
////keyword new used to created two new objects
////student and Student2 or Stident data type
//var Student1 = new Student ('Gasty', 'Dossantos', 10);
//var Student2 = new Student ('Red', 'Ghost', 11);
//
//// print the values of object properties on webpage
//document.write(Student1.firstName+'<br\>');
//document.write(Student1.lastName+'<br\>');
//document.write(Student1['rollNo']+'<br\>');
//document.write(Student2.firstName+'<br\>');
//document.write(Student2.lastName+'<br\>');
//document.write(Student2['rollNo']+'<br\>');


//dos metodos de declarar los Array

rolls0 = 15;
rolls1 = 16;
rolls2
 = 17;

var rolls = new Array(15,16,17);

document.write(rolls[0]+"  "+rolls[1]+"  "rolls[2]);


