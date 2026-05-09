function animarGrafico() {
    const dados = [{ id: 'barra-rio', valor: 94 }, { id: 'barra-cafe', valor: 89 }];
    dados.forEach(item => {
        const barra = document.getElementById(item.id);
        let atual = 0;
        barra.style.width = '0%';
        const timer = setInterval(() => {
            if (atual >= item.valor) { clearInterval(timer); }
            else { atual++; barra.style.width = atual + '%'; barra.innerText = atual + '%'; }
        }, 25); 
    });
}

function simular(tipo) {
    const texto = document.getElementById('status-text');
    const dica = document.getElementById('tip-text');
    texto.innerHTML = "> ACESSANDO BANCO DE DADOS DO RIO DAS CINZAS...";
    dica.innerHTML = ""; 
    setTimeout(() => {
        if (tipo === 'quimico') {
            texto.innerHTML = "<span style='color: #ff4444'>> FALHA: Protocolo Obsoleto detectado. Impacto negativo.</span>";
            dica.innerHTML = "Resultado: O descarte incorreto de resíduos e a falta de mata ciliar causam erosão e perda da qualidade da água.";
        } else {
            texto.innerHTML = "<span style='color: #00ff88'>> SUCESSO: Protocolo Agrinho validado com eficiência!</span>";
            dica.innerHTML = "Resultado: A adubação orgânica e o reflorestamento das margens garantem água pura e solo fértil para as futuras gerações.";
        }
    }, 1800);
}
