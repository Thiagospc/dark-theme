let contador = 2;
function darkMode(){
    let element = document.body;
    element.classList.toggle("dark-theme")
    
    if (contador % 2 === 0){
        let nome = document.querySelector("#butao");
        nome.textContent = 'Light Mode';

        document.getElementById("link").style.color = "red";

        contador = contador + 1;
    } else{
        let nome = document.querySelector("#butao");
        nome.textContent = 'Dark Mode';
        document.getElementById("link").style.color = "blue";
        contador = contador + 1;
    }
    
}

