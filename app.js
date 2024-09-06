const inputPesquisa = document.getElementById('letrasLibras');
const btnPesquisar = document.getElementById('btnPesquisar');
const resultadosDiv = document.getElementById('resultados');

btnPesquisar.addEventListener('click', () => {
    const pesquisa = inputPesquisa.value.toLowerCase();
    const resultado = letrasLibras.find(letra => letra.letra.toLowerCase() === pesquisa);

    resultadosDiv.innerHTML = '';

    if (resultado) {
        const divLetra = document.createElement('div');
        divLetra.innerHTML = `
            <h2>${resultado.letra}</h2>
            <img src="img/${resultado.imagem}" alt="${resultado.letra}"> <p>${resultado.descricao}</p>
        `;
        resultadosDiv.appendChild(divLetra);
    } else {
        resultadosDiv.textContent = 'Letra não encontrada.';
    }
});