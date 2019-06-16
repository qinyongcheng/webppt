(function(root, factory) {
	if(typeof define === 'function') {
		define(factory);
	} else if(typeof exports === 'object') {
		module.exports = factory;
	} else {
		root.preLoad = factory();
	}
})(this, function() {
	/**   
	 * @param imgList 要加载的图片元素列表，[]  或者获取图片列表的回调函数 
	 * @param callback 每成功加载一个图片之后的回调，并传入“已加载的图片总数/要加载的图片总数”表示进度 ，times 表示耗费的时间  
	 * @param timeout 每个图片加载的超时时间，默认为2s   
	 */
	   
	var  loader  =   function (imgList,  callback,  timeout)  {   
		timeout  =  timeout  ||  3000;   
		$imgList  =  $.isArray(imgList)  &&  imgList  ||  $.isFunction(imgList) && imgList.call(this) || [];   
		callback  = $.isFunction(callback) &&  callback;   
		var  total  =  $imgList.length, //图片总数
			loaded  =  0, //已加载数量
			imgages  =   [],
			times = 0, //花费的时间毫秒
			_on  =   function ($source, isimg, fromtime)  { //正在加载的回调函数 
				times = times + new Date().getTime() - fromtime;
				loaded  <  total  &&  (++loaded,  callback  &&  callback(loaded  /  total, times));   
				if(isimg) {
					$source.attr("src", $source.data("src"))
				} else {
					$source.css('background-image', 'url(' + $source.data("src") + ')');
				}
			};   
		if (!total)  {   
			return  callback  &&  callback(1);   
		}   
		//预加载
		var num = 0;
		for (var  i  =  0;  i  <  total;  i++)  {  
			var $img = $imgList[i];  //let 
			//如果是img
			if($img.is('img')) {
				if(!$img.attr("src") && $img.attr('data-src')) { //如果没有图片
					imgages[num]  = new  Image();
					imgages[num].onload = imgages[num].onerror = (function($img) {
						_on.call($img, $img, true, new Date().getTime());
					})($img)  
					imgages[num].src = $img.data("src"); 
					num++;
				}
			} // 如果是背景图 
			else {
				if((!$img.css("background-image") || $img.css("background-image") == "none") && $img.attr('data-src')) {
					imgages[num]  = new  Image();   
					imgages[num].onload = imgages[num].onerror = (function($img) {
						_on.call(this, $img, false, new Date().getTime());
					} )($img)  
					imgages[num].src = $img.data("src"); 
					num++;
				}
			}

		}   
		/**   
		 * 如果timeout * total时间范围内，仍有图片未加载出来（判断条件是loaded < total），通知外部环境所有图片均已加载   
		 * 目的是避免用户等待时间过长   
		 */
		 
		setTimeout(function ()  {   
			loaded  <  total  &&  (loaded  =  total,  callback  &&  callback(loaded  /  total, times));   
		},  timeout  *  total);   
	};  
	return loader; 
})  