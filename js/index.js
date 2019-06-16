/*https://wnworld.com/archives/204.html*/
/*翻页插件*/
(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;  
	} else {
		root.PageSlider = factory();
	}
})(this, function() {   
	var page = {
		loop: true, //是否翻页循环,
		indexAnimate: false, //首页是否支持转场动画
		loadingAnimate: true, //打开时是否显示加载动画。
		pageIndicator: true, //是否添加页面指示器  
		upIcon: true, //是否添加向上箭头
		preload: true, //设置是否自动预加载图片,默认自动预加载。自动预加载是页面一打开就自动预加载
		preLoadPages: 2, //预加载图片的页数
		pageIndicatorColor: [] //指示器颜色值
	};
	//总页数	
	var totalPage = $(".wrap .page").each(function(i, e) {
		//给每个页面添加唯一标志,给每个页面下的幻灯片添加唯一标志
		$(this).data('id', "page-" + (i + 1)).children(".slide").each(function(i2, e2) {
			$(this).data('id', "page-" + (i + 1) + "-" + (i2 + 1));
		})
	}).size(); 
	/*初始化参数*/
	var $wrap = $(".wrap").addClass("perspective"); //添加css3d透视
	var options = $wrap.data("options");
	if(options != undefined) {
		options="{"+options+"}"; 
		options = eval("(" + options + ")");
		$.extend(page, options);
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
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if(last.row < totalPage) {
			now.row = last.row + 1;
			now.col = 1;
			pageMove(towards.up, false);
		} else if(page.loop) {
			now.row = 1;
			now.col = 1;
			pageMove(towards.up, false);
		}
	}
	//切换页
	page.switchPage = function(pageNo) {
		if(isAnimating) return;
		//切换页在1-总页数之间
		if(pageNo >= 1 && pageNo <= totalPage) {
			last.row = now.row; //上一页
			last.col = 1;
			now.row = pageNo; //当前页等于要切换的页面
			now.col = 1;
			pageMove(towards.up, false);
		}

	}
	//向下翻页
	page.down = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		if(last.row > 1) {
			now.row = last.row - 1;
			now.col = 1;
			pageMove(towards.down, false);
		} else if(page.loop) {
			now.row = totalPage;
			now.col = 1;
			//如果预加载图片  则刚开始不支持向下翻页，便于预加载图片
			if(page.preload && now.row >= preLoadPage) {
				now.row = last.row;
				now.col = last.col;
				page.up();
				return;
			}
			pageMove(towards.down, false);
		}
	}
	//向左幻灯片
	page.left = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if(last.row >= 1 && last.row <= totalPage && pageSlides > 1) {
			now.row = last.row;
			if(last.col < pageSlides) {
				now.col = last.col + 1;
				pageMove(towards.left, false);
			} else if(page.loop) {
				now.col = 1;
				pageMove(towards.left, false);
			}
		}
	}
	//向右幻灯片
	page.right = function() {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		var pageSlides = $(getPageSlidesSelector(last)).size();
		if(last.row >= 1 && last.row <= totalPage && pageSlides > 1) {
			now.row = last.row;
			if(last.col > 1) {
				now.col = last.col - 1;
				pageMove(towards.right, false);
			} else if(page.loop) {
				now.col = pageSlides;
				pageMove(towards.right, false);
			}
		}
	}
	page.switchSlide = function(no) {
		if(isAnimating) return;
		last.row = now.row;
		last.col = now.col;
		now.col = no;
		now.row = last.row;
		pageMove(towards.left, false);

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
	//如果不支持触摸,比如PC端，则单击向上图标切换页面
	if(!document.hasOwnProperty("ontouchstart")) {
		$(".img-up").on('click', function(e) {
			page.up(); 
		})
	}

	//启动
	function start() {
		//预加载插件
		if(page.preload) {
			preLoadImg(true);
		} else if(page.loadingAnimate) {
			buildLightLoader();
		} else {
			//启动初始化
			pageMove(towards.up, true);
			//生成页面指示器
			buildPageIndicator();
		}

	}
	page.preLoadImg = function() {
		page.preload = true;
		preLoadImg(true);
	}
	//预加载图片  firststart是否是第一次启动
	function preLoadImg(firststart, tw) {
		if(firststart || now.row == (preLoadPage - 1)) {
			//预加载页数 
			preLoadPage = preLoadPage + page.preLoadPages;
			var selector = "";
			var i = firststart ? now.row : now.row + 1;
			var len = preLoadPage > totalPage ? totalPage + 1 : preLoadPage;
			for(; i < len; i++) {
				selector = selector + ",.page-" + i + " img" + ",.page-" + i + " .preload-bg";
			}
			selector = selector.substr(1);
			if(selector != "") {
				//预加载页面范围
				var aImgs = []
				$(selector).each(function(i, e) {
					aImgs.push($(this));
				});
				if(firststart && page.loadingAnimate && !page.__lightLoader) { //启动加载画面 
					isAnimating = true;
					buildLightLoader();
				}
				preLoad(aImgs, function(percentage, times) {
					//启动初始化  
					if(firststart) {
						var percentT = percentage * 100;
						if(percentage == 1) {
							setTimeout(function() {
								page.__lightLoader && page.__lightLoader.remove();
								page.__$loader && page.__$loader.remove();
								pageMove(towards.up, firststart);
								//生成页面指示器 
								buildPageIndicator();
								isAnimating = false;
							}, (times > 2000 ? 0 : 2000))
						}
					}
				}, 3000);
			}

		}
	}
	//构建加载启动动画
	function buildLightLoader() {
		var $loader = $("<div id='loader'><div class='stars'></div></div>").appendTo(".wrap");
		var c = document.createElement('canvas');
		var _lightLoader;
		if(!!(c.getContext && c.getContext('2d'))) {
			c.width = 300;
			c.height = 300;
			document.body.appendChild(c);
			_lightLoader = new lightLoader(c);
			_lightLoader.start();
			page.__lightLoader = _lightLoader;
			page.__$loader = $loader;
		}
	}

	function getPageSelector(page, notslide) {
		page = page || now;
		if(notslide) {
			return ".page-" + page.row;
		}
		//同一行不同列
		if(last.row == now.row && last.col != now.col) {
			return ".page-" + page.row + "-" + page.col;
		}
		return ".page-" + page.row;
	}
	page.getNextPageSelector = function() {
		var n = now.row + 1 > totalPage ? 1 : now.row + 1;
		return ".page-" + n;
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
		for(var name in animEndEventNames) {
			if(typeof body.style[name] === "string") {
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
		for(var r = 0; r < len; r++) {
			for(var g = 0; g < len; g++) {
				for(var b = 0; b < len; b++) {
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
		if(page.pageIndicator) {
			var $ul = $('<ul class="page-indicator"></ul>').appendTo(".wrap");
			for(i = 0; i < totalPage; i++) {
				var $li = $('<li><span></span></li>').data("id", i + 1)
					.attr("id", getPageIndicatorID(now, i + 1)).css("background", page.pageIndicatorColor[i] || getRandomSafeColor())
					.appendTo($ul).on("click", function() {
						page.switchPage($(this).data("id"));
					});
				if(i == 0) {
					$li.addClass("on")
				}
			}
		}
	}
	//页面切换
	function pageMove(tw, start) {
		var lastPage = getPageSelector(last),
			nowPage = getPageSelector(now),
			$lastPage = $(lastPage),
			$nowPage = $(nowPage),
			nowPageAnimEnd = false, //当前页动画结束
			lastPageAnimEnd = false; //上一页动画结束
		//如果就是当页则不切换
		if($lastPage.data("id") == $nowPage.data("id")) {
			return;
		}
		//当前页显示
		$nowPage.addClass("show threeD").find(".hide").removeClass("hide");
		//当前页下的第一个幻灯片显示
		$nowPage.children(".slide").first().addClass("show");
		//上下翻页时 ，为当前页幻灯片添加指示条
		var pageSlides = $(getPageSlidesSelector(now, true)).size();
		if(pageSlides > 1) {
			if(tw == towards.up || tw == towards.down) {
				if($nowPage.children(".slide-indicator").size() <= 0) { //没有指示器则创建
					var $ul = $('<ul class="slide-indicator"></ul>').attr("id", "slide-indicator-" + now.row).appendTo($nowPage);
					for(i = 0; i < pageSlides; i++) {
						var $li = $('<li></li>').data("id", i + 1)
							.attr("id", getPageSlideIndicatorID(now, i + 1))
							.appendTo($ul).on("click", function() {
								page.switchSlide($(this).data("id"));
							});
						if(i == 0) {
							$li.addClass("on")
						}
					}
				} else {
					//第一个显示样式
					$("#slide-indicator-" + now.row + " li").removeClass("on").first().addClass("on");
				}
			} else if(tw == towards.left || tw == towards.right) {
				$("#slide-indicator-" + now.row + " li").removeClass("on");
				$("#slide-indicator-" + now.row + "-" + now.col).addClass("on");
			}
		}
		//翻页时改变页面指示器 
		if(page.pageIndicator) {
			$(".page-indicator li").removeClass("on");
			$("#page-indicator-" + now.row).addClass("on");
		}
		//如果是启动画面（）第一个画面则不添加转场效果 
		if(start && !page.indexAnimate) {
			return;
		}
		//是否预加载图片
		if(page.preload) {
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
			if(nowPageAnimEnd) {
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
			if(lastPageAnimEnd) {
				isAnimating = false;
			}
		});

	}
	page.getAnimationClass = function getAnimationClass(animationType) {
		animationClassList = page.getAnimationClassList();
		if(animationType && animationType <= animationClassList.length && animationType >= 1) {
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
			{
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
				inClass: 'pt-page-rotateSidesIn pt-page-delay200'
			},
			{
				outClass: 'pt-page-rotateSlideOut',
				inClass: 'pt-page-rotateSlideIn'
			}
		];
		return animationClassList;
	};
	//启动
	start();
	return page;
});

/*声音插件*/
(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.Page = factory();
	}
})(this, function() {
	//声音模块
	var audio = {
		_audioNode: $('.u-audio'), // 声音模块
		_audio: null, // 声音对象
		_audio_val: true, // 声音是否开启控制
		/**
		 *  media资源管理
		 *  -->绑定声音控制事件
		 *  -->函数处理声音的开启和关闭
		 *  -->异步加载声音插件（延迟做）
		 *  -->声音初始化
		 *  -->视频初始化
		 *  -->声音和视频切换的控制
		 */
		// 声音初始化
		audio_init: function() {
			// media资源的加载
			var options_audio = {
				loop: true,
				preload: "auto",
				src: audio._audioNode.attr('data-src')
			}
			audio._audio = new Audio();
			for(var key in options_audio) {
				if(options_audio.hasOwnProperty(key) && (key in audio._audio)) {
					audio._audio[key] = options_audio[key];
				}
			}
			audio._audio.load();
			// 音符飘逸  
			var base64img="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAA8AAAAZCAYAAADuWXTMAAAACXBIWXMAAAsTAAALEwEAmpwYAAAKTWlDQ1BQaG90b3Nob3AgSUNDIHByb2ZpbGUAAHjanVN3WJP3Fj7f92UPVkLY8LGXbIEAIiOsCMgQWaIQkgBhhBASQMWFiApWFBURnEhVxILVCkidiOKgKLhnQYqIWotVXDjuH9yntX167+3t+9f7vOec5/zOec8PgBESJpHmomoAOVKFPDrYH49PSMTJvYACFUjgBCAQ5svCZwXFAADwA3l4fnSwP/wBr28AAgBw1S4kEsfh/4O6UCZXACCRAOAiEucLAZBSAMguVMgUAMgYALBTs2QKAJQAAGx5fEIiAKoNAOz0ST4FANipk9wXANiiHKkIAI0BAJkoRyQCQLsAYFWBUiwCwMIAoKxAIi4EwK4BgFm2MkcCgL0FAHaOWJAPQGAAgJlCLMwAIDgCAEMeE80DIEwDoDDSv+CpX3CFuEgBAMDLlc2XS9IzFLiV0Bp38vDg4iHiwmyxQmEXKRBmCeQinJebIxNI5wNMzgwAABr50cH+OD+Q5+bk4eZm52zv9MWi/mvwbyI+IfHf/ryMAgQAEE7P79pf5eXWA3DHAbB1v2upWwDaVgBo3/ldM9sJoFoK0Hr5i3k4/EAenqFQyDwdHAoLC+0lYqG9MOOLPv8z4W/gi372/EAe/tt68ABxmkCZrcCjg/1xYW52rlKO58sEQjFu9+cj/seFf/2OKdHiNLFcLBWK8ViJuFAiTcd5uVKRRCHJleIS6X8y8R+W/QmTdw0ArIZPwE62B7XLbMB+7gECiw5Y0nYAQH7zLYwaC5EAEGc0Mnn3AACTv/mPQCsBAM2XpOMAALzoGFyolBdMxggAAESggSqwQQcMwRSswA6cwR28wBcCYQZEQAwkwDwQQgbkgBwKoRiWQRlUwDrYBLWwAxqgEZrhELTBMTgN5+ASXIHrcBcGYBiewhi8hgkEQcgIE2EhOogRYo7YIs4IF5mOBCJhSDSSgKQg6YgUUSLFyHKkAqlCapFdSCPyLXIUOY1cQPqQ28ggMor8irxHMZSBslED1AJ1QLmoHxqKxqBz0XQ0D12AlqJr0Rq0Hj2AtqKn0UvodXQAfYqOY4DRMQ5mjNlhXIyHRWCJWBomxxZj5Vg1Vo81Yx1YN3YVG8CeYe8IJAKLgBPsCF6EEMJsgpCQR1hMWEOoJewjtBK6CFcJg4Qxwicik6hPtCV6EvnEeGI6sZBYRqwm7iEeIZ4lXicOE1+TSCQOyZLkTgohJZAySQtJa0jbSC2kU6Q+0hBpnEwm65Btyd7kCLKArCCXkbeQD5BPkvvJw+S3FDrFiOJMCaIkUqSUEko1ZT/lBKWfMkKZoKpRzame1AiqiDqfWkltoHZQL1OHqRM0dZolzZsWQ8ukLaPV0JppZ2n3aC/pdLoJ3YMeRZfQl9Jr6Afp5+mD9HcMDYYNg8dIYigZaxl7GacYtxkvmUymBdOXmchUMNcyG5lnmA+Yb1VYKvYqfBWRyhKVOpVWlX6V56pUVXNVP9V5qgtUq1UPq15WfaZGVbNQ46kJ1Bar1akdVbupNq7OUndSj1DPUV+jvl/9gvpjDbKGhUaghkijVGO3xhmNIRbGMmXxWELWclYD6yxrmE1iW7L57Ex2Bfsbdi97TFNDc6pmrGaRZp3mcc0BDsax4PA52ZxKziHODc57LQMtPy2x1mqtZq1+rTfaetq+2mLtcu0W7eva73VwnUCdLJ31Om0693UJuja6UbqFutt1z+o+02PreekJ9cr1Dund0Uf1bfSj9Rfq79bv0R83MDQINpAZbDE4Y/DMkGPoa5hpuNHwhOGoEctoupHEaKPRSaMnuCbuh2fjNXgXPmasbxxirDTeZdxrPGFiaTLbpMSkxeS+Kc2Ua5pmutG003TMzMgs3KzYrMnsjjnVnGueYb7ZvNv8jYWlRZzFSos2i8eW2pZ8ywWWTZb3rJhWPlZ5VvVW16xJ1lzrLOtt1ldsUBtXmwybOpvLtqitm63Edptt3xTiFI8p0in1U27aMez87ArsmuwG7Tn2YfYl9m32zx3MHBId1jt0O3xydHXMdmxwvOuk4TTDqcSpw+lXZxtnoXOd8zUXpkuQyxKXdpcXU22niqdun3rLleUa7rrStdP1o5u7m9yt2W3U3cw9xX2r+00umxvJXcM970H08PdY4nHM452nm6fC85DnL152Xlle+70eT7OcJp7WMG3I28Rb4L3Le2A6Pj1l+s7pAz7GPgKfep+Hvqa+It89viN+1n6Zfgf8nvs7+sv9j/i/4XnyFvFOBWABwQHlAb2BGoGzA2sDHwSZBKUHNQWNBbsGLww+FUIMCQ1ZH3KTb8AX8hv5YzPcZyya0RXKCJ0VWhv6MMwmTB7WEY6GzwjfEH5vpvlM6cy2CIjgR2yIuB9pGZkX+X0UKSoyqi7qUbRTdHF09yzWrORZ+2e9jvGPqYy5O9tqtnJ2Z6xqbFJsY+ybuIC4qriBeIf4RfGXEnQTJAntieTE2MQ9ieNzAudsmjOc5JpUlnRjruXcorkX5unOy553PFk1WZB8OIWYEpeyP+WDIEJQLxhP5aduTR0T8oSbhU9FvqKNolGxt7hKPJLmnVaV9jjdO31D+miGT0Z1xjMJT1IreZEZkrkj801WRNberM/ZcdktOZSclJyjUg1plrQr1zC3KLdPZisrkw3keeZtyhuTh8r35CP5c/PbFWyFTNGjtFKuUA4WTC+oK3hbGFt4uEi9SFrUM99m/ur5IwuCFny9kLBQuLCz2Lh4WfHgIr9FuxYji1MXdy4xXVK6ZHhp8NJ9y2jLspb9UOJYUlXyannc8o5Sg9KlpUMrglc0lamUycturvRauWMVYZVkVe9ql9VbVn8qF5VfrHCsqK74sEa45uJXTl/VfPV5bdra3kq3yu3rSOuk626s91m/r0q9akHV0IbwDa0b8Y3lG19tSt50oXpq9Y7NtM3KzQM1YTXtW8y2rNvyoTaj9nqdf13LVv2tq7e+2Sba1r/dd3vzDoMdFTve75TsvLUreFdrvUV99W7S7oLdjxpiG7q/5n7duEd3T8Wej3ulewf2Re/ranRvbNyvv7+yCW1SNo0eSDpw5ZuAb9qb7Zp3tXBaKg7CQeXBJ9+mfHvjUOihzsPcw83fmX+39QjrSHkr0jq/dawto22gPaG97+iMo50dXh1Hvrf/fu8x42N1xzWPV56gnSg98fnkgpPjp2Snnp1OPz3Umdx590z8mWtdUV29Z0PPnj8XdO5Mt1/3yfPe549d8Lxw9CL3Ytslt0utPa49R35w/eFIr1tv62X3y+1XPK509E3rO9Hv03/6asDVc9f41y5dn3m978bsG7duJt0cuCW69fh29u0XdwruTNxdeo94r/y+2v3qB/oP6n+0/rFlwG3g+GDAYM/DWQ/vDgmHnv6U/9OH4dJHzEfVI0YjjY+dHx8bDRq98mTOk+GnsqcTz8p+Vv9563Or59/94vtLz1j82PAL+YvPv655qfNy76uprzrHI8cfvM55PfGm/K3O233vuO+638e9H5ko/ED+UPPR+mPHp9BP9z7nfP78L/eE8/sl0p8zAABARmlUWHRYTUw6Y29tLmFkb2JlLnhtcAAAAAAAPD94cGFja2V0IGJlZ2luPSLvu78iIGlkPSJXNU0wTXBDZWhpSHpyZVN6TlRjemtjOWQiPz4KPHg6eG1wbWV0YSB4bWxuczp4PSJhZG9iZTpuczptZXRhLyIgeDp4bXB0az0iQWRvYmUgWE1QIENvcmUgNS41LWMwMjEgNzkuMTU0OTExLCAyMDEzLzEwLzI5LTExOjQ3OjE2ICAgICAgICAiPgogICA8cmRmOlJERiB4bWxuczpyZGY9Imh0dHA6Ly93d3cudzMub3JnLzE5OTkvMDIvMjItcmRmLXN5bnRheC1ucyMiPgogICAgICA8cmRmOkRlc2NyaXB0aW9uIHJkZjphYm91dD0iIgogICAgICAgICAgICB4bWxuczp4bXA9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmRjPSJodHRwOi8vcHVybC5vcmcvZGMvZWxlbWVudHMvMS4xLyIKICAgICAgICAgICAgeG1sbnM6cGhvdG9zaG9wPSJodHRwOi8vbnMuYWRvYmUuY29tL3Bob3Rvc2hvcC8xLjAvIgogICAgICAgICAgICB4bWxuczp4bXBNTT0iaHR0cDovL25zLmFkb2JlLmNvbS94YXAvMS4wL21tLyIKICAgICAgICAgICAgeG1sbnM6c3RFdnQ9Imh0dHA6Ly9ucy5hZG9iZS5jb20veGFwLzEuMC9zVHlwZS9SZXNvdXJjZUV2ZW50IyIKICAgICAgICAgICAgeG1sbnM6dGlmZj0iaHR0cDovL25zLmFkb2JlLmNvbS90aWZmLzEuMC8iCiAgICAgICAgICAgIHhtbG5zOmV4aWY9Imh0dHA6Ly9ucy5hZG9iZS5jb20vZXhpZi8xLjAvIj4KICAgICAgICAgPHhtcDpDcmVhdG9yVG9vbD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3htcDpDcmVhdG9yVG9vbD4KICAgICAgICAgPHhtcDpDcmVhdGVEYXRlPjIwMTQtMDQtMjJUMTA6MzQ6MTgrMDg6MDA8L3htcDpDcmVhdGVEYXRlPgogICAgICAgICA8eG1wOk1vZGlmeURhdGU+MjAxNC0wNC0yMlQxNDowMjo1MSswODowMDwveG1wOk1vZGlmeURhdGU+CiAgICAgICAgIDx4bXA6TWV0YWRhdGFEYXRlPjIwMTQtMDQtMjJUMTQ6MDI6NTErMDg6MDA8L3htcDpNZXRhZGF0YURhdGU+CiAgICAgICAgIDxkYzpmb3JtYXQ+aW1hZ2UvcG5nPC9kYzpmb3JtYXQ+CiAgICAgICAgIDxwaG90b3Nob3A6Q29sb3JNb2RlPjM8L3Bob3Rvc2hvcDpDb2xvck1vZGU+CiAgICAgICAgIDxwaG90b3Nob3A6SUNDUHJvZmlsZT5zUkdCIElFQzYxOTY2LTIuMTwvcGhvdG9zaG9wOklDQ1Byb2ZpbGU+CiAgICAgICAgIDxwaG90b3Nob3A6RG9jdW1lbnRBbmNlc3RvcnM+CiAgICAgICAgICAgIDxyZGY6QmFnPgogICAgICAgICAgICAgICA8cmRmOmxpPjgyNzMxMkFGOEM3QTgzMzU2QjU0M0JGNDNFQTEwQ0ZGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+QzNENDc5NDdBMzVCOTlDQUM1RTlCQUY0MjU1RkZDMTE8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT5GMjFCODdBQ0NFMkRBQzI0RDE2ODcyOThDQkVDMTg2QjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MUJERTczQTYwRUM2RTMxMUE1Nzg4M0E0RUUxNDYyQTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjFFNTE3MUVEQzkzNDExRTM4NEZERDI2MkIyNkI2MzcwPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDoyMDk4MDNENzY0QUExMUUzOTYyN0JBQzU3MTg0N0RFQTwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6MjU0MDQwOUM2NEFBMTFFM0EzNkZGRjJBRUIxQjg0RTg8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjM0MTI5OUFFRjIzNEUzMTE4ODNGQjI1NjhBMDYxQzZGPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo2ODI1QzM1QTY0QTgxMUUzQjcxOTk2REQ5RTNBNTU5NDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6NzFDNzU3RjUyRUM2RTMxMUE1Nzg4M0E0RUUxNDYyQTY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOjc4MjZBQjczMzRDNkUzMTFBNTc4ODNBNEVFMTQ2MkE2PC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo3QjI2QUI3MzM0QzZFMzExQTU3ODgzQTRFRTE0NjJBNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6N2M2Yjk5NTEtNzE4NC00YTQyLWJjNDgtYWRmMGQ0NDMzNTgzPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDo4MDI2QUI3MzM0QzZFMzExQTU3ODgzQTRFRTE0NjJBNjwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpPnhtcC5kaWQ6OUE4NzA3ODM2NEIwMTFFMzlGQTBCODA3MjEyNTVGQzY8L3JkZjpsaT4KICAgICAgICAgICAgICAgPHJkZjpsaT54bXAuZGlkOkEyMUMyMDQwMDFDNkUzMTFBMzA5RDY1NEUyQkQxMTdBPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGk+eG1wLmRpZDpDMjY3QTE5MkUwQjgxMUUwODAxOUMxMkYzQTY5NEE2NjwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpCYWc+CiAgICAgICAgIDwvcGhvdG9zaG9wOkRvY3VtZW50QW5jZXN0b3JzPgogICAgICAgICA8eG1wTU06SW5zdGFuY2VJRD54bXAuaWlkOmUyZTljYTE1LWQ3MDUtNGZkMS1iMGMzLTcxYzI3MDEwMjRkMzwveG1wTU06SW5zdGFuY2VJRD4KICAgICAgICAgPHhtcE1NOkRvY3VtZW50SUQ+eG1wLmRpZDpjZjYxMzIwMi1iNDQ0LTQxNzEtOTExNS00ZjdmMGZhOTI5MDk8L3htcE1NOkRvY3VtZW50SUQ+CiAgICAgICAgIDx4bXBNTTpPcmlnaW5hbERvY3VtZW50SUQ+eG1wLmRpZDpjZjYxMzIwMi1iNDQ0LTQxNzEtOTExNS00ZjdmMGZhOTI5MDk8L3htcE1NOk9yaWdpbmFsRG9jdW1lbnRJRD4KICAgICAgICAgPHhtcE1NOkhpc3Rvcnk+CiAgICAgICAgICAgIDxyZGY6U2VxPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jcmVhdGVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6Y2Y2MTMyMDItYjQ0NC00MTcxLTkxMTUtNGY3ZjBmYTkyOTA5PC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTA0LTIyVDEwOjM0OjE4KzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICAgICA8cmRmOmxpIHJkZjpwYXJzZVR5cGU9IlJlc291cmNlIj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OmFjdGlvbj5jb252ZXJ0ZWQ8L3N0RXZ0OmFjdGlvbj4KICAgICAgICAgICAgICAgICAgPHN0RXZ0OnBhcmFtZXRlcnM+ZnJvbSBhcHBsaWNhdGlvbi92bmQuYWRvYmUucGhvdG9zaG9wIHRvIGltYWdlL3BuZzwvc3RFdnQ6cGFyYW1ldGVycz4KICAgICAgICAgICAgICAgPC9yZGY6bGk+CiAgICAgICAgICAgICAgIDxyZGY6bGkgcmRmOnBhcnNlVHlwZT0iUmVzb3VyY2UiPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6YWN0aW9uPnNhdmVkPC9zdEV2dDphY3Rpb24+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDppbnN0YW5jZUlEPnhtcC5paWQ6ZTJlOWNhMTUtZDcwNS00ZmQxLWIwYzMtNzFjMjcwMTAyNGQzPC9zdEV2dDppbnN0YW5jZUlEPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6d2hlbj4yMDE0LTA0LTIyVDE0OjAyOjUxKzA4OjAwPC9zdEV2dDp3aGVuPgogICAgICAgICAgICAgICAgICA8c3RFdnQ6c29mdHdhcmVBZ2VudD5BZG9iZSBQaG90b3Nob3AgQ0MgKE1hY2ludG9zaCk8L3N0RXZ0OnNvZnR3YXJlQWdlbnQ+CiAgICAgICAgICAgICAgICAgIDxzdEV2dDpjaGFuZ2VkPi88L3N0RXZ0OmNoYW5nZWQ+CiAgICAgICAgICAgICAgIDwvcmRmOmxpPgogICAgICAgICAgICA8L3JkZjpTZXE+CiAgICAgICAgIDwveG1wTU06SGlzdG9yeT4KICAgICAgICAgPHRpZmY6T3JpZW50YXRpb24+MTwvdGlmZjpPcmllbnRhdGlvbj4KICAgICAgICAgPHRpZmY6WFJlc29sdXRpb24+NzIwMDAwLzEwMDAwPC90aWZmOlhSZXNvbHV0aW9uPgogICAgICAgICA8dGlmZjpZUmVzb2x1dGlvbj43MjAwMDAvMTAwMDA8L3RpZmY6WVJlc29sdXRpb24+CiAgICAgICAgIDx0aWZmOlJlc29sdXRpb25Vbml0PjI8L3RpZmY6UmVzb2x1dGlvblVuaXQ+CiAgICAgICAgIDxleGlmOkNvbG9yU3BhY2U+MTwvZXhpZjpDb2xvclNwYWNlPgogICAgICAgICA8ZXhpZjpQaXhlbFhEaW1lbnNpb24+MTU8L2V4aWY6UGl4ZWxYRGltZW5zaW9uPgogICAgICAgICA8ZXhpZjpQaXhlbFlEaW1lbnNpb24+MjU8L2V4aWY6UGl4ZWxZRGltZW5zaW9uPgogICAgICA8L3JkZjpEZXNjcmlwdGlvbj4KICAgPC9yZGY6UkRGPgo8L3g6eG1wbWV0YT4KICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAKICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIAogICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgCiAgICAgICAgICAgICAgICAgICAgICAgICAgICAKPD94cGFja2V0IGVuZD0idyI/PqMwb9IAAAAgY0hSTQAAeiUAAICDAAD5/wAAgOkAAHUwAADqYAAAOpgAABdvkl/FRgAAAQtJREFUeNqc0r8rRWEYB/CPm8iP2JVuKTIqExZRipTd30DKIjFYlMWCP0Ay2Aw2ySKZLVYpFt1Sd1P0WM6ti3vO4f3W0zlvz/mc933qbYsIBdlBDUetmhXFGcFEXrMMv2IqFT+hir4UXM+e5ym40Z/BwX9xG96z91Xs/QcPYhOzuMMGVv6Ku7K5rzGJXRxiDNpL8Ad6m9bbGMctespwq8wjsFSRliuspeJLdKXiGl5ScT+eU/EA7lNxLy5S8GI2c60Mv6Gzad2BOZy1umFVLGAIjxjFzQ98igcQEY3aiojP+J3ppm++VWPnfaznHL07d6jsz0UZzttZRJwVwOM82MDLEVFvUSdFMCJ8DQBRR/KhOnuUMQAAAABJRU5ErkJggg==";
			$('#coffee_flow').coffee({
				steams: ["<img src='"+base64img+"' />", "<img src='"+base64img+"' />"],//steams: ["<img src='"+base64img+"' />", "<img src='../img/audio_widget_01@2x.png' />"],
				steamHeight: 100,
				steamWidth: 44
			});  
		},

		// 声音事件绑定
		audio_addEvent: function() {
			if(audio._audioNode.length <= 0) return;

			// 声音按钮点击事件
			var txt = audio._audioNode.find('.txt_audio'),
				time_txt = null;
			audio._audioNode.find('.btn_audio').on('click', audio.audio_contorl);

			// 声音打开事件
			$(audio._audio).on('play', function() {
				audio._audio_val = false;
				audio_txt(txt, true, time_txt);

				// 开启音符冒泡
				$.fn.coffee.start();
				$('.coffee-steam-box').show(500);
			})

			// 声音关闭事件
			$(audio._audio).on('pause', function() {
				audio_txt(txt, false, time_txt)

				// 关闭音符冒泡
				$.fn.coffee.stop();
				$('.coffee-steam-box').hide(500);
			})

			function audio_txt(txt, val, time_txt) {
				if(val) txt.text('打开');
				else txt.text('关闭');

				if(time_txt) clearTimeout(time_txt);

				txt.removeClass('z-move z-hide');
				time_txt = setTimeout(function() {
					txt.addClass('z-move').addClass('z-hide');
				}, 1000)
			}
		},

		// 声音控制函数
		audio_contorl: function() {
			if(!audio._audio_val) {
				audio.audio_stop();
			} else {
				audio.audio_play();
			}
		},

		// 声音播放
		audio_play: function() {
			audio._audio_val = false;
			if(audio._audio) audio._audio.play();
		},

		// 声音停止
		audio_stop: function() {
			audio._audio_val = true;
			if(audio._audio) audio._audio.pause();
		}, //处理声音和动画的切换
		media_control: function() {
			if(!audio._audio) return;
			if($('video').length <= 0) return;

			$(audio._audio).on('play', function() {
				$('video').each(function() {
					if(!this.paused) {
						this.pause();
					}
				});
			});

			$('video').on('play', function() {
				if(!audio._audio_val) {
					audio.audio_contorl();
				}
			});
		},
		// media管理初始化
		media_init: function() {
			// 声音初始化
			audio.audio_init();
			// 绑定音乐加载事件
			audio.audio_addEvent();
			// 音频切换
			audio.media_control();

		}

	}
	// loading执行一次
	var loading_time = new Date().getTime();
	$(window).on('load', function() {
		var now = new Date().getTime();
		var loading_end = false;
		var time;
		var time_del = now - loading_time;
		if(time_del >= 2200) {
			loading_end = true;
		}
		if(loading_end) {
			time = 0;
		} else {
			time = 2200 - time_del;
		}
		// loading完成后请求
		setTimeout(function() {
			// media初始化
			audio.media_init();
			// 播放声音
			if(!audio._audio) return;
			audio._audioNode.removeClass('hide');
			audio._audio.play();

			// 声音启动
			$(document).one("touchstart", function() {
				audio._audio.play();
			});
		}, time)
	})
});
/*右键菜单选择动画效果*/
(function() {
	var $md = $('<div class="md-modal md-effect-4"><div class="md-content"><h3>选择动画效果</h3><div><p>得到</p></div><button class="md-close">Close me!</button></div></div></div>').appendTo("body");
	//添加动画样式单选框 
	var str = "";
	for(var i = 1; i <= PageSlider.getAnimationClassList().length; i++) {
		str += '<span><input type="radio" class="magic-radio"  name="myAnimation" value="' + i + '" id="radio' + i + '"/><label for="radio' + i + '" class="radio2">效果' + i + '</label> </span>';
	}
	$md.find(".md-content p").html(str).find("input[name=myAnimation]").on("click", function() {
		$(PageSlider.getNextPageSelector()).data("animation", $(this).val());
	})

	$(document).on("contextmenu", function(e) {
		e.preventDefault();
		$md.addClass("md-show").find(".md-close").on("click", function() {
			$md.removeClass("md-show");
		})
	})
})()