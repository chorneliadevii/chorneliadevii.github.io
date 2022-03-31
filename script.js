function hapusOutput() {
  document.getElementById("output").innerHTML = "0";
}
function hapusNilaiAwal() {
  var value = document.getElementById("output").innerHTML;
  if (value == "0") {
    value = " ";
    document.getElementById("output").innerHTML = value;
  }
}
function persen() {
  var value = document.getElementById("output").innerHTML;
  value = value / 100;
  document.getElementById("output").innerHTML = value;
}
function tampil(value) {
  hapusNilaiAwal();
  document.getElementById("output").innerHTML += value;
}
function hasil() {
  hapusNilaiAwal();
  var equation = document.getElementById("output").innerHTML;
  var solved = eval(equation);
  document.getElementById("output").innerHTML = solved;
}
