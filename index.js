window.addEventListener('DOMContentLoaded', (event) => {
    // image filters
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
            var rdcorners = document.getElementById("rdcorners").value;
            var borderWidth = document.getElementById("border-w").value;
            var borderColor = document.getElementById("border-color").value;
            // image filters
            image.style.filter = "blur("+ blur +"px) "
            + "brightness("+ brightness +"%) "
            + "contrast("+ contrast +"%) "
            + "grayscale("+ grayscale +"%) "
            + "hue-rotate("+ hue +"deg) "
            + "invert("+ invert +"%) "
            + "opacity("+ opacity +"%) "
            + "saturate("+ saturate +"%) "
            + "sepia("+ sepia +"%) ";
            //image rounded corners
            image.style.borderRadius = rdcorners + "px";
            //border
            image.style.border = borderWidth + "px" + " solid " + borderColor;
            //generate CSS
            var css = document.getElementById('css-code');
            css.innerHTML = `
                \/\/Copy and paste the code into your project, I would reccommend changging the img to a class name or id
                img{
                    border:${borderWidth}px solid ${borderColor};
                    border-radius:${rdcorners}px;
                    filter:blur(${blur}px) brightness(${brightness}%) contrast(${contrast}%) grayscale(${grayscale}%) 
                            hue-rotate(${hue}deg) invert(${invert}%) opacity(${opacity}%) saturate(${saturate}%) sepia(${sepia}%);
                }
            `;
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
            document.getElementById("rdcorners").value = 0;
            document.getElementById("border-w").value = 0;
        });
        //Image rotation buttons
        var img = document.getElementById("image");
        var angle = [0, 90, 180, 270];
        var current = 0;
        var rotateR = document.getElementById('rotateRight');
        var rotateL = document.getElementById('rotateLeft');
        rotateR.addEventListener('click', ()=>{
            current++;
            if (current == 4){
                current = 0;
            }
            if(current == 1 || current == 3){
                img.style.transform = `rotate(${angle[current]}deg) scale(.55)`;
            } else{
            img.style.transform = `rotate(${angle[current]}deg)`;
            }
        });
        rotateL.addEventListener('click', ()=>{
            current++;
            if (current == 4){
                current = 0;
            }
            if(current == 1 || current == 3){
                img.style.transform = `rotate(${angle[current]*-1}deg) scale(.55)`;
            } else{
            img.style.transform = `rotate(${angle[current]*-1}deg)`;
            }
        } 
    );  //ends rotateL
}); // ends DOMCotentLoaded

//functionality left to add
//---------------------------
    // maybe look into canvas and possibly download image
    // maybe a zoom in feature
    // maybe a crop feature
    // gradients