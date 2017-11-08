$(function(){
    cargarPlanetas('https://swapi.co/api/planets/');
});

function cargarPlanetas(url) {
    $.ajax({
        url: url,
        method: 'GET',
        success: function (data) {
            console.log(data);
            var planetas = document.getElementById("planetas");
            //console.log(planetas);
            $("#planetas").empty();

            var html = '';
            for (var i = 0; i < data.results.length; i++) {
                console.log(data.results[i].name);
                html += '<div class="col-lg-4 col-md-6 mb-4">';
                html += '    <div class="card">';
                html += '        <img class="card-img-top" src="http://placehold.it/250x250" alt="">';
                html += '        <div class="card-body">';
                html += '            <h4 class="card-title">'+data.results[i].name+'</h4>';
                html += '            <p class="card-text">'+data.results[i].climate+'</p>';
                html += '            <p class="card-text">'+data.results[i].terrain+'</p>';
                html += '            <p class="card-text">'+data.results[i].surface_water+'</p>';
                html += '        </div>';
                html += '        <div class="card-footer">';
                html += '            <a href="#" class="btn btn-primary">Read more!</a>';
                html += '        </div>';
                html += '    </div>';
                html += '</div>';
            }
            $("#planetas").html(html);

            $("#anterior").on('click', function(e){
                e.preventDefault();
                if(data.previous!=null)
                    cargarPlanetas(data.previous);
            });
            $("#siguiente").on('click', function(e){
                e.preventDefault();
                if(data.next!=null)
                    cargarPlanetas(data.next);
            });
        },
        error: function (e) {

        }
    });
}