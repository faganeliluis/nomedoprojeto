/**
 * Função para simular o impacto das práticas agrícolas
 * @param {string} tipo - O tipo de prática escolhida pelo usuário
 */
function simular(tipo) {
    // Seleciona o elemento HTML onde o resultado será exibido
    const resultadoDiv = document.getElementById('resultado-simulacao');
    
    let mensagem = "";
    let corFundo = "";
    let corTexto = "#333";

    // Estrutura Condicional (Critério de Avaliação do Agrinho)
    if (tipo === 'quimico') {
        mensagem = "<strong>ALERTA DE IMPACTO:</strong> O uso excessivo de químicos pode aumentar a produção imediata, mas contamina o solo e as águas da sua região a longo prazo. ⚠️";
        corFundo = "#f8d7da"; // Vermelho claro de alerta
        corTexto = "#721c24";
    } 
    else if (tipo === 'sustentavel') {
        mensagem = "<strong>IMPACTO POSITIVO:</strong> O uso de bioinsumos mantém o equilíbrio biológico, protege a saúde da sua família e garante uma terra fértil para as futuras gerações! 🌱✨";
        corFundo = "#d4edda"; // Verde claro de sucesso
        corTexto = "#155724";
    }

    // Atualiza o conteúdo e o estilo dinamicamente
    resultadoDiv.innerHTML = `<p style="color: ${corTexto}">${mensagem}</p>`;
    resultadoDiv.style.backgroundColor = corFundo;
    resultadoDiv.style.borderColor = corTexto;
}
