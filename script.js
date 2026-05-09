/**
 * FUNÇÃO: animarGrafico
 * Simula a coleta de dados de sensores locais baseados no Módulo do Protocolo.
 */
function animarGrafico() {
    const dados = [
        { id: 'barra-rio', valor: 94 }, // Simula alta preservação das matas ciliares
        { id: 'barra-cafe', valor: 89 }  // Simula solo fértil via adubação orgânica
    ];

    dados.forEach(item => {
        const barra = document.getElementById(item.id);
        let atual = 0;
        barra.style.width = '0%';

        const timer = setInterval(() => {
            if (atual >= item.valor) {
                clearInterval(timer);
            } else {
                atual++;
                barra.style.width = atual + '%';
                barra.innerText = atual + '%';
            }
        }, 25); 
    });
}

/**
 * FUNÇÃO: simular
 * Mostra o impacto técnico de cada protocolo na região de Tomazina.
 */
function simular(tipo) {
    const texto = document.getElementById('status-text');
    const dica = document.getElementById('tip-text');
    
    texto.innerHTML = "> ACESSANDO BANCO DE DADOS DO RIO DAS CINZAS...";
    dica.innerHTML = ""; 

    setTimeout(() => {
        if (tipo === 'quimico') {
            texto.innerHTML = "<span style='color: #ff4444'>> FALHA: Protocolo Obsoleto detectado. Impacto ambiental negativo em Tomazina.</span>";
            dica.innerHTML = "Resultado: O descarte de resíduos químicos e a falta de mata ciliar causam o assoreamento do rio e a perda de certificação do café especial.";
        } else {
            texto.innerHTML = "<span style='color: #00ff88'>> SUCESSO: Protocolo Agrinho validado com 100% de eficiência!</span>";
            dica.innerHTML = "Resultado: A adubação orgânica e o reflorestamento das margens garantem água pura para o gado e café de exportação para as famílias de Tomazina.";
        }
    }, 1800);
}
