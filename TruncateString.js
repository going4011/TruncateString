function truncate(str, num) {
  if (num < str.length){
      var letters = str.split("");
      console.log(letters);
      if (str.length > 3){
          str = "";
          for (var i = 0; i < (num - 3); i++){
              str += letters[i];
          }
          str += "...";
      }
      if (str.length <= 3){
          str = "";
          for (var j = 0; j < num; j++){
              str += letters[j];
          }
          str += "...";
      }
  }
  return str;
}

truncate("Absolutely Longer", 2);