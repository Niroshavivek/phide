$(document).ready(function () {
    var a;           
    $('.showSingle').click(function() {
        $('.targetDiv').hide();
        a=$(this).attr('value');
        $('#div'+$(this).attr('value')).show();
    });
    $('#su').on('click', function(){
        var fun=$('#s').val();
        var txt=$('#t').val();
        var st=fun+"-"+txt;
        var w= document.createElement("li");
        w.innerHTML = st;           
        $('#div'+a).append(w);
    });
});