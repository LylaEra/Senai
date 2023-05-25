// Começo Horas
(function(){
	var atualizarHora = function(){
		// Obtenha a data atual, incluindo horas, minutos, segundos, dia da semana, dia do mês, mês e ano;
		var fecha = new Date(),
			horas = fecha.getHours(),
			ampm,
			minutos = fecha.getMinutes(),
			segundos = fecha.getSeconds(),
			diaSemana = fecha.getDay(),
			dia = fecha.getDate(),
			mes = fecha.getMonth(),
			year = fecha.getFullYear();

		// Acessamos os elementos DOM para posteriormente adicionar seus valores correspondentes
		var pHoras = document.getElementById('horas'),
			pAMPM = document.getElementById('ampm'),
			pMinutos = document.getElementById('minutos'),
			pSegundos = document.getElementById('segundos'),
			pDiaSemana = document.getElementById('diaSemana'),
			pDia = document.getElementById('dia'),
			pMes = document.getElementById('mes'),
			pYear = document.getElementById('year');

		
		// Pegamos o dia da semana e o exibimos
		var semana = ['Domingo', 'Segunda-Feira', 'Terça-Feira', 'Quarta-Feira', 'Quinta-Feira', 'Sexta-Feira', 'Sabado'];
		pDiaSemana.textContent = semana[diaSemana];

		// Temos o dia do mês
		pDia.textContent = dia;

		// Obtemos o mês e o ano e os exibimos
		var meses = ['Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro']
		pMes.textContent = meses[mes];
		pYear.textContent = year;

		// Mudamos o horário de 24 para 12 horas e estabelecemos se é AM ou PM

		if (horas >= 12) {
			horas = horas - 12;
			ampm = 'PM';
		} else {
			ampm = 'AM';
		}

		// Detectamos quando é 0 AM e transformamos em 12 AM
		if (horas == 0 ){
			horas = 12;
		}

		// Se quisermos mostrar um zero antes das horas, executamos esta condicional
		// if (horas < 10){horas = '0' + horas;}
		pHoras.textContent = horas;
		pAMPM.textContent = ampm;

		// Minutos e Segundos
		if (minutos < 10){ minutos = "0" + minutos; }
		if (segundos < 10){ segundos = "0" + segundos; }

		pMinutos.textContent = minutos;
		pSegundos.textContent = segundos;
	};

	atualizarHora();
	var intervalo = setInterval(atualizarHora, 1000);
}())
// Final Horas

// Começo Slide
let slideIndex = 0;
showSlides();

function showSlides() {
  let i;
  let slides = document.getElementsByClassName("mySlides");
  let dots = document.getElementsByClassName("dot");
  for (i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";  
  }
  slideIndex++;
  if (slideIndex > slides.length) {slideIndex = 1}    
  for (i = 0; i < dots.length; i++) {
    dots[i].className = dots[i].className.replace(" active", "");
  }
  slides[slideIndex-1].style.display = "block";  
  dots[slideIndex-1].className += " active";
  setTimeout(showSlides, 6000); // Muda a imagem a cada 6 segundos
}
// Final do slide