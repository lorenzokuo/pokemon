$(document).ready(function(){
    for (var i=1; i<=151; i++){
        $('#pokemons').append('<img src="http://pokeapi.co/media/sprites/pokemon/' + i + '.png">');
    }
});