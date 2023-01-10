function togglemode() {
  const body = document.documentElement
  body.classList.toggle("light")

  //pegar a tag img
  const img = document.querySelector("#profile img")

  // substituir imagem
  if (body.classList.contains("light")) {
    // se tiver em light mode, adicionar a imagem abaixo
    img.setAttribute("src", "./assets/avatar-light.png")
  }
  // se tiver sem light mode, adicionar a imagem abaixo
  else {
    img.setAttribute("src", "./assets/avatar.png")
  }
}
