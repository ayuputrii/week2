const printSegitiga = (x) => {
  if (x <= 99) {
    var str = "";
    for (let i = x; i > 0; i--) {
      for (var j = 1; j <= i; j++) {
        str += j + "";
      }
      console.log(str);
      str = "";
    }
  } else {
    console.log("Data Harus angka");
  }
};

// printSegitiga("enam");
printSegitiga(5);
