$(function() {
	$("#jjjj").show();
	$("#aaaa").on('click',function(){
		#("#aaaa").hide();
	});
	
});



function ckoutLogin() {
	alert(123);
	var usernameId = $("#usernameId").val();
	var passwordId = $("#passwordId").val();
	if(usernameId == "guanzihao" && passwordId = "haoaimeng") {
		$("#jjjj").show();
		alert('登陆成功');
		return true;
	}
	return false;

}


