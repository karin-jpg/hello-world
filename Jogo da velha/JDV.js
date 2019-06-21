vez = 1;
contador = 0;

function vezDeQuem(vez, botao)
{
if (vez % 2 != 0)
	{
		jogador1(botao);
	}
	else if (vez % 2 == 0)
	{
		jogador2(botao);
	}
}

function jogador1(botao)
{
	var bot = 'botao'+botao;
	document.getElementById(bot).innerHTML="X";
	document.getElementById(bot).style.color = '#000000';
	document.getElementById("texto").style.fontFamily = "verdana";
	document.getElementById('texto').innerHTML="Vez de: Jogador 2";
	vez = vez + 1;
	contador++;
	setTimeout(function (){
		vitoria(vez, contador);
	}, 50);
}

function jogador2(botao)
{
	var bot = 'botao'+botao;
	document.getElementById(bot).innerHTML="O";
	document.getElementById(bot).style.color = '#000000';
	document.getElementById("texto").style.fontFamily = "verdana";
	document.getElementById('texto').innerHTML="Vez de: Jogador 1";
	vez = vez + 1;
	contador++;
	setTimeout(function (){
		vitoria(vez, contador);
	}, 50);
}

function vitoria(vez, contador)
{
	if(vez % 2 == 0)
	{
		if (document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao2').innerHTML && document.getElementById('botao2').innerHTML == document.getElementById('botao3').innerHTML || document.getElementById('botao4').innerHTML != '' && document.getElementById('botao4').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao6').innerHTML || document.getElementById('botao7').innerHTML != '' && document.getElementById('botao7').innerHTML == document.getElementById('botao8').innerHTML && document.getElementById('botao8').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao4').innerHTML && document.getElementById('botao4').innerHTML == document.getElementById('botao7').innerHTML || document.getElementById('botao2').innerHTML != '' && document.getElementById('botao2').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao8').innerHTML || document.getElementById('botao3').innerHTML != '' && document.getElementById('botao3').innerHTML == document.getElementById('botao6').innerHTML && document.getElementById('botao6').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao3').innerHTML != '' && document.getElementById('botao3').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao7').innerHTML )	
		{
			document.getElementById("texto").style.fontFamily = "verdana";
			document.getElementById('texto').innerHTML="Vitoria do jogador 1!";
			document.getElementById('botao1').disabled = true;
			document.getElementById('botao2').disabled = true;
			document.getElementById('botao3').disabled = true;
			document.getElementById('botao4').disabled = true;
			document.getElementById('botao5').disabled = true;
			document.getElementById('botao6').disabled = true;
			document.getElementById('botao7').disabled = true;
			document.getElementById('botao8').disabled = true;
			document.getElementById('botao9').disabled = true;
			document.getElementById('recomecar').style.display = 'block';
		}
	}
	else if (vez % 2 != 0)
	{		
		if (document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao2').innerHTML && document.getElementById('botao2').innerHTML == document.getElementById('botao3').innerHTML || document.getElementById('botao4').innerHTML != '' && document.getElementById('botao4').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao6').innerHTML || document.getElementById('botao7').innerHTML != '' && document.getElementById('botao7').innerHTML == document.getElementById('botao8').innerHTML && document.getElementById('botao8').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao4').innerHTML && document.getElementById('botao4').innerHTML == document.getElementById('botao7').innerHTML || document.getElementById('botao2').innerHTML != '' && document.getElementById('botao2').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao8').innerHTML || document.getElementById('botao3').innerHTML != '' && document.getElementById('botao3').innerHTML == document.getElementById('botao6').innerHTML && document.getElementById('botao6').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao1').innerHTML != '' && document.getElementById('botao1').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao9').innerHTML || document.getElementById('botao3').innerHTML != '' && document.getElementById('botao3').innerHTML == document.getElementById('botao5').innerHTML && document.getElementById('botao5').innerHTML == document.getElementById('botao7').innerHTML)
		{
				document.getElementById("texto").style.fontFamily = "verdana";
				document.getElementById('texto').innerHTML="Vitoria do jogador 2!";
				document.getElementById('botao1').disabled = true;
				document.getElementById('botao2').disabled = true;
				document.getElementById('botao3').disabled = true;
				document.getElementById('botao4').disabled = true;
				document.getElementById('botao5').disabled = true;
				document.getElementById('botao6').disabled = true;
				document.getElementById('botao7').disabled = true;
				document.getElementById('botao8').disabled = true;
				document.getElementById('botao9').disabled = true;
				document.getElementById('recomecar').style.display = 'block';
		}
	}
	else if (contador == 9)
		{
				document.getElementById("texto").style.fontFamily = "verdana";
				document.getElementById('texto').innerHTML="Jogo deu velha!";
				document.getElementById('botao1').disabled = true;
				document.getElementById('botao2').disabled = true;
				document.getElementById('botao3').disabled = true;
				document.getElementById('botao4').disabled = true;
				document.getElementById('botao5').disabled = true;
				document.getElementById('botao6').disabled = true;
				document.getElementById('botao7').disabled = true;
				document.getElementById('botao8').disabled = true;
				document.getElementById('botao9').disabled = true;
				document.getElementById('recomecar').style.display = 'block';
		}
		
}
function recomecar()
{
	document.getElementById('botao1').innerHTML="";
	document.getElementById('botao2').innerHTML="";
	document.getElementById('botao3').innerHTML="";
	document.getElementById('botao4').innerHTML="";
	document.getElementById('botao5').innerHTML="";
	document.getElementById('botao6').innerHTML="";
	document.getElementById('botao7').innerHTML="";
	document.getElementById('botao8').innerHTML="";
	document.getElementById('botao9').innerHTML="";
	document.getElementById('botao1').disabled = false;
	document.getElementById('botao2').disabled = false;
	document.getElementById('botao3').disabled = false;
	document.getElementById('botao4').disabled = false;
	document.getElementById('botao5').disabled = false;
	document.getElementById('botao6').disabled = false;
	document.getElementById('botao7').disabled = false;
	document.getElementById('botao8').disabled = false;
	document.getElementById('botao9').disabled = false;
	vez = 1;
	contador = 0;
	document.getElementById('recomecar').style.display = 'none';
	document.getElementById("texto").style.fontFamily = "verdana";
	document.getElementById('texto').innerHTML="Vez de: Jogador 1!";
	
	
}