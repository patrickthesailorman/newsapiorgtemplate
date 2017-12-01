/*global $ APIKEY*/

 $(document).ready(function() {
  console.log("ready");
  
  $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/sources",
      data: {category:"technology", language:"en", country:"us", apiKey: APIKEY},
      success: function(data) {
          if(data.status === "ok"){
              console.log(data)
              for(var i=0; i < data.sources.length; i ++) {
                  var source = document.createElement("OPTION");
                  source.setAttribute("value", data.sources[i].id)
                  source.innerHTML= data.sources[i].name;
                  document.getElementById('selection').appendChild(source);
              }
              console.log("options added");
          } 
      }
  })
      
      $('#source').submit(function(event) {
        event.preventDefault();
       // alert(document.getElementById("selection").value)
       document.getElementById("news").innerHTML = "";
        
      
      
      $.ajax({
      method: "GET",
      url: "https://newsapi.org/v2/top-headlines",
      data: { sources: document.getElementById('selection').value, apiKey: APIKEY},
      success: function(data2) {
          if(data2.status === "ok"){
              console.log(data2);
              for(var i=0; i < data2.articles.length; i ++) {
                  var headline = document.createElement("H2");
                  var link = document.createElement('a');
                   headline.setAttribute("Id", "Id" + i)
                  link.innerHTML = data2.articles[i].title;
                  link.href = data2.articles[i].url;
                  document.getElementById("news").appendChild(headline);
                  document.getElementById('Id' + i).appendChild(link);
                  
                  var image = document.createElement("IMG");
                  image.setAttribute("src", data2.articles[i].urlToImage)
                  document.getElementById("news").appendChild(image);

                  var descrip = document.createElement("H4");
                  descrip.innerHTML= data2.articles[i].description;
                  document.getElementById("news").appendChild(descrip);
              }
          } 
      },
      // error: function(error) {
      //  console.log("failed");
      // }
  })
})
});
//   .done(function( data ) {
//       console.log( data );
//       console.log( data ).status;
//   });

  
//     $("#getNews").on('click',function() {
    
//     $.ajaxSetup ({cache:false});
    
//     $.getJSON("https://newsapi.org/v2/top-headlines?sources=bbc-news&apiKey=", function(data) {
//   //$(".message").append(data[0].content + "<p>— " + data[0].title + "</p>")

//         $("#selection").html(data.articles.each.title&data.articles.each.url);
        
        
//     });
//     });
// });