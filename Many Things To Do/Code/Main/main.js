var todoList =[];
var accomplished =[];
var edited = false;
var editedElement;
main();
function innerInput(){
    document.getElementById('input').value="";
}
function submitInput(inp){
    innerInput();
    if(inp!=null){
        createToDo(inp)
    }   
}
function createToDo(inp){
  
    todoList.push(inp);
    localStorage.setItem("ToDo",JSON.stringify(todoList))
    
    main(inp);
}
function main(){
    document.getElementById('ul').innerHTML="";
    var inf = JSON.parse(localStorage.getItem("ToDo"))
    if(inf!=null){
        todoList = inf;
    }
    localStorage.removeItem("ToDo")
    localStorage.setItem("ToDo",JSON.stringify(todoList))
    for(i=0;i<todoList.length;i++){
        
        forHandler(todoList[i]);
    }
    
}
function forHandler(ti){      
    var el = document.getElementById('main');
    var ul = document.getElementById('ul')
    var li = document.createElement("li");
    li.id="li";


    var editButton = document.createElement("button");
    var eBi = document.createElement("img")
    eBi.src="../../Icons/edit1.png";
    eBi.classList.add("imageIcons")
    editButton.onclick=function(){
        editedElement = ti;
        edited=true;
        main(editedElement);
    }
    editButton.classList.add("forButton","editButton");
    editButton.appendChild(eBi);
    var finishedButton = document.createElement("button");
    var fBi = document.createElement("img")
    fBi.src="../../Icons/submit.png";
    fBi.classList.add("imageIcons")
    finishedButton.classList.add("forButton","finishedButton");
    finishedButton.appendChild(fBi);
    finishedButton.onclick=function(){
        var index = todoList.indexOf(ti);
        todoList.splice(index,1);
        console.log(todoList);
        localStorage.removeItem("ToDo");
        localStorage.setItem("ToDo", JSON.stringify(todoList))
        pushAccompl(ti)
        main();

        
        
    }
    var deleteButton = document.createElement("button");
    deleteButton.onclick=function(){
        var index = todoList.indexOf(ti);
        todoList.splice(index,1);
        localStorage.removeItem("ToDo");
        localStorage.setItem("ToDo", JSON.stringify(todoList))
        main();
    }
    var dBi = document.createElement("img")
    dBi.src="../../Icons/delete1.png";
    dBi.classList.add("imageIcons")
    deleteButton.classList.add("forButton","deleteButton");
    deleteButton.appendChild(dBi);
    li.appendChild(finishedButton);
    if(edited==true){
        if(editedElement==ti){
            var inp = document.createElement("input");
            var sub = document.createElement("button")
            sub.classList.add("sub");
            sub.onclick=function(){
                console.log("acitve");
                
                var index = todoList.indexOf(ti);
                todoList.splice(index,1,inp.value);  
                localStorage.removeItem("ToDo");
                localStorage.setItem("ToDo", JSON.stringify(todoList))
                main();
            }
            inp.classList.add("inp");
            var icon = document.createElement("img");
            icon.classList.add("icon");
            icon.src="../../Icons/submit.png";
            sub.appendChild(icon)
            li.appendChild(inp);
            li.appendChild(sub)
        }
        else{
            var p = document.createElement("p");
            p.classList.add("p")
            var pin = document.createTextNode(ti);
            p.appendChild(pin);
            li.appendChild(p);
        }
    }
    else{
        var p = document.createElement("p");
        p.classList.add("p")
        var pin = document.createTextNode(ti);
        p.appendChild(pin);
        li.appendChild(p); 
    }
    
    li.appendChild(editButton);
    li.appendChild(deleteButton);
    ul.appendChild(li);
    el.appendChild(ul)
    

    
}
function pushAccompl(atd){
    var storage = JSON.parse(localStorage.getItem("acc"));
    if(storage!=null){
        if(storage.length==10){
            storage.splice(0,1);
        }
        accomplished=storage;
    }
    if(atd.length >0){
        accomplished.push(atd);
        localStorage.removeItem("acc");
        localStorage.setItem("acc",JSON.stringify(accomplished))
    }
    
}