const inputBox = document.getElementById("input-box");
const listContainer = document.getElementById("list-container");

function addTask() {
    if(inputBox.value === '') {
        alert("Veuillez entrer une tache !");
        console.log("Veuillez entrer une tache !");
    } else {
        let li = document.createElement("li"); //cree un element html avec le tag li
        li.innerHTML = inputBox.value;  //ajoute le texte dans la box au tag li créé
        listContainer.appendChild(li); //le li est affiché dans le display container

        let span = document.createElement("span")
        span.innerHTML = "\u00d7"; //code ASCII pour ajouter la croix à la fin du mot
        li.appendChild(span)
    }
    inputBox.value = "";
    saveData();
}

listContainer.addEventListener("click", function(e){
    if(e.target.tagName === "LI") {
        e.target.classList.toggle("check"); //lorsu'on clique sur le li on ajoute la classe check à ce li. Si on cette classe est déjà activée le programmm va la retirer
        saveData();
    }
    else if(e.target.tagName === "SPAN"){ //SI on clique sur le span par contre, l'élelment sélectionné sera supprimé
        e.target.parentElement.remove();
        saveData();
    } 
}, false)

function saveData() {
    localStorage.setItem("data",listContainer.innerHTML); //permettre de garder les tache dans la page
}
function showTask() {
    listContainer.innerHTML = localStorage.getItem("data");
}
showTask()