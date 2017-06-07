// 初始状态为箭头闭合
$("span").nextAll("ul").hide();
// 注册点击事件
$("span").click(function(){
	// console.log('jaja ');
	// console.log($(this).nextAll("ul").attr("aa"));
	// 根据当前点击箭头有没有aa属性来确定点击后是展开还是闭合
	if($(this).nextAll("ul").attr("aa")=="ss"){
		$(this).nextAll("ul").hide();
		$(this).removeClass("down");
		$(this).addClass("right");
		$(this).nextAll("ul").removeAttr("aa");
	}else{
		$(this).nextAll("ul").show();
		$(this).removeClass("right");
		$(this).addClass("down");
		$(this).nextAll("ul").attr("aa","ss");
	}
})

