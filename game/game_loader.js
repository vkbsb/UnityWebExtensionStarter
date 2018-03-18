var gameInstance = UnityLoader.instantiate("gameContainer", "Build/index.json");

window.addEventListener('load', function(){
    console.log("Everything is loaded");
    var fsb = document.getElementById("fsb");
    if(fsb) {
        fsb.addEventListener('click', function(e){
            gameInstance.SetFullscreen(1);
        });
    }
})