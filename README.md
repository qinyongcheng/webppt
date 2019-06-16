# PageSlider

#### 介绍
H5单页应用幻灯片3D转场<a href="http://106.15.183.34/">演示效果</a>


#### 安装教程

下载本项目打开index.html页面运行

#### 使用说明

## 一、目录介绍
### 1、css目录：
##### reset.css：将一些标签的样式属性在各浏览器中统一。 
##### animate.css：动画类库
##### animations.css：自定义页面转场动画类库
##### index.css：单页应用的样式
##### all.css：将以上用到的css文件合并在一起减少浏览器对服务的的请求次数，减轻服务器压力
##### all.min.css：all.css文件的压缩文件，用于生产环境
##### all.css.JSCompress：JSCompress合并压缩程序的配置文件
##### 建议自定义样式，放在单独style.css文件里
### 2、js目录：
##### zepto.js：类似jQuery库API的移动端DOM操作库。 
##### touch.js：支持移动端触摸的zepto.js插件。 
##### coffee.js：音符漂浮插件
##### loader.js：加载等待插件
##### preload.js：图片预加载插件
##### index.js：单页应用的js
##### all.js：将以上用到的js文件合并在一起减少浏览器对服务的的请求次数，减轻服务器压力
##### all.min.js：all.js文件的压缩文件，用于生产环境
### 3、img目录：img根目录下放系统图片，建议将自己的图片放在img目录下的自定义文件夹下，如img/my
### 4、media目录：存放媒体资源文件

## 二、index.html文档说明
### 1、class="wrap" 顶级容器，包括所有的页面。具有属性：
#### data-options设置属性，为json格式的字符串，里面包括属性有：
###### loop：是否翻页循环。布尔类型
###### indexAnimate：首页是否支持转场动画。布尔类型
###### loadingAnimate：打开时是否显示加载动画。
###### pageIndicator：是否添加页面指示器  。布尔类型
###### upIcon：是否添加向上箭头。布尔类型
###### preload：设置是否自动预加载图片,默认自动预加载。自动预加载是页面一打开就自动预加载。布尔类型
###### preLoadPages：预加载图片的页数。数字类型  
###### pageIndicatorColor：指示器颜色值。字符串数组类型。如['#99FF33','#CC0033','#99FFCC','#999933','#9966CC','#9999FF']

### 2、page页面：在class="wrap"标签下添加page页面，每个页面用类.page标识，如class="page page-1"，
### page序号用类名称表示，序号从1递增，如page-2、page-3，每个页面必须有类标识。具有属性：
#### 属性data-animation：指定当前页面应用的动画类型，数字。可以打开testAnimate.html页面查看页面转场效果，并选择动画类型，记住是数字。
### 3、slide页面：幻灯片页面，每个页面下可以有多个幻灯片页面。在class="page"标签下添加slide页面，每个页面用类.slide标识，
### 如class="slide page-1-1"。幻灯片序号用类名称表示，序号从1递增，如page-1-1、page-1-2、page-2-1等。表示第几页下的第几个幻灯片。有属性：
#### 属性data-animation：指定当前页面应用的动画类型，数字
### 4、class="img-up" 翻页指示箭头。位置不能变动。
### 5、页面图片预加载。预加载的图片只能放在.page标签下或子孙标签下。
#### a、img标签图片预加载，将真实的图片路径放在img标签的data-src属性里。如：<img data-src="img/css_sprite01.png" />。
#### b、html标签的背景图片预加载，将真实的图片路径放在html标签的data-src属性里，并给html标签添加.preload-bg类名称。如：<div class='preload-bg' data-src='img/css_sprite01.png'></div>。
### 6、右键菜单功能：在页面单击右键，弹出动画效果选择菜单，选择动画效果，翻下一页的时候，应用选择的动画

## 三、系统定义css样式类
### 1、.show：显示；.hide：隐藏；
### 2、.page-center:页面居中（水平居中垂直居中）；.center：水平居中；.vertical：垂直居中；
### 3、.rotate360：360度不停旋转
### 4、.page .slide-indicator li：更改页面幻灯片背景颜色。.page .slide-indicator li.on：更改幻灯片当前活动背景颜色
### 5、可以应用animations.css、animate.css两个文件里面的动画效果类样式。

## 四、PageSlider对象属性及方法
### 1、preLoadImg()方法：手动设置预加载图片。一般用于preload自动预加载设置为false时触发，预加载。比如通过ajax去取图片。只有在ajax取图片成功时才能去加载图片


## 五、参考资料
### 1、web安全色：http://www.bootcss.com/p/websafecolors/
### 2、js、css文件合并与压缩工具：https://www.jscompress.cn/
### 3、zepto使用文档：https://zeptojs.com
### 4、粒子：https://www.cnblogs.com/zx-admin/p/7030978.html
### 5、移动端常见的一些兼容性问题：https://blog.csdn.net/hardgirls/article/details/51722519#commentBox
### 6、星空代码：http://www.jq22.com/code864
### 6、css3星空效果代码实例：http://www.softwhy.com/article-7150-1.html
### 7、HTML5 canvas全屏酷炫星空背景动画特效 ：https://www.genban.org/plus/show.php?aid=8601 
### 8、CSS3实现酷炫流光页面动画特效：http://sc.chinaz.com/jiaobendemo.aspx?downloadid=201530212138
### 9、我的宇宙：http://www.17sucai.com/preview/1424582/2018-10-24/bg/demo.html
### 10、3D翻牌效果：https://www.lisa33xiaoq.net/demo/3ddrawCSS3/main.html
### 11、纯css3实现的一个有趣酷炫的书本翻页动画：https://github.com/BUPT-HJM/css3-flip-book
### 12、30款CSS3酷炫页面加载等待动画特效：http://www.internetke.com/jsEffects/2015121401/demo15.html
### 13、太赞了！超炫的页面切换动画效果https://www.cnblogs.com/lhb25/p/a-collection-of-page-transitions.html、https://tympanus.net/Development/PageTransitions/
### 4、文字 11种HTML5和CSS3炫酷文字样式和鼠标滑过特效：http://www.ibloger.net/article/1315.html
### 15、html5 css3酷炫的3D文字样式特效：http://www.17sucai.com/pins/demo-show?id=13910
### 16、8个前沿的 HTML5 & CSS3 效果【附源码下载】：http://www.yyyweb.com/377.html
### 17、五月干货！10个值得前端收藏的CSS3动效库（工具）：https://www.uisdc.com/best-css3-animation-library
### 18、一组非常漂亮的可用于加载的CSS3动效https://projects.lukehaas.me/css-loaders/
### 19、酷炫对话框https://tympanus.net/Development/ModalWindowEffects/



## 六、版本更新
### 1、1.0.1 2018-10-30更新右键菜单选择动画效果功能；增加了magic.css动画类库
### 1、1.0.2 2019-6-1增加了preLoadImg()预加载图片方法

#### 参与贡献

1. Fork 本仓库
2. 新建 Feat_xxx 分支
3. 提交代码
4. 新建 Pull Request
