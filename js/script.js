function validateEmail(inputText) {
    var mailFormat =  /\S+@\S+\.\S+/;
    if (inputText.value.match(mailFormat)) {
      alert("Alamat valid");
      return true;
    } else {
      alert("Alamat tidak valid!");
      return false;
    }
  }
