$(function(){
	$.get("/ssids", function(data){
		if(data.length == 0){
			$('.before-submit').hide();
			$('#no-networks-message').removeClass('hidden');
		} else {
			$.each(data, function(i, val){
        $('<option />').appendTo('#ssid-select').attr('value', val.ssid).text(val.ssid);
			});
		}
	})

	$('#connect-form').submit(function(ev){
		$.post('/connect', $('#connect-form').serialize(), function(data){
			$('.before-submit').hide();
			$('#submit-message').removeClass('hidden');
		});
		ev.preventDefault();
	});
});
