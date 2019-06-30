$(document).ready(function(){

    //$("#home").load("views/home.html");

    $("#contact").load("views/contact.html");

    $("#portfolio").load("views/portfolio.html");

    $("#activities").load("views/activities.html");

    $("#team").load("views/team.html");


    initMap();
});




$(window).scroll(function(){
    if($("#menu").offset().top > 56){
        $("#menu").addClass("bg-dark");
        $("#menu").addClass("trans");
    } else{
        $("#menu").removeClass("bg-dark");
        $("#menu").addClass("trans");
    }

    if ($(window).scrollTop() > 500) {
        $("#li-nav-home").removeClass("active");
    } else{
        $("#li-nav-home").addClass("active");
    }
});

function initMap(){
    console.log("Map init...");
    var location = new google.maps.LatLng(18.281007, -70.327285);
    var map = new google.maps.Map(document.getElementById('mapa'), {
        zoom: 8, 
        center: location, 
        mapTypeId: google.maps.MapTypeId.ROADMAP
    });
    var marker = new google.maps.Marker({position: location, map: map});
}

