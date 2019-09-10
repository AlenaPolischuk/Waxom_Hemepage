function messageCart() {
    alert ('No products in the bag')
}
function messageSearch () {
    var search=prompt('What are you looking for?')
}
(function($) {
"use strict";

// manual carousel controls
$('.next').click(function(){ $('.carousel').carousel('next');return false; });
$('.prev').click(function(){ $('.carousel').carousel('prev');return false; });
    
})(jQuery);

$(document).ready(function () {

    var show = true;
    var countbox = ".benefits__inner";
    $(window).on("scroll load resize", function () {
        if (!show) return false; // Отменяем показ анимации, если она уже была выполнена
        var w_top = $(window).scrollTop(); // Количество пикселей на которое была прокручена страница
        var e_top = $(countbox).offset().top; // Расстояние от блока со счетчиками до верха всего документа
        var w_height = $(window).height(); // Высота окна браузера
        var d_height = $(document).height(); // Высота всего документа
        var e_height = $(countbox).outerHeight(); // Полная высота блока со счетчиками
        if (w_top + 1000 >= e_top || w_height + w_top == d_height || e_height + e_top < w_height) {
            $('.benefits__number').css('opacity', '1');
            $('.benefits__number').spincrement({
                thousandSeparator: "",
                duration: 1200
            });

            show = false;
        }
    });

});
function test() {
var p = document.getElementById('preloader');
var c = document.getElementById('content');

p.style.display = 'none';
c.style.display = 'block';
}



    var countrysH={};
    var countryName;
    var capitalName;

    function addOneMore1() {
       addOneMore();
       addCountry(countryName,capitalName);
       alert ("список стран:" + listCountrys() ); 
    }

    function addOneMore() {
        countryName=prompt('Введите название страны');
        capitalName=prompt('Введите столицу страны');
    }
    function addCountry(countryName,capitalName) {
        countrysH[countryName]=capitalName;
    }
    function checkInfo1() {
        checkInfo();
        getCountryInfo(countryName);
        alert(getCountryInfo(countryName));
    }
    function checkInfo() {
        countryName=prompt('Введите название страны:');}

    function getCountryInfo(countryName) {
        if ( countryName in countrysH )
            return 'страна: ' + countryName + ' столица: ' + countrysH[countryName] ;
        else
            return 'нет информации о стране ' + countryName + '!';
    }
    function listCountry() {
        
        alert ("список стран:" + listCountrys());
    }

    function deleteInfo() {
        deleteC();
        deleteCountry(countryName);
        alert ("список стран:" + listCountrys());
    }
    function deleteC(){
        countryName=prompt('Введите название страны');
    }
    function deleteCountry(countryName) {
        delete countrysH[countryName];
    }

    function listCountrys() {
        var res="";
        for ( var CN in countrysH )
            res+='\n'+getCountryInfo(CN);
        return res;}

        addCountry('Германия','Берлин');
        addCountry('Венгрия','Будапешт');
        addCountry('Франция','Париж');
    
