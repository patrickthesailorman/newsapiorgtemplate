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
				console.log("options added");
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
				console.log("i ran");
				if (data2.status === "ok") {
					console.log(data2);
					for (var i = 0; i < data2.articles.length; i++) {
						var theDiv = document.createElement("DIV");
						var headline = document.createElement("H2");
						var link = document.createElement('a');
						headline.setAttribute("Id", "Id" + i)
						link.innerHTML = data2.articles[i].title;
						link.href = data2.articles[i].url;
						theDiv.setAttribute("class", "boxes")
						theDiv.appendChild(headline);
						headline.appendChild(link);
						var image = document.createElement("IMG");
						image.setAttribute("src", data2.articles[i].urlToImage)
						theDiv.appendChild(image);
						var descrip = document.createElement("H4");
						descrip.innerHTML = data2.articles[i].description;
						theDiv.appendChild(descrip);
						document.getElementById("news").appendChild(theDiv);
					}
				}
			},
		})
	})
});