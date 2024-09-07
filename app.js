function pesquisar() {
    // Seleciona a seção onde os resultados serão exibidos
    let section = document.getElementById('resultados-pesquisa');

    let campoPesquisa = document.getElementById('campo-pesquisa').value;

    if (!campoPesquisa) {
        section.innerHTML = `<div class="item-resultado">
        <h2>Nada foi encontrado. Você precisa digitar o nome de um atleta ou esporte</h2></div>`;
        return
    }

    campoPesquisa = campoPesquisa.toLowerCase();

    // Inicializa uma string vazia para armazenar os resultados
    let resultados = "";
    let titulo = "";
    let descricao = "";
    let tags = "";

    // Itera sobre cada atleta e cria o HTML para cada resultado
    for (let atleta of atletas) {
        titulo = atleta.titulo.toLowerCase();
        descricao = atleta.descricao.toLowerCase();
        tags = atleta.tags.toLowerCase();
        if (titulo.includes(campoPesquisa) || descricao.includes(campoPesquisa) || tags.includes(campoPesquisa)) {
            // Cria um novo elemento HTML para cada resultado
            resultados += `
            <div class="item-resultado">
                <h2>
                    <a href="#" target="_blank">${atleta.titulo}</a> </h2>
                <p class="descricao-meta">${atleta.descricao}</p> 
                <a href="${atleta.link}" target="_blank">Saiba mais</a> </div>
        `;
        }
    }

    if (!resultados) {
        resultados = `<div class="item-resultado"><h2>Nada foi encontrado</h2></div>`;
    }

    // Insere os resultados na seção HTML
    section.innerHTML = resultados;
}