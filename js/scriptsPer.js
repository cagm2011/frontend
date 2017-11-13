$(function(){
    cargarPersonajes('https://swapi.co/api/people/');
});

function cargarPersonajes(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            var personajes = document.getElementById("personajes");
            //console.log(personajes);
            $("#personajes").empty();

            var html = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i].name);
                html += '<div class="col-lg-4 col-md-6 mb-4">';
                html += '    <div class="card">';
              //html += '        <img class="card-img-top" src="http://placehold.it/250x250" alt="">';
                html += '        <img class="card-img-top" src="img/FrontEnd/personajes/'+data.results[i].name+'.jpg"+>';
                html += '        <div class="card-body">';
                html += '            <h4 class="card-title">'+data.results[i].name+'</h4>';
                html += '            <p class="card-text">Especies: ';
                html += '            <ul>';
                for(var j=0; j<data.results[i].species.length;j++){
                    buscarEspecies(data.results[i].species[j]);
                }
                html += '   </ul>     </p>';
                html += '            <p class="card-text">Peliculas: ';
                html += '            <ul>';
                for(var j=0; j<data.results[i].characters.length;j++){
                    buscarPeliculas2(data.results[i].films[j]);
                }
                html += '   </ul>     </p>';
                html += '        </div>';
                html += '    </div>';
                html += '</div>';
            }
            $("#personajes").html(html);

            $("#anterior").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    cargarPersonajes(data.previous);
            });
            $("#siguiente").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    cargarPersonajes(data.next);
            });
        },
        error: function (e) {

        }
    });
}

function buscarEspecies(url){
    var nombre = '';
    var clasificacion = '';
    var idioma = '';
    var planeta = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            nombre = '<li>'+data.name+'</li>';
            clasificacion = '<li>'+data.classification+'</li>';
            idioma = '<li>'+data.language+'</li>';
            planeta = '<li>'+buscarPlaneta2(data.homeworld)+'</li>';
        }
    });
    return nombre, clasificacion, idioma, planeta;
}

function buscarPlaneta2(url){
    var planeta = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            planeta = '<li>'+data.name+'</li>';
        }
    });
    return planeta;
}

function buscarPeliculas2(url){
    var episodio = '';
    var titulo = '';
    $.ajax({
        url: url,
        method: 'GET',
        async: false,
        success: function(data){
            episodio = '<li>'+data.episode_id+'</li>';
            titulo = '<li>'+data.title+'</li>';
        }
    });
    return episodio, titulo;
}