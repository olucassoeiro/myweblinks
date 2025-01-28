function toggleMode() {
    const html = document.documentElement
    html.classList.toggle('light')
    const img = document.querySelector("#profile img")

    if(html.classList.contains('light')) {
        img.setAttribute("src", "../src/images/profile-light.png")
        img.setAttribute("alt", "Foto do perfil de Lucas Soeiro usando um óculos.")

    } else {
        img.setAttribute("src", "../src/images/profile-black.png")
        img.setAttribute("alt", "Foto do perfil de Lucas Soeiro sorrindo.")
    }
}