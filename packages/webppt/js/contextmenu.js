/*右键菜单选择动画效果*/
var contextmenu = function() {
	function $(selector) {
		return document.querySelector(selector)
	}
	document.addEventListener("contextmenu", function(e) {
		e.preventDefault();
		var md = $(".md-modal");
		md.classList.add("md-show");

	})
	document.addEventListener("click", function(e) {
		e.preventDefault();
		var md = $(".md-modal");
		var btn = $(".md-close");
		if (btn && btn.contains(e.target)) {
			md.classList.remove("md-show");
		}
		if (md.contains(e.target)) {
			return
		}
		md.classList.remove("md-show");
	})

	return {
		hide: function() {
			$(".md-modal").classList.remove("md-show");
		}
	};
}
export default contextmenu
