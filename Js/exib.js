function teste(){
	var htmlElement, p;

	htmlElement = "";

	for(p = 0; p <= 4; p++){
		htmlElement += "<center><div class='notChat row my-2'><img src='../../Img/Perfil/3.jpg' class='float-left' alt='...' height='80' width='80' style='border-radius: 50%;'><h5 class='notChatNperf'>Media heading</h5><span class='notChatDt'>Data:10/12/2018 Horas:23:30</span><a class='notChatBtn test' href='#'><h4>Chat</h4></a></div></center> <br>";
	}

	document.getElementById("exibicao").innerHTML = htmlElement;
}

//funcao de exibicao
function buscaPerf(){
	var htmlElementOne, p;
	htmlElementOne = "";

	for ( p = 0; p <= 10; p++) {
		htmlElementOne +="<div class='float-left my-3'><img src='../Img/Perfil/3.jpg' class='float-left' alt='...' height='60' width='60' style='border-radius: 50%;'><a href='#' class='float-left'><li>Nome De Perfil(false)</li></a></div>";
	}

	document.getElementById("exibicao").innerHTML = htmlElementOne;
	document.getElementById("exibicaoTw").innerHTML = htmlElementOne;
	document.getElementById("exibicaoThr").innerHTML = htmlElementOne;
	document.getElementById("exibicaoFr").innerHTML = htmlElementOne;
}
