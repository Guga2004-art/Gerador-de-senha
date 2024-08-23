const botao = document.getElementById("click")
const texto = document.getElementById("senha")

botao.addEventListener("click", () => {
  const alfabeto = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789!@#$%^&*()?/."
  const tamanhoAleatorio = Math.floor(Math.random() * 17) + 4
  let senha = ''

  for (let i = 0; i < tamanhoAleatorio; i++) {
    const indiceAleatorio = Math.floor(Math.random() * alfabeto.length)
    senha += alfabeto[indiceAleatorio]
  }

  texto.textContent = senha
})
