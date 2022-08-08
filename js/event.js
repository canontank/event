var imgList = new Array(
	'2022-03', '2022-04', '2022-05_1', '2022-05_2', '2022-06', '2022-07', '2022-08', '2022-08_2'
);
var index = imgList.length - 1;

$(function() {
	clickPrevBtn();
	clickNextBtn();
    setImage();
});

function clickPrevBtn() {
    $("#prevBtn").click(function() {
		if (index == 0)
			return;
        index -= 1;
		setImage();
    });
}

function clickNextBtn() {
    $("#nextBtn").click(function() {
		if (index == imgList.length - 1)
			return;
        index += 1;
		setImage();
    });
}

function setImage() {
	$('#title').html(imgList[index]);
	$('#event').html('');
    $('#event').append($('<div/>', {})
        .append($('<img/>', { src : 'img/' + imgList[index] + '.jpg' }))
    );
}
