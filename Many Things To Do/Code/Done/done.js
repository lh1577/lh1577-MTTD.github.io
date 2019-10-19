doneMain()
function doneMain(){
    var ul = document.getElementById('uldone')
    var accArray = JSON.parse(localStorage.getItem("acc"));
    for(i=0;accArray.length>i;i++){
        createli(accArray[i],ul)
    }    
}
function createli(ai,el){
    var li = document.createElement("li");
    var lin = document.createTextNode(ai);
    li.classList.add("lidone");
    li.appendChild(lin);
    el.appendChild(li)
}