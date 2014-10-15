$("#submit").on('click', function() {
    $.post("./send.php", $("#contact_form").serialize(),  function(response) {
        $('#success').html(response);
        //$('#success').show();
    });
    return false;
});

