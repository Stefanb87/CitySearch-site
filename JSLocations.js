$(document).ready(function(){
  $('.owl-carousel').owlCarousel({
    center: true,
    items:1,
    nav:true,
    loop:true,
    margin:10,
    responsive:{
        600:{
            items:2
        },
        950:{
            items:3
        },
        1300:{
            items:4
        },
        1800:{
            items:5
        }
    }
});

/* JQ za mapu*/

var locations = [
      ['Knez Mihailova', 44.818384, 20.457012, 4, 'https://source.unsplash.com/klXhDG8Roj4/40x40'],
      ['Studentski Trg', 44.819899, 20.458540, 5, 'https://source.unsplash.com/xXaLfz6V9rQ/40x40'],
      ['Zeleni Venac', 44.814691, 20.457015, 3, 'https://source.unsplash.com/WIJPPnoVrDs/40x40'],
      ['Narodno Pozoriste', 44.817200, 20.461020, 2, 'https://source.unsplash.com/ibqNFI6nC7g/40x40'],
      ['Crna Ovca', 44.821672, 20.457230, 1, 'https://source.unsplash.com/ibqNFI6nC7g/40x40']
    ];

    // Info Window Content
    var infoWindowContent = [
        ['<div class="info_content">' +
        '<h3>Knez Mihailova</h3>' +
        '<p>Knez Mihailova Street or Prince Michael Street, properly Kneza Mihaila (Serbian: Улица Кнез Михаилова (Улица Кнеза Михаила), Ulica Knez Mihailova, (Ulica Kneza Mihaila)) is the main pedestrian and shopping zone in Belgrade, and is protected by law as one of the oldest and most valuable landmarks of the city. Named after Mihailo Obrenović III, Prince of Serbia, it features a number of buildings and mansions built during the late 1870s.</p>' +        '</div>'],
        ['<div class="info_content">' +
        '<h3>Studentski Trg</h3>' +
        '<p>Studentski Trg or Students Square (Serbian Cyrillic: Студентски Трг) is one of the central town squares and an urban neighborhood of Belgrade, the capital of Serbia. It is located in Belgrade\'s municipality of Stari Grad.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Zeleni Venac</h3>' +
        '<p>Zeleni Venac (Literally: Green Wreath) or colloquially Zelenjak (Serbian: Зелени Венац or Зелењак, Zelenjak) is an urban neighborhood of Belgrade, the capital of Serbia. It is located in the Belgrade\'s municipalities of Savski Venac (major part) and Stari Grad.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Narodno Pozoriste</h3>' +
        '<p>The National Theatre (Serbian: Народно позориште у Београду / Narodno Pozorište u Beogradu) was founded in the latter half of the 19th century. It is located on Republic Square, at the corner of Vasina and Francuska Street in Belgrade, Serbia.</p>' +
        '</div>'],
        ['<div class="info_content">' +
        '<h3>Crna Ovca</h3>' +
        '<p>Sladoledzinica.</p>' +
        '</div>']
    ];

    var map = new google.maps.Map(document.getElementById('map'), {
      zoom: 15,
      scrollwheel: false,
      center: new google.maps.LatLng(44.818384, 20.457012),
      mapTypeId: google.maps.MapTypeId.ROADMAP
    });

    var infowindow = new google.maps.InfoWindow();

    var marker, i;

    for (i = 0; i < locations.length; i++) {  
      marker = new google.maps.Marker({
        position: new google.maps.LatLng(locations[i][1], locations[i][2]),
        map: map,
        icon: locations[i][4]
      });

//

      google.maps.event.addListener(marker, 'click', (function(marker, i) {
        return function() {
          infowindow.setContent(infoWindowContent[i][0]);
          infowindow.open(map, marker);
        }
      })(marker, i));
    }

/* JQ za datepicker */

    $('#date1').datepicker();

$('#date1').focus(function(){
    $('#date1').datepicker('show');
});

$('#date1').click(function(){
    $('#date1').datepicker('show');
});

/* Kraj JQ za datepicker */

/* JQ za slider */


  /* Kraj JQ za slider */

/* JQ za scroll to top */

$(window).scroll(function() {
        if($(this).scrollTop() > 100){
            $('#goTop').stop().animate({
                top: '600px'    
                }, 100);
        }
        else{
            $('#goTop').stop().animate({
               top: '-100px'    
            }, 500);
        }
    });
    $('#goTop').click(function() {
        $('html, body').stop().animate({
           scrollTop: 0
        }, 500, function() {
           $('#goTop').stop().animate({
               top: '-100px'    
           }, 500);
        });
    });

/* Kraj JQ za slider */

});