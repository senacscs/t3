
var current_fs, next_fs, previous_fs;
var left, opacity, scale;
var animating;

$(".next").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	next_fs = $(this).parent().next();
	
	$("#progressbar li").eq($("fieldset").index(next_fs)).addClass("active");
	
	next_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 1 - (1 - now) * 0.2;
			left = (now * 50)+"%";
			opacity = 1 - now;
			current_fs.css({
        'transform': 'scale('+scale+')',
        'position': 'absolute'
      });
			next_fs.css({'left': left, 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

$(".previous").click(function(){
	if(animating) return false;
	animating = true;
	
	current_fs = $(this).parent();
	previous_fs = $(this).parent().prev();
	$("#progressbar li").eq($("fieldset").index(current_fs)).removeClass("active");
	
	previous_fs.show(); 
	current_fs.animate({opacity: 0}, {
		step: function(now, mx) {
			scale = 0.8 + (1 - now) * 0.2;
			left = ((1-now) * 50)+"%";
			opacity = 1 - now;
			current_fs.css({'left': left});
			previous_fs.css({'transform': 'scale('+scale+')', 'opacity': opacity});
		}, 
		duration: 800, 
		complete: function(){
			current_fs.hide();
			animating = false;
		}, 
		easing: 'easeInOutBack'
	});
});

document.getElementById("shrek").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/f97W-nveCOM?si=LacnsReB4O2HrKiO'
})

document.getElementById("freebird").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/EUc1AhTdG3U?si=l8SGRFQKcXQqpvjU'
})

document.getElementById("ballin").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/MAREvZsLpO8?si=gi42ZieIgflThAE0'
})

document.getElementById("ballin").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/MAREvZsLpO8?si=gi42ZieIgflThAE0'
})

document.getElementById("pirata").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/-bROlO-KMto?si=1MuOm0oyH8gUW8gJ'
})

document.getElementById("banana").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/jIIjd72flAM?si=gglBWk-MaVkmvZgD'
})

document.getElementById("lore").addEventListener('click', () => {
	window.location.href = 'https://youtu.be/TimKU5bAEDQ?si=LZT1_KyYXn6WIxcP"'
})

document.onkeydown = function(e) {
	if (e.ctrlKey && 
		(e.keyCode === 67 || 
		 e.keyCode === 86 || 
		 e.keyCode === 85 || 
		 e.keyCode === 117)) {
		return false;
	} else {
		return true;
	}
};