var toRow = function(entry){
	return ['<tr>','<td>',new Date(entry.time),'</td>','<td>',entry.name, '</td>','<td>', entry.comment, '</td>','</tr>'].join(' ');
};
var generateTable = function(comments){
	return '<table><tr><th>Time</th><th>Name</th><th>Comment</th></tr>' + comments.map(toRow).join(' ') + '</table>';
};
$(document).ready(function(){
    $("button").click(function(){
        $.post("comment",
        {
          name: $('input[name="name"]').val(),
          comments: $('textarea[name="comment"]').val()
        },
        function(data,status){
	        var comments = JSON.parse(data);
			console.log(comments,"+++++++");
			$('#comments').html(generateTable(comments));
			$('input[name="name"]').val() = '';
		    $('textarea[name="comment"]').val() = '';
        });
    });
});
