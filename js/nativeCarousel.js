var nativeSnailArray = [
    ['Auriculella pulchra', 'Auriculella_pulchra.jpg'],
    ['Auriculella turricula', 'Auriculella_turricula.jpg'],
    ['Cookeconcha', 'Cookeconcha_with_baby.jpg'],
    ['Helicinidae Maui', 'Helicinidae_Maui.jpg'],
    ['Kaala subrutila', 'kaala_subrutila.jpg'],
    ['L sanguinea', 'L_sanguinea.jpg'],
    ['Pupillidae sp', 'Pupillidae_sp.jpg'],
    ['S baldwini Maui', 'S_baldwini_Maui.jpg'],
    ['S lumbalis', 'S_lumbalis.jpg'],
    ['Tornatellides', 'Tornatellides.jpg'],
]




var i = 1;


var nativeJSCarouselImage = "<div class=\"carousel-item active\"><p id=\"idName\"><i>" + nativeSnailArray[0][0] + "</i></p><img id=\"carouselImageStyle\" class=\"d-block\" src=\"nativeSnails/" + nativeSnailArray[0][1] + "\"></img></div>";
    //use <a href=\"nativeFinalPage.html?" + nativeSnailArray[i][1] + "\">


while (i < nativeSnailArray.length) {

    nativeJSCarouselImage = nativeJSCarouselImage + "<div class=\"carousel-item\">" + "<p id=\"idName\"><i>" + nativeSnailArray[i][0] + "</i></p><img id=\"carouselImageStyle\" class=\"d-block\" src=\"nativeSnails/" + nativeSnailArray[i][1] + "\"></img></div>";
    
    //use <a href=\"nativeFinalPage.html?" + nativeSnailArray[i][1] + "\">
        
    i++;
}


document.getElementById("nativeCarousel").innerHTML = nativeJSCarouselImage;