function validateForm() {
    let x = document.forms["myForm"]["fname"].value;
    let y = document.forms["myForm"]["lname"].value;
    let z = document.forms["myForm"]["subject"].value;
    if (x == "" || y==""|| z=="") {
      alert("You cannot leave any field empty");
      return false;
    }
  }