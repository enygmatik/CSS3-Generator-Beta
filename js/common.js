//jQuery UI
$(function () {
    $(".slider").slider();
});
$(function () {
    $("#accordion").accordion({
        collapsible: true
    });
});

var border_radius = 20,
    height = 35,
    width = 70,
    font_size = 12,
    uppercase = 'none',
    uppercase_slider = $('#up_text'),
    final_btn = $('#autobtn'),
    box_shadow_slider = $('#box_shadow');

//BORDER RADIUS
$("#slider-border-radius").slider({
    value: border_radius,
    min: 0,
    max: 100,
    step: 1,
    animate: true,
    range: "min",
    slide: function (event, ui) {
        setRadius(ui.value);
    }

});
//FONT SIZE
$("#slider-font-size").slider({
    value: font_size,
    min: 8,
    max: 72,
    step: 1,
    animate: true,
    range: "min",
    slide: function (event, ui) {
        setFont(ui.value);
    }
});



//BUTTON HEIGHT
$("#slide-btn-height").slider({
    value: height,
    min: 15,
    max: 100,
    step: 1,
    animate: true,
    range: "min",
    slide: function (event, ui) {
        setHeight(ui.value);
    }
});

//BUTTON WIDTH
$("#slide-btn-width").slider({
    value: width,
    min: 50,
    max: 200,
    step: 1,
    animate: true,
    range: "min",
    slide: function (event, ui) {
        setWidth(ui.value);
    }
});

function setWidth(value) {
    width = value;

    $(final_btn).css('width', value);
    $('#label_2').text(value + "px");
}

function setHeight(value) {
    height = value;

    $(final_btn).css('height', value);
    $('#label_1').text(value + "px");

}

function setRadius(value) {
    border_radius = value;

    $(final_btn).css('border-radius', value);
    $('#label_3').text(value + "px");

}

function setFont(value) {
    font_size = value;

    $(final_btn).css('font-size', value);
    $('#label_4').text(value + "px");
}

setWidth(width);
setHeight(height);
setRadius(border_radius);
setFont(font_size);


//BUTTON STYLE UPPERCASE
$(uppercase_slider).click(function() {
    if($(uppercase_slider).is(':checked')){
        $(final_btn).css('text-transform', 'uppercase');
        uppercase = "uppercase"}
    else{
        $(final_btn).css('text-transform', 'none');
        uppercase = "none";}
});

//INSERT BUTTON TEXT
$('#button_text').bind("keyup blur", function(){
    var getButtonText2 = $('#button_text').val();
    $(final_btn).text(getButtonText2);
});

//INSERT CODE IN WINDOWS
$(final_btn).click(
    function() {
        if($(box_shadow_slider).is(':checked')){ /*<---insert with box-shadow*/
            var getButtonText = $('#button_text').val(),
                getHtml = "\r\n" + "<button type='button' class='.button'>" + getButtonText + "</button> ";
            $('.css_code').text('\r\n.button{ \r\n    height:' + height + 'px; \r\n    width: ' + width + 'px; \r\n    border-radius: '+ border_radius +'px; \r\n    font-size: '+ font_size +'px; \r\n    text-align: center; \r\n    text-transform: ' + uppercase +'; \r\n    background-color:#2ECC71; \r\n    font-family: Economica; \r\n    border: 1px solid #2ECC71;  \r\n    box-shadow: 0px 4px 0px #27AE60;} \r\n .button:active { \r\n    box-shadow: 0px 2px 0px #27AE60; \r\n    position: relative; \r\n    top: 2px; }');
            $('#html_code').text(getHtml);
        }

        else { /*<---insert without box-shadow*/
            getButtonText = $('#button_text').val();
            getHtml = "\r\n" + "<button type='button' class='.button'>" + getButtonText + "</button> ";
            $('.css_code').text('\r\n.button{ \r\n    height:' + height +'px; \r\n    width: ' + width + 'px; \r\n    border-radius: '+ border_radius +'px; \r\n    font-size: '+ font_size +'px; \r\n    text-align: center; \r\n    font-family: Economica; \r\n    background-color:#2ECC71; \r\n    border: 1px solid #2ECC71;\r\n    text-transform: ' + uppercase +';}');
            $('#html_code').text(getHtml);
        }
    });

$(box_shadow_slider).click(function(){
    if($(box_shadow_slider).is(':checked')){
        $(final_btn).addClass("box-shadow");
    } else{
        $(final_btn).removeClass("box-shadow");
    }
});

