function postClear() {
    document.getElementById('post-creator').value = ''
}

$(document).ready(function() {    
	$.ajax({
	type: 'GET',
	url: 'http://ce-sample-api.herokuapp.com/posts.json',
	complete: function(res) {
		console.log(res.responseJSON);
		for(var i = 0; i < 10; i++) {
			var $newdiv = $('<div class="post"><p class="post-content">'+ res.responseJSON.posts[i].content + '</div>')
			$('.container').append($newdiv);
			} 
		}
	})
    
	$('#js-post-create-btn').on('click', function(e) {
		var obj = { post: { content: $('#post-creator').val() } };
		$.post('http://ce-sample-api.herokuapp.com/posts.json', obj, function(res) {
			console.log(res);
			postClear()
			 
			$.ajax({
				type: 'GET',
				url: 'http://ce-sample-api.herokuapp.com/posts.json',
				complete: function(res) {
					console.log(res)
					$('#top-post')[0].innerHTML = res.responseJSON.posts[0].content
				}
			});
		});
	});
	
		for(var i = 1; i < 6; i++){
			var $pageNum = $('<button class = "link">' + i + '</button>')
				$('body').append($pageNum);
		}
});

