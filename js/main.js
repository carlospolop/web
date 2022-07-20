////////////////////////////// Usefull Functions

// --------------random Int-----------------------------\\
function getRandomInt(min, max) {
	min = Math.ceil(min);
	max = Math.floor(max);
	return Math.floor(Math.random() * (max - min)) + min;
}
// --------------random Int-----------------------------\\

////////////////////////////// \Usefull Functions

(function ($) {
	$(document).ready(function () {

        //////////////// Smooth scroll 
		$(document).on("click", 'a[href^="#"]', function (event) {
			event.preventDefault();
			$("html, body").animate(
				{
					scrollTop: $($(this).attr("href")).offset().top - 100,
				},
				500
			);
		});
        //////////////// \Smooth scroll 


        //////////////// Random Hacktricks Link
		function getHacktricksLink() {
			$.ajax({
				type: "GET",
				//     // url: "https://book.hacktricks.xyz/sitemap.xml" ,
				url: "./sitemap.xml",
				dataType: "xml",
				error: function (e) {
					alert("An error occurred while processing XML file");
					console.log("XML reading Failed: ", e);
				},
				success: function (response) {
					rand = getRandomInt(0, $(response).find("loc").length);
					link = $(response).find("loc")[rand].textContent;
					return link;
				},
			});
		}

		$("#MagicRandomHacktricks").on("click", function (event) {
            event.preventDefault();
			getHacktricksLink();
			window.open(link, "_blank");
		});

        //////////////// \Random Hacktricks Link
	});
})(jQuery);
