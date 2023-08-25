function Evento (){

    function rostoSorrindo(){
        var x = document.getElementById("RostoSorrindo").name;
        document.getElementById("demo").innerHTML = x;
    }

    function rostoSuplicante(){
        var y = document.getElementById("RostoSuplicante").name;
        document.getElementById("demo").innerHTML = y;
    }

    function rostoSorridente(){
        var z = document.getElementById("RostoSorridente").name;
        document.getElementById("demo").innerHTML = z;
    }


    return(
    <div>
        <button type="submit" name = "Rosto sorrindo" id = "RostoSorrindo" onClick={rostoSorrindo}><img class = "botao" src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/90/Twemoji_1f600.svg/1200px-Twemoji_1f600.svg.png"></img></button>
        <button ><img class="botao" name = "Rosto suplicante" id="RostoSuplicante" onClick = {rostoSuplicante} src="https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f97a.png"></img></button>
        <button ><img class="botao" name = "Rosto sorridente" id="RostoSorridente" onClick={rostoSorridente} src = "https://images.emojiterra.com/google/noto-emoji/unicode-15/color/512px/1f60a.png"></img></button>
        <p id="demo"></p>

    </div>
    )
}

export default Evento