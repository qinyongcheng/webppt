# 🎨 webppt
> 一个基于 h5 + css3 + JavaScript 的开源在线演示文稿（幻灯片）框架，可以帮助用户使用web浏览器搭建一个漂亮的网页版PPT。

<b>在线体验地址：[https://qinyongcheng.github.io/webppt/](https://pipipi-pikachu.github.io/webppt/)</b>


# 🚀 使用
## 一、HTML网页
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
```
#### （3）设置PPT转场动画
默认PPT转场随机动画，可通过幻灯片的data-animation属性设置转场动画。
注意：如果页下面有多个子幻灯片时，第1个子幻灯片动画设置无效，其使用当前页设置的动画效果，如果当前页未设置动画属性，则默认随机动画
```
    <style>
		body {background-color: aliceblue;}
       .page {color: #333;background-color: lightpink;}
    </style>
	<div class="webppt-wrap">
		<div class="page" data-animation="1">
		   <div class="slide"><p>第1页第1张</p></div>
		   <div class="slide" data-animation="2"><p>第1页第2张</p></div>
		</div>
		<div class="page">第2页</div>
		<div class="page">第3页</div>
	</div>
```
## 二、vue项目
#### 1.npm安装（推荐）
```
npm install webppt
//导入
import webppt from 'webppt';
import 'webppt/dist/style.css'
```


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

