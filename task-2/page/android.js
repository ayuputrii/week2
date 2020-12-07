let nilai = prompt("Inputkan nilai:");
if (nilai >= 90 && nilai <= 100) {
  grade = "A";
} else if (nilai >= 80 && nilai <= 89) {
  grade = "B";
} else if (nilai >= 70 && nilai <= 79) {
  grade = "C";
} else if (nilai >= 60 && nilai <= 69) {
  grade = "D";
} else {
  grade = "E";
}
console.log(grade);
