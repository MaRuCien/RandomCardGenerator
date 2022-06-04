//.onload: para ejecutar una función de JavaScript tan pronto como una página haya cargado.
window.onload = function() {
	suit();
	cardnumber();
}

//Acceder a los elementos de HTML en JavaScript:
let cardHeader = document.getElementById("card-header");
let cardBody = document.getElementById("card-body");
let cardFooter = document.getElementById("card-footer");

//Números aleatorios con las funciones Math.floor y Math.random:
function getRandomNumber(number)
{
	let randomNumber = Math.floor(Math.random()*number + 1);
	return randomNumber;
}

//Para hacer las posibles pintas con el condicional switch:
function suit() {
    switch (getRandomNumber(3)) {
        case 1:
            cardHeader.style.color = "red";
            cardHeader.innerHTML = "♥";
            cardFooter.style.color = "red";
            cardFooter.innerHTML = "♥";
            break;
        case 2:
            cardHeader.style.color = "red";
            cardHeader.innerHTML = "♦";
            cardFooter.style.color = "red";
            cardFooter.innerHTML = "♦";
            break;
        case 3:
            cardHeader.style.color = "black";
            cardHeader.innerHTML = "♠";
            cardFooter.style.color = "black";
            cardFooter.innerHTML = "♠";
            break;
        case 4:
            cardHeader.style.color = "black";
            cardHeader.innerHTML = "♣";
            cardFooter.style.color = "black";
            cardFooter.innerHTML = "♣";
            break;
    }
}

//Switch para los elementos A, J, Q, K y los otros.
function cardnumber() {
	let num = getRandomNumber(12)
	switch (num) {
		case 1:
			cardBody.innerHTML = "A";
			break;
		case 10:
			cardBody.innerHTML = "J";
			break;
		case 11:
			cardBody.innerHTML = "Q";
			break;
		case 12:
			cardBody.innerHTML = "K";
			break;	
		default:
			cardBody.innerHTML = num;
			break;
	}
}



