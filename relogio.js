// criar 3 constantes(const) chamadas horas, minutos e segundos.
const caixaHoras = document.getElementById("horas");
const caixaMinutos = document.getElementById("minutos");
const caixaSegundos = document.getElementById("segundos");
const caixaDate = document.getElementById("date");






// crie uma constante chamada relogio e atribua o metodo setInterval.
const relogio = setInterval(() => {
    
    // criar uma variavel chamada dateToday e atribuir o super método new Date().
    let dateToday = new Date();

    const options = { weekday: 'long', year: 'numeric', month: 'short', day: 'numeric' };

    // criar 3 variaveis chamadas hr, min e sec. e atribua a variavel dateToday em cada uma.
    let date = dateToday.toLocaleDateString('pt-BR', options);
   

    let hr = dateToday.getHours();
    let min = dateToday.getMinutes();
    let sec = dateToday.getSeconds();

    if (hr < 10) hr = '0' + hr;
    if (min < 10) min = '0' + min;
    if (sec < 10) sec = '0' + sec;

    // utilizar o textContent para mostrar as hr, min e sec na tela, lembre-se de chamar a caixa de cada campo.
    caixaDate.textContent = date;
   

    caixaHoras.textContent = hr;
    caixaMinutos.textContent = min;
    caixaSegundos.textContent = sec;
    
    
}, 10);