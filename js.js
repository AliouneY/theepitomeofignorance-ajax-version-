loadContent();
$('#everything').submit(function(e)
						{e.preventDefault();
	
							$.post('enterContent.php', {question: $('#ask').val()}).done(function()
																						 {
																							console.log("Successful entry!");
																							$('#ask').val('');
																						 });
																						 loadContent();
						});
function loadContent()
{
	$.post('loadContent.php').done(function(data)
								   {
									   var contentArray = JSON.parse(data);
										var divContents = "";
										
										for(var i in contentArray)
										{
											divContents += "<div> \
																<p>Question:" + contentArray[i].question + "</p> \
																<input class=\"btnDesign\" type=\"submit\" name=\"btn" + contentArray[i].id + "\" value=\"Submit an Answer\">\
																<textarea class=\"textRules\" name=\"area1" + contentArray[i].id + "\" maxlength=\"250\"></textarea>\
															</div>";
										}
										
										$('#contentContainer').html(divContents);
								   });
}

