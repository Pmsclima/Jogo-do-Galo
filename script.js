window.onload = function () {
    const jogador1 = "X";
    const jogador2 = "O";
    var vezJogador = jogador1;
    var jogoAcabou = false;
    var jogadas = 0;
    var placardJ1 = 0;
    var placardJ2 = 0;
    var empates = 0;
    var jogador = 1;
    
    
    atualizaInformacoes();
    iniciarEspacos();
    
    function atualizaInformacoes() {
        if (jogoAcabou) {
            return;
        }
        if (vezJogador == jogador1) {
            var jogador = document.querySelectorAll("div#informacao img")[0];
            jogador.setAttribute("src", "imagens/x.png");
        } else {
            var jogador = document.querySelectorAll("div#informacao img")[0];
            jogador.setAttribute("src", "imagens/o.png");
    
        }
    }
    function iniciarEspacos() {
    
        var espacos = document.getElementsByClassName("espaco");
        for (var i = 0; i < espacos.length; i++) {
            espacos[i].addEventListener("click", function () {
                if (jogoAcabou) {
                    return;
                }
                if (this.getElementsByTagName("img").length == 0) {
                    if (vezJogador == jogador1) {
                        this.innerHTML = "<img src ='imagens/x.png'>"
                        this.setAttribute("jogada", jogador1);
                        vezJogador = jogador2;
    
                    } else {
                        this.innerHTML = "<img src ='imagens/o.png'>"
                        this.setAttribute("jogada", jogador2);
                        vezJogador = jogador1;
                    }
                    atualizaInformacoes();
                    verificarVencedor();
                    verificarEmpate();
                }
            }
            );
        }
    }
    async function verificarVencedor() {
        var a1 = document.getElementById("a1").getAttribute("jogada");
        var a2 = document.getElementById("a2").getAttribute("jogada");
        var a3 = document.getElementById("a3").getAttribute("jogada");
    
        var b1 = document.getElementById("b1").getAttribute("jogada");
        var b2 = document.getElementById("b2").getAttribute("jogada");
        var b3 = document.getElementById("b3").getAttribute("jogada");
    
        var c1 = document.getElementById("c1").getAttribute("jogada");
        var c2 = document.getElementById("c2").getAttribute("jogada");
        var c3 = document.getElementById("c3").getAttribute("jogada");
    
        var vencedor = "";
    
        if ((a1 == b1 && a1 == c1 && a1 != "") || (a1 == a2 && a1 == a3 && a1 != "") || (a1 == b2 && a1 == c3 && a1 != "")) {
            vencedor = a1;
        } else if ((b2 == b1 && b2 == b3 && b2 != "") || (b2 == a2 && b2 == c2 && b2 != "") || (b2 == a3 && b2 == c1 && b2 != "")) {
            vencedor = b2;
        } else if ((c3 == c2 && c3 == c1 && c3 != "") || (c3 == a3 && c3 == b3 && c3 != "")) {
            vencedor = c3;
        }
        if (vencedor != "") {
            jogoAcabou = true;
            if (vencedor == "X") {
                placardJ1++;
                document.getElementById("jogador1").innerHTML = placardJ1;
            } else if (vencedor == "O") {
                placardJ2++;
                document.getElementById("jogador2").innerHTML = placardJ2;
            } else {
                empates++;
                document.getElementById("empate").innerHTML = empates;
            }
            await sleep(50);
            alert("O vencedor foi o : '" + vencedor + "'");
        }
    
        jogadas++;
    
    }
    async function verificarEmpate() {
        if (jogadas == 9) {
            jogoAcabou = true;
    
            await sleep(50);
            alert("Empate");
        }
    }
    function reset() {
        jogador = jogador1;
        estado = 0;
        jogadas = 0;
    
        a1.innerHTML = "";
        a2.innerHTML = "";
        a3.innerHTML = "";
        b1.innerHTML = "";
        b2.innerHTML = "";
        b3.innerHTML = "";
        c1.innerHTML = "";
        c2.innerHTML = "";
        c3.innerHTML = "";
    
    }
    document.getElementById("reset").addEventListener("click", function () {
        reset();
    });
    
    function sleep(ms) {
        return new Promise(resolve => setTimeout(resolve, ms));
    }
    };