const textarea = document.getElementById("textarea")

function saveinlocal(){
    localStorage.setItem("TextSaved" , textarea.value)
}
// Check if there's existing data in local storage and populate the textarea
if(localStorage.getItem("TextSaved")){
    textarea.value = localStorage.getItem("TextSaved")
}



textarea.addEventListener("input", saveinlocal);

