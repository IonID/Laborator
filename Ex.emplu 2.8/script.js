let userName = prompt("Introduce-ti Login", '');
if (userName == 'Admin') {
  let pass = prompt('Parola?', '');
  if (pass == 'admin') {
    alert( 'Bine ati venit!' );
  } else if (pass == '' || pass == null) {
    alert( 'Renunta' );
  } else {
    alert( 'Parola incorecta' );
  }
} else if (userName == '' || userName == null) {
  alert( 'Renunta' );
} else {
  alert( "Login incorect" );
}