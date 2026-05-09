function animarGrafico() {
    const dados = [{ id: 'barra-rio', valor: 92 }, { id: 'barra-cafe', valor: 88 }];
    dados.forEach(item => {
        const barra = document.getElementById(item.id);
        let atual = 0;
        barra.style.width = '0%';
        const timer = setInterval(() => {
            if (atual >= item.valor) { clearInterval(timer); }
            else { atual++; barra.style.width = atual + '%'; barra.innerText = atual + '%'; }
        }, 20); 
    });
}

function simular(tipo) {
    const texto = document.getElementById('status-text');
    texto.innerHTML = "> ACESSANDO REDE DE SENSORES DO RIO DAS CINZAS...";
    setTimeout(() => {
        if (tipo === 'quimico') {
            texto.innerHTML = "<span style='color: #ff4444'>> CRÍTICO: Práticas inadequadas. Risco ambiental em Tomazina.</span>";
        } else {
            texto.innerHTML = "<span style='color: #00ff88'>> SUCESSO: Protocolo Agrinho validado. Equilíbrio sustentável garantido!</span>";
        }
    }, 1500);
}
