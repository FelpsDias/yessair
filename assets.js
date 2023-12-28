var palavraEscolhida;
var tentativasRestantes;



function iniciarJogo() {
    palavraEscolhida = document.getElementById('palavra').value.trim().toLowerCase();
    let dicaB = document.getElementById('dicaBonus').value;
    var dica = document.getElementById('dica').value;
    if (palavraEscolhida !== '' && dica !== '') {
        document.getElementById('dicaAtual').innerHTML = 'Dica: ' + dica;
        document.getElementById('dicaAtual2').innerHTML +=  `<p>DICA BÔNUS:  ${dicaB}</p>`;

        tentativasRestantes = 10;
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativasRestantes;
        document.getElementById('gameContainer').innerHTML += '<div id="tentativas">Tentativas: 10</div>';
        document.getElementById('palavra').style.display = 'none';
        document.getElementById('dica').style.display = 'none';
        document.getElementById('dicaAtual2').style.display = "none";
        document.getElementById('dicaBonus').style.display = 'none';

        document.getElementById('plv').style.display = 'none';
        document.getElementById('dc1').style.display = 'none';
        document.getElementById('inicJ').style.display = 'none';

        document.getElementById('chuteSection').style.display = 'block';
    } else {
        alert('Por favor, preencha a palavra e a dica.');
    }
}

function verificarChute() {
    
    
    let paraWin = document.querySelector('.acertou');
    var chute = document.getElementById('chute').value.toLowerCase();
    
    document.getElementById('resultadoChute').classList.add('tremer');
    setTimeout(function() {
        document.getElementById('resultadoChute').classList.remove('tremer');
    }, 500);


    if(tentativasRestantes <= 5){
        document.getElementById('dicaAtual2').style.display = "block";
        document.getElementById('dicaAtual2').style.color = '#FF0000';
        
    };
    



    if (chute === palavraEscolhida) {
        document.getElementById('venceu').innerHTML = 'Você venceu!';
        document.getElementById('venceu').style.color = '#4caf50';
        document.getElementById('venceu').style.fontSize = '24px';
        document.getElementById('chuteSection').innerHTML = '<button onclick="reiniciarJogo()">Reiniciar Jogo</button>';
        paraWin.innerHTML = 'PARABÉNS, VOCÊ ACERTOU!!!';
    } else {
        tentativasRestantes--;
        document.getElementById('tentativas').innerHTML = 'Tentativas restantes: ' + tentativasRestantes;
        if (tentativasRestantes === 0) {
            document.getElementById('resultadoChute').innerHTML = 'Você perdeu :( A palavra era: ' + palavraEscolhida;
            document.getElementById('chuteSection').innerHTML = `<p>Você perdeu :( A palavra era: ${palavraEscolhida} </p>` + '<button onclick="reiniciarJogo()">Reiniciar Jogo</button>';
            document.getElementById('chuteSection').classList.add('letraBig');
            
            document.getElementById('dicaAtual').style.display = 'none';
        document.getElementById('dicaAtual2').style.display = "none";
        } else {
            document.getElementById('resultadoChute').innerHTML = 'Você errou. Tente novamente.';
            document.getElementById('resultadoChute').innerHTML = 'Você errou. Tente novamente.';
        }
    }
}



function reiniciarJogo() {
    location.reload();
}

document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter') {
        if (document.getElementById('palavra').style.display === 'none') {
            verificarChute();
        } else {
            iniciarJogo();
        }
    }
});


document.addEventListener('keydown', function(event) {
    if (event.key === 'Enter' && tentativasRestantes === 0) {
        reiniciarJogo();
    }
});