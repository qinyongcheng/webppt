# 🎨 webppt
> 一个基于 h5 + css3 + JavaScript 的开源在线演示文稿（幻灯片）框架，可以帮助用户使用web浏览器搭建一个漂亮的网页版PPT。

<b>在线体验地址：[https://qinyongcheng.github.io/webppt/](https://pipipi-pikachu.github.io/webppt/)</b>


# 🚀 使用
## 一、HTML中使用
### (一)安装
#### 1.通过cdn安装（推荐）
```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/webppt@1.0.10/dist/style.css" />
<script src="https://unpkg.com/webppt@1.0.10/dist/index.min.js"></script>
```
#### 2.直接下载安装
[css下载](https://unpkg.com/webppt@1.0.10/dist/style.css)

[js下载](https://unpkg.com/webppt@1.0.10/dist/index.min.js)">
### (二)编写PPT
#### （1）最简单PPT
```
    <style>
		body {background-color: aliceblue;}
       .page {color: #333;background-color: lightpink;}
    </style>
	<div class="webppt-wrap">
		<div class="page">第1页</div>
		<div class="page">第2页</div>
		<div class="page">第3页</div>
	</div>
	<script>
		Webppt.start()
	</script>
```
#### （2）PPT页子幻灯片
每一页PPT下可以加多张子幻灯片。
```
    <style>
		body {background-color: aliceblue;}
       .page {color: #333;background-color: lightpink;}
    </style>
	<div class="webppt-wrap">
		<div class="page">
		   <div class="slide"><p>第1页第1张</p></div>
		   <div class="slide"><p>第1页第2张</p></div>
		</div>
		<div class="page">第2页</div>
		<div class="page">第3页</div>
	</div>
	<script>
		Webppt.start()
	</script>
```
#### （3）设置PPT转场动画
默认PPT转场为随机动画，可通过幻灯片的data-animation属性设置转场动画。
注意：如果页下面有多个子幻灯片时，第1个子幻灯片动画设置无效，其使用当前页设置的动画效果，如果当前页未设置动画属性，则默认随机动画
```
    <style>
		body {background-color: aliceblue;}
       .page {color: #333;background-color: lightpink;}
	   .slide{background-color: coral;}
    </style>
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		   <div class="slide"><p>第1页第1张，转场效果在父标签的data-animation属性设置</p></div>
		   <div class="slide" data-animation="66"><p>第1页第2张，转场效果在本class="slide"标签的data-animation属性设置</p></div>
		   <div class="slide" data-animation="67"><p>第1页第3张</p></div>
		</div>
		<div class="page">第2页</div>
		<div class="page">第3页</div>
	</div>
	<script>
		Webppt.start()
	</script>
```
内置转场动画如下表（动画样式类由out出场和in入场样式类组成）： 

|动画名称	|动画值	|动画样式类|
|--	|--	|--	|  
|向左推移	|1	|outClass: 'pt-page-moveToLeft',inClass: 'pt-page-moveFromRight' |
|向右推移	|2	|outClass: 'pt-page-moveToRight',inClass: 'pt-page-moveFromLeft'    |
|向上推移	|3	|outClass: 'pt-page-moveToTop',inClass: 'pt-page-moveFromBottom'    |
|向下推移	|4	|outClass: 'pt-page-moveToBottom',inClass: 'pt-page-moveFromTop'    |
|向左谈出	|5	|outClass: 'pt-page-fade',inClass: 'pt-page-moveFromRight pt-page-ontop'    |
|向右淡出	|6	|outClass: 'pt-page-fade',inClass: 'pt-page-moveFromLeft pt-page-ontop'    |
|向上淡出	|7	|outClass: 'pt-page-fade',inClass: 'pt-page-moveFromBottom pt-page-ontop'    |
|向下淡出	|8	|outClass: 'pt-page-fade',inClass: 'pt-page-moveFromTop pt-page-ontop'    |
|左推移淡出	|9	|outClass: 'pt-page-moveToLeftFade',inClass: 'pt-page-moveFromRightFade'    |
|右推移淡出	|10	|outClass: 'pt-page-moveToRightFade',inClass: 'pt-page-moveFromLeftFade'    |
|上推移淡出	|11	|outClass: 'pt-page-moveToTopFade',inClass: 'pt-page-moveFromBottomFade'    |
|下推移淡出	|12	|outClass: 'pt-page-moveToBottomFade',inClass: 'pt-page-moveFromTopFade'    |
|向左缓动	|13	|outClass: 'pt-page-moveToLeftEasing pt-page-ontop',inClass: 'pt-page-moveFromRight'    |
|向右缓动	|14	|outClass: 'pt-page-moveToRightEasing pt-page-ontop',inClass: 'pt-page-moveFromLeft'    |
|向上缓动	|15	|outClass: 'pt-page-moveToTopEasing pt-page-ontop',inClass: 'pt-page-moveFromBottom'    |
|向下缓动	|16	|outClass: 'pt-page-moveToBottomEasing pt-page-ontop',inClass: 'pt-page-moveFromTop'    |
|左移缩小消失	|17	|outClass: 'pt-page-scaleDown',inClass: 'pt-page-moveFromRight pt-page-ontop'    |
|右移缩小消失	|18	|outClass: 'pt-page-scaleDown',inClass: 'pt-page-moveFromLeft pt-page-ontop'    |
|上移缩小消失	|19	|outClass: 'pt-page-scaleDown',inClass: 'pt-page-moveFromBottom pt-page-ontop'    |
|下移缩小消失	|20	|outClass: 'pt-page-scaleDown',inClass: 'pt-page-moveFromTop pt-page-ontop'    |
|缩小出放大进1|21	|outClass: 'pt-page-scaleDown',inClass: 'pt-page-scaleUpDown pt-page-delay300'    |
|缩小出放大进2|22	|outClass: 'pt-page-scaleDownUp',inClass: 'pt-page-scaleUp pt-page-delay300'    |
|左移出放大进	|23	|outClass: 'pt-page-moveToLeft pt-page-ontop',inClass: 'pt-page-scaleUp'    |
|右移出放大进	|24	|outClass: 'pt-page-moveToRight pt-page-ontop',inClass: 'pt-page-scaleUp'    |
|上移出放大进	|25	|outClass: 'pt-page-moveToTop pt-page-ontop',inClass: 'pt-page-scaleUp'    |
|下移出放大进	|26	|outClass: 'pt-page-moveToBottom pt-page-ontop',inClass: 'pt-page-scaleUp'    |
|中心缩小出放大进	|27	|outClass: 'pt-page-scaleDownCenter',inClass: 'pt-page-scaleUpCenter pt-page-delay400'    |
|右旋出左移进	|28	|outClass: 'pt-page-rotateRightSideFirst',inClass: 'pt-page-moveFromRight pt-page-delay200 pt-page-ontop'    |
|左旋出右移进	|29	|outClass: 'pt-page-rotateLeftSideFirst',inClass: 'pt-page-moveFromLeft pt-page-delay200 pt-page-ontop'    |
|上旋出下移进	|30	|outClass: 'pt-page-rotateTopSideFirst',inClass: 'pt-page-moveFromTop pt-page-delay200 pt-page-ontop'    |
|下旋出上移进	|31	|outClass: 'pt-page-rotateBottomSideFirst',inClass: 'pt-page-moveFromBottom pt-page-delay200 pt-page-ontop'    |
|右翻转出左翻转进	|32	|outClass: 'pt-page-flipOutRight',inClass: 'pt-page-flipInLeft pt-page-delay500'    |
|左翻转出右翻转进	|33	|outClass: 'pt-page-flipOutLeft',inClass: 'pt-page-flipInRight pt-page-delay500'    |
|上翻转出下翻转进	|34	|outClass: 'pt-page-flipOutTop',inClass: 'pt-page-flipInBottom pt-page-delay500'    |
|下翻转出上翻转进	|35	|outClass: 'pt-page-flipOutBottom',inClass: 'pt-page-flipInTop pt-page-delay500'    |
|右上角跌落	|36	|outClass: 'pt-page-rotateFall pt-page-ontop',inClass: 'pt-page-scaleUp'    |
|新闻快报	|37	|outClass: 'pt-page-rotateOutNewspaper',inClass: 'pt-page-rotateInNewspaper pt-page-delay500'    |
|左推	|38	|outClass: 'pt-page-rotatePushLeft',inClass: 'pt-page-moveFromRight'    |
|右推	|39	|outClass: 'pt-page-rotatePushRight',inClass: 'pt-page-moveFromLeft'    |
|上推	|40	|outClass: 'pt-page-rotatePushTop',inClass: 'pt-page-moveFromBottom'    |
|下推	|41	| outClass: 'pt-page-rotatePushBottom',inClass: 'pt-page-moveFromTop'   |
|左推右拉	|42	|outClass: 'pt-page-rotatePushLeft',inClass: 'pt-page-rotatePullRight pt-page-delay180'    |
|右推左拉	|43	|outClass: 'pt-page-rotatePushRight',inClass: 'pt-page-rotatePullLeft pt-page-delay180'    |
|上推下拉	|44	|outClass: 'pt-page-rotatePushTop',inClass: 'pt-page-rotatePullBottom pt-page-delay180'    |
|下推上拉	|45	|outClass: 'pt-page-rotatePushBottom',inClass: 'pt-page-rotatePullTop pt-page-delay180'    |
|向左折叠	|46	|outClass: 'pt-page-rotateFoldLeft',inClass: 'pt-page-moveFromRightFade'    |
|向右折叠	|47	|outClass: 'pt-page-rotateFoldRight',inClass: 'pt-page-moveFromLeftFade'    |
|向上折叠	|48	|outClass: 'pt-page-rotateFoldTop',inClass: 'pt-page-moveFromBottomFade'    |
|向下折叠	|49	|outClass: 'pt-page-rotateFoldBottom',inClass: 'pt-page-moveFromTopFade'    |
|左反折叠	|50	|outClass: 'pt-page-moveToRightFade',inClass: 'pt-page-rotateUnfoldLeft'    |
|右反折叠	|51	|outClass: 'pt-page-moveToLeftFade',inClass: 'pt-page-rotateUnfoldRight'    |
|上反折叠	|52	|outClass: 'pt-page-moveToBottomFade',inClass: 'pt-page-rotateUnfoldTop'    |
|下反折叠	|53	| outClass: 'pt-page-moveToTopFade',inClass: 'pt-page-rotateUnfoldBottom'   |
|向左缩小	|54	| outClass: 'pt-page-rotateRoomLeftOut pt-page-ontop',inClass: 'pt-page-rotateRoomLeftIn'   |
|向右缩小	|55	|outClass: 'pt-page-rotateRoomRightOut pt-page-ontop',inClass: 'pt-page-rotateRoomRightIn'    |
|向上缩小	|56	| outClass: 'pt-page-rotateRoomTopOut pt-page-ontop',inClass: 'pt-page-rotateRoomTopIn'   |
|向下缩小	|57	|outClass: 'pt-page-rotateRoomBottomOut pt-page-ontop',inClass: 'pt-page-rotateRoomBottomIn'    |
|左旋转立方体	|58	|outClass: 'pt-page-rotateCubeLeftOut pt-page-ontop',inClass: 'pt-page-rotateCubeLeftIn'    |
|右旋转立方体	|59	|outClass: 'pt-page-rotateCubeRightOut pt-page-ontop',inClass: 'pt-page-rotateCubeRightIn'    |
|上旋转立方体	|60	|outClass: 'pt-page-rotateCubeTopOut pt-page-ontop',inClass: 'pt-page-rotateCubeTopIn'    |
|下旋转立方体	|61	|outClass: 'pt-page-rotateCubeBottomOut pt-page-ontop',inClass: 'pt-page-rotateCubeBottomIn'    |
|左旋转木马	|62	| outClass: 'pt-page-rotateCarouselLeftOut pt-page-ontop',inClass: 'pt-page-rotateCarouselLeftIn'   |
|右旋转木马	|63	|outClass: 'pt-page-rotateCarouselRightOut pt-page-ontop',inClass: 'pt-page-rotateCarouselRightIn'    |
|上旋转木马	|64	|outClass: 'pt-page-rotateCarouselTopOut pt-page-ontop',inClass: 'pt-page-rotateCarouselTopIn'    |
|下旋转木马	|65	| outClass: 'pt-page-rotateCarouselBottomOut pt-page-ontop',inClass: 'pt-page-rotateCarouselBottomIn'   |
|侧面	|66	|outClass: 'pt-page-rotateSidesOut',inClass: 'pt-page-rotateSidesIn pt-page-delay500'    |
|滑动	|67	| outClass: 'pt-page-rotateSlideOut',inClass: 'pt-page-rotateSlideIn'   |

#### （4）设置页面元素动画
```
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		   <div class="slide"><p class="page-center pt-page-rotateCubeLeftIn pt-page-delay500">第1页第1张，设置p标签动画效果</p></div>
		   ...
		</div>
		...
	</div>
	<script>
		Webppt.start()
	</script>
```
> 给p标签添加动画效果，其中.page-center表示设置元素水平垂直居中对齐。注意：  
> 1、元素动画效果可以是转场动画样式类，如pt-page-rotateCubeLeftIn。转场样式类参考【（3）设置PPT转场动画】  
> 2、webppt引用了[Animate.css](https://animate.style/)样式类库，因此可以使用[Animate.css](https://animate.style/)样式类库的所有动画效果，用法参照Animate.css样式库，但需要
> 在class类添加.pt-page-delay500(pt-page-delay700等)类  
> 3、pt-page-delay100、pt-page-delay180、pt-page-delay200、pt-page-delay300、pt-page-delay400、pt-page-delay500
> pt-page-delay700、pt-page-delay1000表示动画延迟时间，单位为毫秒
```
   /*给p标签添加Animate.css动画类，需要在后面添加pt-page-delay500样式类*/
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		  .....
		   <div class="slide" data-animation="66">
		       <p class="page-center animate__animated animate__rubberBand pt-page-delay500">第1页第2张</p>
		   </div>
		  ....
		</div>
	</div>
```
#### （5）PPT添加翻页指示箭头
通过在.webppt-wrap容器下添加div.img-up等标签设置向左向右向上箭头
```
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		  .....		  
		</div>
		<div class="css_icon img-up pt-page-moveIconUp"></div>
		<div class="css_icon img-left pt-page-moveIconLeft"></div>
		<div class="css_icon img-right pt-page-moveIconRight"></div>
	</div>
```
#### （6）设置全屏按钮
通过在.webppt-wrap容器下添加div.screenfull-menu标签设置全屏按钮
```
   /*给p标签添加Animate.css动画类，需要在后面添加pt-page-delay500样式类*/
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		  .....		  
		</div>
		<div class="screenfull-menu">全屏</div>
	</div>
```
#### （7）设置右键菜单
在body下面添加如下代码：
```
   <div class="md-modal md-effect-4">
   	<div class="md-body">
   		<h3 class="md-title">
   			<span>操作选项</span>
   			<button class="btn md-close">关闭</button>
   		</h3>
   		<div class="md-content">
   			<ul>
   				<li>上一页</li>
   				<li>下一页</li>
   				<li>结束放映</li>
   			</ul>
   		</div>
   		<div class="md-footer"></div>
   	</div>
   </div>
   <script>
   	Webppt.start().contextmenu();//设置上下文
   </script>
```
## 二、vue项目中使用
#### 1.npm安装（推荐）
```
npm install webppt
//导入
import webppt from 'webppt';
import 'webppt/dist/style.css'
```

## 三、参考说明
### 1、class="webppt-wrap" 为顶级容器，包括所有的页面。具有的属性：
#### data-options，设置属性，为json格式的字符串，里面包括属性有：
###### loop：是否翻页循环。布尔类型
###### indexAnimate：首页是否支持转场动画。布尔类型
###### loadingAnimate：打开时是否显示加载动画。
###### pageIndicator：是否添加页面指示器  。布尔类型
###### upIcon：是否添加向上箭头。布尔类型
###### preload：设置是否自动预加载图片,默认自动预加载。自动预加载是页面一打开就自动预加载。布尔类型
###### preLoadPages：预加载图片的页数。数字类型  
###### pageIndicatorColor：指示器颜色值。字符串数组类型。如['#99FF33','#CC0033','#99FFCC','#999933','#9966CC','#9999FF']

### 2、class=page,为幻灯片页面：
在class="webppt-wrap"标签下添加page页面，每个页面用类.page标识，如class="page page-1"。page序号用类名称表示，
序号从1递增，如page-2、page-3，每个页面必须有类标识。其中page-1序号自动生成。page具有的属性：
1. data-animation属性：指定当前页面应用的动画类型，数字。 

### 3、class=slide，为幻灯片页下的子幻灯片。
幻灯片页面，每个页面下可以有多个幻灯片页面。在class="page"标签下添加slide子幻灯片，每个子幻灯片用类.slide标识，
如class="slide page-1-1"。幻灯片序号用类名称表示，序号从1递增，如page-1-1、page-1-2、page-2-1等。
表示第几页下的第几个幻灯片，其中page-1-1序号自动生成。具有的属性：
1. 属性data-animation：指定当前页面应用的动画类型，数字。

### 4、class="img-up" ，翻页指示箭头。位置放在class="webppt-wrap"元素下。
### 5、页面图片预加载。预加载的图片只能放在.page标签下或子孙标签下。
1. img标签图片预加载，将真实的图片路径放在img标签的data-src属性里。如：<img data-src="img/css_sprite01.png" />。
2. html标签的背景图片预加载，将真实的图片路径放在html标签的data-src属性里，并给html标签添加.preload-bg类名称。
如：
```
<div class='preload-bg' data-src='img/css_sprite01.png'></div>。
```

### 6、右键菜单功能：在页面单击右键，弹出动画效果选择菜单。

## 四、预定义css样式类
1. .show：显示；.hide：隐藏；
2. .page-center:页面居中（水平居中垂直居中）；.center：水平居中；.vertical：垂直居中；
3. .rotate360：360度不停旋转
4. .page .slide-indicator li：更改页面幻灯片背景颜色。.page .slide-indicator li.on：更改幻灯片当前活动背景颜色
5. 可以应用animate.css库里面的动画效果类样式。

# 💻 贡献代码
首先感谢关注本项目的朋友，非常欢迎每一位对本项目感兴趣的朋友贡献代码。

### 具体参考如下：
- fork 源码，下载到本地并运行项目
- 添加/修改代码
- <b>对相关改动进行全面的自我测试（这非常重要）</b>
- 确认无误后提交修改到 Github
- 提交 Pull Request

### 另外需要注意的是：
- 每一次 Pull Request 都不应该提交过多的代码，且务必说明本次改动的具体目的，例如：修复了某个 bug、优化了某个方法 等，方便进行 Code Review；
- 对于 bug 的修复，应该将本次 Pull Request 和相对应 bug 的 issue 关联起来，让别人知道该问题已经被修复；
- 对于较大的新功能，你需要先提交 Issues，例如 “添加 XXX 功能”，确认该功能有被添加的必要后，再开始工作；
- 对于一些主观的样式、交互逻辑调整：如颜色、图标的使用，某些预设配置的增减修改等，一般不予通过。但可以在 Issues 中进行讨论；
- 其他如简单的代码优化、文档修正等，只要修改合理都会被接受。

在此感谢每一位贡献者。

