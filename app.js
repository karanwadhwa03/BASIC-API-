$(document).ready(function(){
$("button").click(function(event){
event.preventdefault;
$.ajax({
method:'GET',
url:'https://api.unsplash.com/search/photos?page=1&orientation=landscape&color=black&per_page=2&query=girls&client_id=Z814KRaR7WvoAfOz13dX3kbJ5A2-q33jbQZ6B0g_bQ4',
contentType:'application/json',
success:function(response){
    console.log(response)
    response.results.forEach(element => {
        $("div").append(`<img src=" ${element.urls.regular}"></img>`)
    });
    
}


})


})


})

//Z814KRaR7WvoAfOz13dX3kbJ5A2-q33jbQZ6B0g_bQ4