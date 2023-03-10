# 🎨 webppt
> 一个基于 h5 + css3 + JavaScript 的开源在线演示文稿（幻灯片）框架，可以帮助用户使用web浏览器搭建一个漂亮的网页版PPT。

<b>在线体验地址：[https://qinyongcheng.github.io/webppt/](https://pipipi-pikachu.github.io/webppt/)</b>


# 🚀 使用
## 一、HTML中使用
### (一)安装
#### 1.通过cdn安装（推荐）
```
<link rel="stylesheet" type="text/css" href="https://unpkg.com/webppt@1.0.6/dist/style.css" />
<script src="https://unpkg.com/webppt@1.0.6/dist/index.min.js"></script>
```
#### 2.直接下载安装
[css下载](https://unpkg.com/webppt@1.0.6/dist/style.css)

[js下载](https://unpkg.com/webppt@1.0.6/dist/index.min.js)">
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
#### （2）PPT页多张幻灯片
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
内置转场动画如下表： 

|动画名称	|动画值	|
|--	|--	|
|向左推移	|1	|
|向右推移	|2	|
|向上推移	|3	|
|向下推移	|4	|
|向左谈出	|5	|
|向右淡出	|6	|
|向上淡出	|7	|
|向下淡出	|8	|
|左推移淡出	|9	|
|右推移淡出	|10	|
|上推移淡出	|11	|
|下推移淡出	|12	|
|向左缓动	|13	|
|向右缓动	|14	|
|向上缓动	|15	|
|向下缓动	|16	|
|左移缩小消失	|17	|
|右移缩小消失	|18	|
|上移缩小消失	|19	|
|下移缩小消失	|20	|
|缩小出放大进1|21	|
|缩小出放大进2|22	|
|左移出放大进	|23	|
|右移出放大进	|24	|
|上移出放大进	|25	|
|下移出放大进	|26	|
|中心缩小出放大进	|27	|
|右旋出左移进	|28	|
|左旋出右移进	|29	|
|上旋出下移进	|30	|
|下旋出上移进	|31	|
|右翻转出左翻转进	|32	|
|左翻转出右翻转进	|33	|
|上翻转出下翻转进	|34	|
|下翻转出上翻转进	|35	|
|右上角跌落	|36	|
|新闻快报	|37	|
|左推	|38	|
|右推	|39	|
|上推	|40	|
|下推	|41	|
|左推右拉	|42	|
|右推左拉	|43	|
|上推下拉	|44	|
|下推上拉	|45	|
|向左折叠	|46	|
|向右折叠	|47	|
|向上折叠	|48	|
|向下折叠	|49	|
|左反折叠	|50	|
|右反折叠	|51	|
|上反折叠	|52	|
|下反折叠	|53	|
|向左缩小	|54	|
|向右缩小	|55	|
|向上缩小	|56	|
|向下缩小	|57	|
|左旋转立方体	|58	|
|右旋转立方体	|59	|
|上旋转立方体	|60	|
|下旋转立方体	|61	|
|左旋转木马	|62	|
|右旋转木马	|63	|
|上旋转木马	|64	|
|下旋转木马	|65	|
|侧面	|66	|
|滑动	|67	|

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

