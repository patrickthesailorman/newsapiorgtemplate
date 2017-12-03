/*global $ APIKEY*/
$(document).ready(function() {
	console.log("ready");
	$.ajax({
		method: "GET",
		url: "https://newsapi.org/v2/sources",
		data: {
			language: "en",
			country: "us",
			category: "technology",
			apiKey: APIKEY
		},
		success: function(data) {
			if (data.status === "ok") {
				console.log(data)
				for (var i = 0; i < data.sources.length; i++) {
					var source = document.createElement("OPTION");
					source.setAttribute("value", data.sources[i].id)
					source.innerHTML = data.sources[i].name;
					document.getElementById('selection').appendChild(source);
				}
			}
		}
	})
	$('#source').submit(function(event) {
		event.preventDefault();
		document.getElementById("news").innerHTML = "";
		$.ajax({
			method: "GET",
			url: "https://newsapi.org/v2/top-headlines",
			data: {
				sources: document.getElementById('selection').value,
				apiKey: APIKEY
			},
			success: function(data2) {
				if (data2.status === "ok") {
					console.log(data2);
					for (var i = 0; i < data2.articles.length; i++) {
						var theDiv = document.createElement("DIV");
						var headline = document.createElement("H2");
						var link = document.createElement('A');
						var descrip = document.createElement("H4");
						var image = document.createElement("IMG");
						headline.setAttribute("Id", "Id" + i)
						link.innerHTML = data2.articles[i].title;
						link.href = data2.articles[i].url;
						descrip.innerHTML = data2.articles[i].description;
						image.setAttribute("src", data2.articles[i].urlToImage)
						image.setAttribute("class", "img-fluid img-thumbnail")
						theDiv.setAttribute("class", "col-xs-12; row")
						theDiv.setAttribute("headline", data2.articles[i].title)
						theDiv.setAttribute("descrip", data2.articles[i].description)
						theDiv.setAttribute("image", data2.articles[i].urlToImage)
						headline.appendChild(link);
						theDiv.appendChild(headline);
						theDiv.appendChild(descrip);
						theDiv.appendChild(image);
						
						document.getElementById("news").appendChild(theDiv);
					}
				}
			},
		})
	})
});