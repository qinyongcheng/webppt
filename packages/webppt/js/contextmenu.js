/*右键菜单选择动画效果*/
var contextmenu = function() {
	var $md = $(
		'<div class="md-modal md-effect-4"><div class="md-content"><h3>上下文菜单</h3><div><p>这里是内容</p></div><button class="md-close">关闭!</button></div></div></div>'
	).appendTo("body");
	//添加动画样式单选框 
	var str = "<b>加成</b>";
	/*
	for (var i = 1; i <= Webppt.getAnimationClassList().length; i++) {
		str += '<span><input type="radio" class="magic-radio"  name="myAnimation" value="' + i + '" id="radio' + i +
			'"/><label for="radio' + i + '" class="radio2">效果' + i + '</label> </span>';
	}
	$md.find(".md-content p").html(str).find("input[name=myAnimation]").on("click", function() {
		$(Webppt.getNextPageSelector()).data("animation", $(this).val());
	})*/

	$(document).on("contextmenu", function(e) {
		e.preventDefault();
		$md.addClass("md-show").find(".md-close").on("click", function() {
			$md.removeClass("md-show");
		})
	})
}
export default contextmenu
