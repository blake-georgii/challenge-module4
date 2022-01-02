for(var i = 0; i < localStorage.length; i++){
    var li = $('<li>').text(localStorage.key(i) + ' - ' + localStorage.getItem(localStorage.key(i)));
    console.log();
    $('ol').append(li);
}

$('#clear').click(function(){
    localStorage.clear()});