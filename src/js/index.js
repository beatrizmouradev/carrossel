// Capturando os elementos que fazem parte do carrossel
const carrossel = document.getElementById("carrossel");
const cursos = document.querySelectorAll(".curso");
const botaoVoltar = document.getElementById("voltar");
const botaoProximo = document.getElementById("proximo");

// Variável que armazena a quantidade total de cursos (1-4).
const CURSOS_COUNT = cursos.length;

// Variável que inicia na posição 0 do array (0-3).
let cursoAtual = 0;


const aoClicarVoltar = () => {
    /**
     * Caso o curso atual esteja na posição 0, ele vai modificar o curso atual para o último.
     */
    if(cursoAtual === 0) {
        cursoAtual = CURSOS_COUNT - 1
    } 
    /**
     * Caso não esteja na posição 0, ele decrementa em uma posicao o curso atual.
     */
    else {
        cursoAtual--;
    }

    atualizaCarrossel();
}

const aoClicarProximo = () => {

    /**
     * Caso o curso atual esteja na posição final, ele vai modificar o curso atual para o primeiro.
     */
    if (cursoAtual === CURSOS_COUNT - 1) {
        cursoAtual = 0
    }

        /**
     * Caso não esteja na posição final, ele incrementa em uma posicao o curso atual.
     */
    else {
        cursoAtual++
    } 

    atualizaCarrossel()
}

/**
 * O objetivo dessa função é deslocar o carrossel no eixo x a cada click no botão partido da sua posição atual.
 * A distância do deslocamento em pixels é a soma do tamanho do curso + suas margens. 
 */
function atualizaCarrossel() {

    // Capturando o valor da margem do curso
    const primeiroCurso = cursos[0]

    const primeiroCursoStyle = window.getComputedStyle(primeiroCurso)
    const primeiroCursoMarginRight = parseInt(primeiroCursoStyle.marginRight)
    
    // Calculando o valor em pixel do deslocamento
    const tamanhoTotalCurso = -cursoAtual * (primeiroCurso.offsetWidth + primeiroCursoMarginRight)

    // Deslocando o elemento carrossel por meio da propriedade style.transform 
    carrossel.style.transform = `translateX(${ tamanhoTotalCurso }px)`;
}

/**
 * Adcionando um listener para o click dos botões + chamada da função 
 */
botaoVoltar.addEventListener("click", aoClicarVoltar)
botaoProximo.addEventListener("click", aoClicarProximo)
