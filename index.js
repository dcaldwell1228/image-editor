window.addEventListener('DOMContentLoaded', (event) => {
    setInterval(
        ()=>{
            var blur = document.getElementById("blur").value;
            var brightness = document.getElementById("brightness").value;
            var contrast = document.getElementById("contrast").value;
            var grayscale = document.getElementById("grayscale").value;
            var hue = document.getElementById("hue").value;
            var invert = document.getElementById("invert").value;
            var opacity = document.getElementById("opacity").value;
            var saturate = document.getElementById("saturate").value;
            var sepia = document.getElementById("sepia").value;
            var image = document.getElementById("image");

            image.style.filter = "blur("+ blur +"px) "
            + "brightness("+ brightness +"%) "
            + "contrast("+ contrast +"%) "
            + "grayscale("+ grayscale +"%) "
            + "hue-rotate("+ hue +"deg) "
            + "invert("+ invert +"%) "
            + "opacity("+ opacity +"%) "
            + "saturate("+ saturate +"%) "
            + "sepia("+ sepia +"%) ";
        });
        var resetButton = document.getElementById('reset');
        resetButton.addEventListener('click', ()=> {
            document.getElementById("blur").value = 0;
            document.getElementById("brightness").value = 100;
            document.getElementById("contrast").value = 100;
            document.getElementById("grayscale").value = 0;
            document.getElementById("hue").value = 0;
            document.getElementById("invert").value = 0;
            document.getElementById("opacity").value = 100;
            document.getElementById("saturate").value = 100;
            document.getElementById("sepia").value = 0;
            
        });
});