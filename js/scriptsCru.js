$(function(){
    cargarCruceros('https://swapi.co/api/starships/');
});

function cargarCruceros(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            var cruceros = document.getElementById("cruceros");
            //console.log(cruceros);
            $("#cruceros").empty();

            var html = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i].name);
                html += '<div class="col-lg-4 col-md-6 mb-4">';
                html += '    <div class="card">';
              //  html += '        <img class="card-img-top" src="http://placehold.it/250x250" alt="">';
                html += '        <img class="card-img-top" src="img/FrontEnd/cruceros/'+data.results[i].name+'.jpg"+>';
                html += '        <div class="card-body">';
                html += '            <h4 class="card-title">'+data.results[i].name+'</h4>';
                html += '            <p class="card-text">'+data.results[i].model+'</p>';
                html += '            <p class="card-text">'+data.results[i].manufacturer+'</p>';
                html += '            <p class="card-text">'+data.results[i].crew+'</p>';
                html += '            <p class="card-text">'+data.results[i].passengers+'</p>';
                html += '        </div>';
                html += '    </div>';
                html += '</div>';
            }
            $("#cruceros").html(html);

            $("#anterior").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    cargarCruceros(data.previous);
            });
            $("#siguiente").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    cargarCruceros(data.next);
            });
        },
        error: function (e) {

        }
    });
}

$