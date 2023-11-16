function linkgmail() {
    navigator.clipboard.writeText('pedrocpires25@gmail.com');
    var sb = document.getElementById("snackbar");
    sb.className = "show";
    setTimeout(()=>{ sb.className = sb.className.replace("show", ""); }, 3000);
}
