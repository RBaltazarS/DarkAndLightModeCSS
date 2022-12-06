
// Pesquise Por Todos Os Seletores INPUT RADIO
document
.querySelectorAll("input[type='radio']")
// Para Cada Um Deles Rode Uma/Essa Função | (Argumento)Pegando Um INPUT Como Parametro. 
.forEach(function(input){
  // Quando Clicar, Recebendo Uma Funcao Ele Vai Procurar Um Elemento = DOCUMENT Add A Classe Listada No Input La No CSS, Passando Os Parametros Do Styles... Obs: documentElement = </HTML>
  input.onClick = function(){ 
    document.documentElement.classList.add(input.id)
  }
})
