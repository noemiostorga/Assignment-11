$(document).ready(function(){

	
	var mapImg = data.results.map(function(item) {
		return {
			'title': item.title,
			'price': item.price,
			'shop_name': item.Shop.shop_name,
			'currency_code': item.currency_code,
			'url_170x135': item.Images[0]['url_170x135'],
			'url': item.url  
		};
	});

	var newData = {mapImg: mapImg};//make it into an object

	var templateString = $("#ListcatImg").text();
	var listHTML = Mustache.render(templateString, newData);
	$("#catAdContainer").html(listHTML);


});











