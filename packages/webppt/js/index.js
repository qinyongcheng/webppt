/*https://wnworld.com/archives/204.html*/
import "../css/index.css" //入口文件指明的依赖css
import "n-zepto";
import "./touch.js"
import preload from "./preload.js"
import lightLoader from "./loader.js"
import "./coffee.js"
import {
	audio
} from "./audio.js"
import contextmenu from "./contextmenu.js"
import screenfull from 'screenfull';
/*翻页插件*/
const Webppt = (function() {
	const page = {
		loop: true, //是否翻页循环,
		indexAnimate: false, //首页是否支持转场动画
		loadingAnimate: true, //打开时是否显示加载动画。
		pageIndicator: true, //是否添加页面指示器  		
		preload: true, //设置是否自动预加载图片,默认自动预加载。自动预加载是页面一打开就自动预加载
		preLoadPages: 3, //预加载图片的页数
		pageIndicatorColor: [] //指示器颜色值
	};
	/*初始化参数*/
	function init() {
		//总页数
		page._totalPage = $(".webppt-wrap .page").each(function(i, e) {
			//给每个页面添加唯一标志,给每个页面下的幻灯片添加唯一标志
			var pageid = "page-" + (i + 1);
			$(this).data('id', pageid).addClass(pageid).children(".slide").each(function(i2, e2) {
				var slideid = "page-" + (i + 1) + "-" + (i2 + 1);
				$(this).data('id', slideid).addClass(slideid);
			})
		}).size();
		page.$wrap = $(".webppt-wrap").addClass("perspective"); //添加css3d透视
		var options = page.$wrap.data("options");
		if (options != undefined) {
			options = "{" + options + "}";
			options = JSON.parse(options)
			//options = eval("(" + options + ")");
			$.extend(page, options);
		}

		//向上滑动
		$(document).swipeUp(function() {
			page.up();
		})
		//向下滑动
		$(document).swipeDown(function() {
			page.down();
		})
		//左滑动，屏增加
		$(document).swipeLeft(function() {
			page.left();
		})
		//右滑动，屏减少
		$(document).swipeRight(function() {
			page.right();
		});
		$(document).on("keydown", function(t) {
			switch (t.keyCode) {
				case 65:
					page.right();
					break;
				case 37:
					page.right();
					break;
				case 68:
					page.left();
					break;
				case 39:
					page.left();
					break;
				case 38:
					page.down();
					break;
				case 87:
					page.down();
					break;
				case 40:
					page.up();
					break;
				case 83:
					page.up();
					break;
				case 32:
					page.leftUp();
					break
			}
		})
		//如果不支持触摸,比如PC端，则单击向上图标切换页面
		if (!document.hasOwnProperty("ontouchstart")) {
			$(".img-up").on('click', function(e) {
				page.up();
			})
			$(".img-left").on('click', function(e) {
				page.down();
			})
			$(".img-right").on('click', function(e) {
				page.up();
			})
		}

		//全屏
		const element = page.$wrap[0];
		$('.screenfull-menu').on('click', event => {
			if (screenfull.isEnabled) {
				screenfull.toggle(element);
			}
		});

	}
	/*新页*/
	var now = {
			row: 1,
			col: 1
		},
		/*上一页*/
		last = {
			row: 0,
			col: 0
		};
	var towards = {
		up: 1,
		right: 2,
		down: 3,
		left: 4
	};
	//动画是否正在进行，动画正在进行不能切换
	var isAnimating = false;
	var preLoadPage = 1; //预加载第几页
	//解决iPhone触摸问题
	document.addEventListener('touchmove', function(event) {
		event.preventDefault();
	}, false);
	//向上翻页
	page.up = function() {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row < page._totalPage) {
			now.row = last.row + 1;
			now.col = 1;
		} else if (page.loop) {
			now.row = 1;
			now.col = 1;
		}
		pageMove(towards.up, false);
	}
	//切换页
	page.switchPage = function(pageNo) {
		if (isAnimating) return;
		//切换页在1-总页数之间
		if (pageNo >= 1 && pageNo <= page._totalPage) {
			last.row = now.row; //上一页
			last.col = now.col;
			now.row = pageNo; //当前页等于要切换的页面
			now.col = 1;
			pageMove(towards.up, false);
		}

	}
	//向下翻页
	page.down = function() {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if (last.row > 1) {
			now.row = last.row - 1;
			now.col = 1;
		} else if (page.loop) {
			now.row = page._totalPage;
			now.col = 1;
			//如果预加载图片  则刚开始不支持向下翻页，便于预加载图片
			if (page.preload && now.row >= preLoadPage) {
				now.row = last.row;
				now.col = last.col;
				page.up();
				return;
			}
		}
		pageMove(towards.down, false);
	}
	//向左幻灯片
	page.left = function() {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if (last.row >= 1 && last.row <= page._totalPage && pageSlides > 1) {
			now.row = last.row;
			if (last.col < pageSlides) {
				now.col = last.col + 1;
			} else if (page.loop) {
				now.col = 1;
			}
			pageMove(towards.left, false);
		}
	}
	page.leftUp = function() {
		if (isAnimating) return;
		last.row = now.row, last.col = now.col;
		var t = $(getPageSlidesSelector(last)).size();
		last.row >= 1 && last.row <= page._totalPage && t > 1 ? (now.row = last.row, last.col < t ? (now
			.col =
			last.col + 1, pageMove(towards.left, !1)) : page.up()) : page.up()
	}
	//向右幻灯片
	page.right = function() {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if (last.row >= 1 && last.row <= page._totalPage && pageSlides > 1) {
			now.row = last.row;
			if (last.col > 1) {
				now.col = last.col - 1;
			} else if (page.loop) {
				now.col = pageSlides;
			}
			pageMove(towards.right, false);
		}
	}
	page.switchSlide = function(no) {
		if (isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.col = no;
		now.row = last.row;
		pageMove(towards.left, false);

	}

	//启动
	function start(options) {
		init();
		if (options != undefined && typeof(options) == "object") {
			$.extend(page, options);
		}
		//预加载插件
		if (page.preload) {
			preLoadImg(true);
		} else if (page.loadingAnimate) {
			buildLightLoader();
		} else {
			//启动初始化
			pageMove(towards.up, true);
			//生成页面指示器
			buildPageIndicator();
		}
		return page;
	}
	page.preLoadImg = function() {
		page.preload = true;
		preLoadImg(true);
	}
	//预加载图片  firststart是否是第一次启动
	function preLoadImg(firststart, tw) {
		if (firststart || now.row == (preLoadPage - 1)) {
			//预加载页数 
			preLoadPage = preLoadPage + page.preLoadPages;
			var selector = "";
			var i = firststart ? now.row : now.row + 1;
			var len = preLoadPage > page._totalPage ? page._totalPage + 1 : preLoadPage;
			for (; i < len; i++) {
				selector = `${selector},.page-${i} img,.page-${i} .preload-bg,.page-${i}.preload-bg`;
			}
			selector = selector.substr(1);
			if (selector != "") {
				//预加载页面范围
				var aImgs = []
				$(selector).each(function(i, e) {
					aImgs.push($(this));
				});
				if (firststart && page.loadingAnimate && !page.__lightLoader) { //启动加载画面 
					isAnimating = true;
					buildLightLoader();
				}
				preload(aImgs, function(percentage, times) {
					//启动初始化  
					if (firststart) {
						var percentT = percentage * 100;
						if (percentage == 1) {
							setTimeout(function() {
								page.__lightLoader && page.__lightLoader.remove();
								page.__$loader && page.__$loader.remove();
								pageMove(towards.up, firststart);
								//生成页面指示器 
								buildPageIndicator();
								isAnimating = false;
							}, (times > 2000 ? 0 : 0))
						}
					}
				}, 2000);
			}

		}
	}
	//构建加载启动动画
	function buildLightLoader() {
		var $loader = $("<div id='loader'><div class='stars'></div></div>").appendTo(".webppt-wrap");
		var c = document.createElement('canvas');
		var _lightLoader;
		if (!!(c.getContext && c.getContext('2d'))) {
			c.width = 300;
			c.height = 300;
			document.body.appendChild(c);
			_lightLoader = new lightLoader(c);
			_lightLoader.start();
			page.__lightLoader = _lightLoader;
			page.__$loader = $loader;
		}
	}

	function getPageSelector(page, notslide) { // notslide表示不包含子幻灯片
		page = page || now;
		if (notslide) {
			return ".page-" + page.row;
		}
		//同一行不同列
		if (last.row == now.row && last.col != now.col) {
			return ".page-" + page.row + "-" + page.col;
		}
		return ".page-" + page.row;
	}

	function getLastPageSelector() { // 获取上一页			
		//同一行不同列
		if (last.row == now.row && last.col != now.col) {
			return ".page-" + last.row + "-" + last.col;
		} else if (last.row != now.row && last.col > 1) {
			return `.page-${last.row}-${last.col},.page-${last.row}`;
		}
		return ".page-" + last.row;
	}

	function getPageSlidesSelector(page, notslide) {
		return getPageSelector(page, notslide) + " .slide";
	}

	function getPageSlideIndicatorID(page, num) {
		return "slide-indicator-" + page.row + "-" + num;
	}

	function getPageIndicatorID(page, num) {
		return "page-indicator-" + num;
	}
	//动画结束事件名
	var animEndEventName = (function animationEnd() {
		var body = document.body || document.documentElement;
		var animEndEventNames = {
			animation: 'animationend',
			WebkitAnimation: 'webkitAnimationEnd'
		}
		for (var name in animEndEventNames) {
			if (typeof body.style[name] === "string") {
				return animEndEventNames[name]
			}
		}
	})();
	//获取随机安全色
	function getRandomSafeColor() {
		var base = ['00', '33', '66', '99', 'CC', 'FF']; //基础色代码
		var len = base.length; //基础色长度
		var bg = new Array(); //返回的结果
		var random = Math.ceil(Math.random() * 215 + 1); //获取1-216之间的随机数
		var res;
		for (var r = 0; r < len; r++) {
			for (var g = 0; g < len; g++) {
				for (var b = 0; b < len; b++) {
					bg.push('#' + base[r].toString() + base[g].toString() + base[b].toString());
				}
			};
		};
		res = bg[random];
		return res;
	}
	//生成页面指示器
	function buildPageIndicator() {
		//添加页面指示器
		if (page.pageIndicator) {
			var $ul = $('<ul class="page-indicator"></ul>').appendTo(".webppt-wrap");
			for (var i = 0; i < page._totalPage; i++) {
				var $li = $('<li><span></span></li>').data("id", i + 1)
					.attr("id", getPageIndicatorID(now, i + 1)).css("background", page.pageIndicatorColor[i] ||
						getRandomSafeColor())
					.appendTo($ul).on("click", function() {
						page.switchPage($(this).data("id"));
					});
				if (i == 0) {
					$li.addClass("on")
				}
			}
		}
	}
	//页面切换
	function pageMove(tw, start) { //start表示是启动第一个
		var lastPage = getLastPageSelector(),
			nowPage = getPageSelector(now),
			$lastPage = $(lastPage),
			$nowPage = $(nowPage),
			nowPageAnimEnd = false, //当前页动画结束
			lastPageAnimEnd = false; //上一页动画结束
		//如果就是当页则不切换
		if ($lastPage.data("id") == $nowPage.data("id")) {
			return;
		}
		//当前页显示
		$nowPage.addClass("show threeD perspective"); //.find(".hide").removeClass("hide");
		//当前页下的第一个幻灯片显示
		$nowPage.children(".slide").first().addClass("show");
		//上下翻页时 ，为当前页幻灯片添加指示条
		var pageSlides = $(getPageSlidesSelector(now, true)).size();
		if (pageSlides > 1) {
			if (tw == towards.up || tw == towards.down) {
				if ($nowPage.children(".slide-indicator").size() <= 0) { //没有指示器则创建
					var $ul = $('<ul class="slide-indicator"></ul>').attr("id", "slide-indicator-" + now.row)
						.appendTo($nowPage);
					for (var i = 0; i < pageSlides; i++) {
						var $li = $('<li></li>').data("id", i + 1)
							.attr("id", getPageSlideIndicatorID(now, i + 1))
							.appendTo($ul).on("click", function() {
								page.switchSlide($(this).data("id"));
							});
						if (i == 0) {
							$li.addClass("on")
						}
					}
				} else {
					//第一个显示样式
					$("#slide-indicator-" + now.row + " li").removeClass("on").first().addClass("on");
				}
			} else if (tw == towards.left || tw == towards.right) {
				$("#slide-indicator-" + now.row + " li").removeClass("on");
				$("#slide-indicator-" + now.row + "-" + now.col).addClass("on");
			}
		}
		//翻页时改变页面指示器 
		if (page.pageIndicator) {
			$(".page-indicator li").removeClass("on");
			$("#page-indicator-" + now.row).addClass("on");
		}
		//如果是启动画面（）第一个画面则不添加转场效果 
		if (start && !page.indexAnimate) {
			return;
		}
		//是否预加载图片
		if (page.preload) {
			preLoadImg(false, tw);
		}
		var animationClassObj = page.getAnimationClass($nowPage.data("animation")); //获取当前页的动画类型
		var outClass = animationClassObj.outClass;
		var inClass = animationClassObj.inClass;
		//表示动画正在运行
		isAnimating = true;
		//上一页退出效果
		$lastPage.addClass(outClass).on(animEndEventName, function() {
			$lastPage.off(animEndEventName);
			$lastPage.removeClass(outClass).removeClass("perspective threeD show");
			//$lastPage.addClass("hide");
			lastPageAnimEnd = true; //上一页动画结束
			if (nowPageAnimEnd) {
				isAnimating = false;
			}
		});
		//当前页显示效果
		$nowPage.addClass(inClass).on(animEndEventName, function() {
			$nowPage.off(animEndEventName);
			$(nowPage).addClass("show perspective threeD");
			//$(nowPage).removeClass("hide"); 
			$(nowPage).removeClass(inClass);
			nowPageAnimEnd = true; //当前页动画结束
			if (lastPageAnimEnd) {
				isAnimating = false;
			}
		});

	}
	page.getAnimationClass = function getAnimationClass(animationType) {
		var animationClassList = page.getAnimationClassList();
		if (animationType && animationType <= animationClassList.length && animationType >= 1) {
			animationType = animationType - 1;
		} else {
			animationType = parseInt(Math.random() * animationClassList.length, 10);
		}
		return animationClassList[animationType];
	}
	/**
	 * 获取页面转场动画类样式
	 * @param {Object} animationType 动画类型，数字，1-67
	 */
	page.getAnimationClassList = function() {
		var animationClassList = [{
				outClass: 'pt-page-moveToLeft',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-moveToRight',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-moveToTop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-moveToBottom',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromRight pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromLeft pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromBottom pt-page-ontop'
			},
			{
				outClass: 'pt-page-fade',
				inClass: 'pt-page-moveFromTop pt-page-ontop'
			},
			{
				outClass: 'pt-page-moveToLeftFade',
				inClass: 'pt-page-moveFromRightFade'
			},
			{
				outClass: 'pt-page-moveToRightFade',
				inClass: 'pt-page-moveFromLeftFade'
			},
			{
				outClass: 'pt-page-moveToTopFade',
				inClass: 'pt-page-moveFromBottomFade'
			},
			{
				outClass: 'pt-page-moveToBottomFade',
				inClass: 'pt-page-moveFromTopFade'
			},
			{
				outClass: 'pt-page-moveToLeftEasing pt-page-ontop',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-moveToRightEasing pt-page-ontop',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-moveToTopEasing pt-page-ontop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-moveToBottomEasing pt-page-ontop',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromRight pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromLeft pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromBottom pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-moveFromTop pt-page-ontop'
			},
			{
				outClass: 'pt-page-scaleDown',
				inClass: 'pt-page-scaleUpDown pt-page-delay300'
			},
			{
				outClass: 'pt-page-scaleDownUp',
				inClass: 'pt-page-scaleUp pt-page-delay300'
			},
			{
				outClass: 'pt-page-moveToLeft pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToRight pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToTop pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-moveToBottom pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-scaleDownCenter',
				inClass: 'pt-page-scaleUpCenter pt-page-delay400'
			},
			{
				outClass: 'pt-page-rotateRightSideFirst',
				inClass: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateLeftSideFirst',
				inClass: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateTopSideFirst',
				inClass: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop'
			},
			{
				outClass: 'pt-page-rotateBottomSideFirst',
				inClass: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop'
			},
			{ //2
				outClass: 'pt-page-flipOutRight',
				inClass: 'pt-page-flipInLeft pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutLeft',
				inClass: 'pt-page-flipInRight pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutTop',
				inClass: 'pt-page-flipInBottom pt-page-delay500'
			},
			{
				outClass: 'pt-page-flipOutBottom',
				inClass: 'pt-page-flipInTop pt-page-delay500'
			},
			{
				outClass: 'pt-page-rotateFall pt-page-ontop',
				inClass: 'pt-page-scaleUp'
			},
			{
				outClass: 'pt-page-rotateOutNewspaper',
				inClass: 'pt-page-rotateInNewspaper pt-page-delay500'
			},
			{
				outClass: 'pt-page-rotatePushLeft',
				inClass: 'pt-page-moveFromRight'
			},
			{
				outClass: 'pt-page-rotatePushRight',
				inClass: 'pt-page-moveFromLeft'
			},
			{
				outClass: 'pt-page-rotatePushTop',
				inClass: 'pt-page-moveFromBottom'
			},
			{
				outClass: 'pt-page-rotatePushBottom',
				inClass: 'pt-page-moveFromTop'
			},
			{
				outClass: 'pt-page-rotatePushLeft',
				inClass: 'pt-page-rotatePullRight pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushRight',
				inClass: 'pt-page-rotatePullLeft pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushTop',
				inClass: 'pt-page-rotatePullBottom pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotatePushBottom',
				inClass: 'pt-page-rotatePullTop pt-page-delay180'
			},
			{
				outClass: 'pt-page-rotateFoldLeft',
				inClass: 'pt-page-moveFromRightFade'
			},
			{
				outClass: 'pt-page-rotateFoldRight',
				inClass: 'pt-page-moveFromLeftFade'
			},
			{
				outClass: 'pt-page-rotateFoldTop',
				inClass: 'pt-page-moveFromBottomFade'
			},
			{
				outClass: 'pt-page-rotateFoldBottom',
				inClass: 'pt-page-moveFromTopFade'
			},
			{
				outClass: 'pt-page-moveToRightFade',
				inClass: 'pt-page-rotateUnfoldLeft'
			},
			{
				outClass: 'pt-page-moveToLeftFade',
				inClass: 'pt-page-rotateUnfoldRight'
			},
			{
				outClass: 'pt-page-moveToBottomFade',
				inClass: 'pt-page-rotateUnfoldTop'
			},
			{
				outClass: 'pt-page-moveToTopFade',
				inClass: 'pt-page-rotateUnfoldBottom'
			},
			{
				outClass: 'pt-page-rotateRoomLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomLeftIn'
			},
			{
				outClass: 'pt-page-rotateRoomRightOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomRightIn'
			},
			{
				outClass: 'pt-page-rotateRoomTopOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomTopIn'
			},
			{
				outClass: 'pt-page-rotateRoomBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateRoomBottomIn'
			},
			{
				outClass: 'pt-page-rotateCubeLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeLeftIn'
			},
			{
				outClass: 'pt-page-rotateCubeRightOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeRightIn'
			},
			{
				outClass: 'pt-page-rotateCubeTopOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeTopIn'
			},
			{
				outClass: 'pt-page-rotateCubeBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateCubeBottomIn'
			},
			{
				outClass: 'pt-page-rotateCarouselLeftOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselLeftIn'
			},
			{
				outClass: 'pt-page-rotateCarouselRightOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselRightIn'
			},
			{
				outClass: 'pt-page-rotateCarouselTopOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselTopIn'
			},
			{
				outClass: 'pt-page-rotateCarouselBottomOut pt-page-ontop',
				inClass: 'pt-page-rotateCarouselBottomIn'
			},
			{
				outClass: 'pt-page-rotateSidesOut',
				inClass: 'pt-page-rotateSidesIn pt-page-delay500'
			},
			{
				outClass: 'pt-page-rotateSlideOut',
				inClass: 'pt-page-rotateSlideIn'
			}
		];
		return animationClassList;
	};
	//启动
	page.start = start;
	page.audio = audio;
	page.contextmenu = function() {
		return contextmenu();
	};
	return page;
})();
export default Webppt;
