//TASK 2
/*function cutback(str, maxlength) {
  if (str.length > maxlength) {
    return str.slice(0, maxlength - 3) + '...';
  }

  return str;
}

console.log( cutback("Як умру, то поховайте мене на могилі,", 30) );
console.log( cutback("Серед степу широкого,", 30) );*/

//TASK 1
/*function big_letter(str) 
{
  if (!str) return str;
  return str[0].toUpperCase() + str.slice(1);
}
alert(big_letter("олександра"));*/

//TASK4
/*function removeClass(obj, cls) {
  var classes = obj.className.split(' ');

  for (var i = 0; i < classes.length; i++) {
    if (classes[i] == cls) {
      classes.splice(i, 1); 
      i--; // (*)
    }
  }
  obj.className = classes.join(' ');

}

var obj = {
  className: 'open menu'
}

console.log(obj, 'blabla');
console.log(obj, 'menu');
alert(obj.className); */


//TASK 3
function camelize(str) {
  var arr = str.split('-');

  for (var i = 1; i < arr.length; i++) {
    arr[i] = arr[i].charAt(0).toUpperCase() + arr[i].slice(1);
  }

  return arr.join('');
}

alert( camelize("alma-mater") );
alert( camelize("go-to") ); 
