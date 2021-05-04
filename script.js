function show(shown, d1, d2) {
  document.getElementById(shown).style.display = "block";
  document.getElementById(d1).style.display = "none";
  document.getElementById(d2).style.display = "none";
}
function toggle(shown) {
  if (document.getElementById(shown).style.display == "none") {
    document.getElementById(shown).style.display = "block";
  } else {
    document.getElementById(shown).style.display = "none";
  }
}
