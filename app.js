console.log("dados");

function pesquisar() {
    // Obtém a seção onde os resultados da pesquisa serão exibidos
    let section = document.getElementById("resultados-pesquisa");
    // Limpa o conteúdo da seção para remover resultados anteriores
    section.innerHTML = ""; 

    // Seleciona o valor do campo de pesquisa e converte para letras minúsculas
    let termoPesquisa = document.getElementById("pesquisa").value.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados da pesquisa
    let resultados = "";
    // Itera sobre cada item (dado) no array "dados"
    for (let dado of dados) {
        
        // Verifica se o título do dado (convertido para minúsculas) contém o termo de pesquisa
        if (dado.titulo.toLowerCase().includes(termoPesquisa)) {
            // Se o título contém o termo de pesquisa, monta o HTML para exibir o resultado
            resultados += `
                <div class="item-resultado">
                    <h2>
                        <a href="${dado.link}" target="_blank">${dado.titulo}</a>
                    </h2>
                    <p class="descricao-meta">${dado.descricao}</p>
                </div>
            `;
        }
    }
    // Define o conteúdo da seção com os resultados da pesquisa
    section.innerHTML = resultados;
}
