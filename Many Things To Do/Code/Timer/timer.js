let timer;
var timervar = 1;
var h;
var m;
var s;
var pause = 02;
var active = true;
timeinput();
function timeinput() {
    var el = document.getElementById("divtimer")
    createInput(el);

}
function createInput(el) {

    var inp1 = document.createElement("input");
    inp1.type = "number";
    inp1.id = "hour";
    inp1.min = "0";
    inp1.max = "30";
    inp1.placeholder = "hour"
    inp1.classList.add("inptimer")
    var inp2 = document.createElement("input");
    inp2.type = "number";
    inp2.id = "minute";
    inp2.min = "0";
    inp2.max = "59";
    inp2.placeholder = "minute"
    inp2.classList.add("inptimer")
    var inp3 = document.createElement("input");
    inp3.type = "number";
    inp3.id = "second";
    inp3.min = "0";
    inp3.max = "59";
    inp3.placeholder = "second"
    inp3.classList.add("inptimer")

    var b = document.createElement("button");
    b.classList.add("but")
    var bin = document.createElement("img");
    bin.src = "../../Icons/submit.png";
    bin.classList.add("imageIcons")
    b.onclick = function () {
        h = Number(inp1.value);
        m = Number(inp2.value);
        s = Number(inp3.value);
        var sum = inp1.value + inp2.value + inp3.value;
        if (sum > 0) {

            el.innerHTML = "";
            timervar = 1;
            setTimer();
        }
        else {
            alert("Chose Numbers")
            console.log(sum)
        }
    }
    var b1 = document.createElement("button")
    b1.classList.add("but")
    var b1in = document.createElement("img");
    b1in.src = "../../Icons/save.png";
    b1in.classList.add("imageIcons")
    b1.onclick = function () {
        var sum = inp1.value + inp2.value + inp3.value;
        if (sum > 0) {
            el.innerHTML = "";
        }
        else {
            alert("Chose Numbers")
            console.log(sum)
        }
    }
    b1.appendChild(b1in)
    b.appendChild(bin);
    el.appendChild(inp1);
    el.appendChild(inp2);
    el.appendChild(inp3);
    el.appendChild(b);
    el.appendChild(b1)
}
function setUpTimer() {

    var hvar = h.toString();
    var mvar = m.toString();
    var svar = s.toString();

    var el = document.getElementById("divtimer")
    var he = document.createElement("p");
    he.classList.add("ptime");
    if (hvar.length < 2) {
        var hi = document.createTextNode("0" + h);
        he.appendChild(hi);
    }
    else {
        var hi = document.createTextNode(h);
        he.appendChild(hi);
    }
    var me = document.createElement("p");
    me.classList.add("ptime")
    if (mvar.length < 2) {
        var mi = document.createTextNode("0" + m);
        me.appendChild(mi);
    }
    else {
        var mi = document.createTextNode(m);
        me.appendChild(mi);
    }

    var se = document.createElement("p");
    se.classList.add("ptime")
    if (svar.length < 2) {
        var si = document.createTextNode("0" + s);
        se.appendChild(si);
    }
    else {
        var si = document.createTextNode(s);
        se.appendChild(si);
    }
    var z1 = document.createElement("p");
    z1.classList.add("ptime");
    var z1in = document.createTextNode(":");
    z1.appendChild(z1in);
    var z2 = document.createElement("p");
    z2.classList.add("ptime");
    var z2in = document.createTextNode(":");
    z2.appendChild(z2in);

    se.appendChild(si);
    el.appendChild(he);
    el.appendChild(z1);
    el.appendChild(me);
    el.appendChild(z2);
    el.appendChild(se);
}
function setTimer() {

    setUpTimer();
    var el = document.getElementById("timenav");
    var b1 = document.createElement("button");
    b1.classList.add("but")
    var b1s = document.createElement("img");
    if (timervar= 0) {
        b1s.src = "../../Icons/stop.png";
    }
    else {
        b1s.src = "../../Icons/play.png";
    }

    b1s.classList.add("imageIcons")
    b1.appendChild(b1s);
    var b2 = document.createElement("button");
    b2.classList.add("but")
    var b2s = document.createElement("img");
    b2s.src = "../../Icons/delete1.png";
    b2s.classList.add("imageIcons")
    b2.appendChild(b2s);
    el.appendChild(b1);
    el.appendChild(b2);
    b1.onclick = function () {
        if (timervar == 1) {
            timer = setInterval(TimerHandler, 1000)
        }
        else{
            
            timer = clearInterval(timer);
            setUpTimer();
        }


    }
    b2.onclick = function () {
        s = 0;
        m = 0;
        h = 0;
        document.getElementById("timenav").innerHTML = "";
        document.getElementById("divtimer").innerHTML = "";
        timeinput();

    }

}
function TimerHandler() {
    if (s > 0) {
        s--;
    }
    else {
        if (m > 0) {
            m--;
            s = 59;
        }
        else {
            if (h > 0) {
                h--;
                m = 59;
                s = 59;
            }
            else {
                timervar = 1;
            }
        }
    }

    document.getElementById("divtimer").innerHTML = "";
    setUpTimer();
}