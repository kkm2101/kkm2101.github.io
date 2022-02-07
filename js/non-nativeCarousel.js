var nonnativeSnailArray = [
            ['Allopeas clavulinum', 'Allopeas_clavulinum.jpg'],
            ['Allopeas gracile', 'Allopeas_gracile.jpg'],
            ['Ambigolimax valentianus', 'Ambigolimax_valentianus.jpg'],
            ['Arion intermedius', 'Arion_intermedius.jpg'],
            ['Beckianum beckianum', 'Beckianum_beckianum.png'],
            ['Bradybaena similars', 'Bradybaena_similars.JPG'],
            ['Bulimulus guadalupensis', 'Bulimulus_guadalupensis.jpg'],
            ['Ceciliodes aperta', 'Ceciliodes_aperta.png'],
            ['Cornu aspersum', 'Cornu_aspersum.jpg'],
            ['Cyclotropis sp', 'Cyclotropis_sp.jpg'],
            ['Deroceras laeve', 'Deroceras_laeve.jpg'],
            ['Deroceras reticulatum', 'Deroceras_reticulatum.jpg'],
            ['Euglandina rosea', 'Euglandina_rosea.jpg'],
            ['Gonaxis kibweziensis', 'Gonaxis_kibweziensis.jpg'],
            ['Gullela bicolor', 'Gullela_bicolor.png'],
            ['Hawaii miniscula', 'Hawaii_miniscula.png'],
            ['Laevicaulis alte', 'Laevicaulis_alte.jpg'],
            ['Lamellaxis micra', 'Lamellaxis_micra.jpg'],
            ['Liardetia doliolum', 'Liardetia_doliolum.jpg'],
            ['Limacus flavus', 'Limacus_flavus.jpg'],
            ['Limax maximus', 'Limax_maximus.jpg'],
            ['Lissachatina fulica', 'Lissachatina_fulica.jpg'],
            ['Meghimatium bilineatum', 'Meghimatium_bilineatum.jpg'],
            ['Milax gagates', 'Milax_gagates.jpg'],
            ['Opeas hannense', 'Opeas_hannense.jpg'],
            ['Ovachlamys fulgens', 'Ovachlamys_fulgens.jpg'],
            ['Oxychilus alliarius', 'Oxychilus_alliarius.jpg'],
            ['Pallifera', 'Pallifera.jpg'],
            ['Parmarion martensi', 'Parmarion_martensi.jpg'],
            ['Paropeas achatinaceum', 'Paropeas_achatinaceum.jpg'],
            ['Polygyra cereolus', 'Polygyra_cereolus.png'],
            ['Sarasinula plebeia', 'Sarasinula_plebeia.jpg'],
            ['Sinployea', 'Sinployea.jpg'],
            ['Subulina octona', 'Subulina_octona.jpg'],
            ['Succinea costaricana', 'Succinea_costaricana.jpg'],
            ['Succinea unicolor', 'Succinea_unicolor.jpg',],
            ['Vallonia pulchella', 'Vallonia_pulchella.png'],
            ['Veronicella cubensis', 'Veronicella_cubensis.png'],
            ['Zonitoides arboreus', 'Zonitoides_arboreus.jpg'],
        ];


var i = 1;


var nonnativeJSCarouselImage = "<div class=\"carousel-item active\"><p id=\"idName\"><i>" + nonnativeSnailArray[0][0] + "</i></p><a href=\"finalPage.html?" + nonnativeSnailArray[0][1] + "\"> <img id=\"carouselImageStyle\" class=\"d-block\" src=\"non-nativeSnails/" + nonnativeSnailArray[0][1] + "\"></img></a></div>";
    


while (i < nonnativeSnailArray.length) {

    nonnativeJSCarouselImage = nonnativeJSCarouselImage + "<div class=\"carousel-item\">" + "<p id=\"idName\"><i>" + nonnativeSnailArray[i][0] + "</i></p><a href=\"finalPage.html?" + nonnativeSnailArray[i][1] + "\"><img id=\"carouselImageStyle\" class=\"d-block\" src=\"non-nativeSnails/" + nonnativeSnailArray[i][1] + "\"></img></a></div>";
        
    i++;
}

document.getElementById("nonnativeCarousel").innerHTML = nonnativeJSCarouselImage;



//https://lage.us/Javascript-Pass-Variables-to-Another-Page.html#:~:text=There%20are%20two%20ways%20to,query%20string%20with%20the%20URL.





