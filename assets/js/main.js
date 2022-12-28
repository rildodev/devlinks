function toggleMode() {
  const body = document.body

  /*  if (body.classList.contains("light")) {
    body.classList.remove("light")
  } else {
    body.classList.add("light")
  } */
  body.classList.toggle("light")

  /* pegar a tag img */
  const img = document.querySelector("#profile img")

  /* substituir a img */
  if (body.classList.contains("light")) {
    /* se tiver light mode, adicionar a imagem ligth */
    img.setAttribute("src", "./assets/images/Profile/sunglass.png")
  } else {
    /* se tiver sem light mode, manter a original */
    img.setAttribute("src", "./assets/images/Profile/avatar.png")
  }
}
