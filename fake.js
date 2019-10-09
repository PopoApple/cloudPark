var bluemp_cid=66,bluemp_aid;
testMode = true;
function isWeiXin(){
	return false;
}
var dataBreadcrumb = {
	index_name:'首页',
	index_href:'http://127.0.0.1:8020/cloudpark/index.html',
	first_name:bluemp_cid+'频道',
	first_href:'http://127.0.0.1:8020/cloudpark/list.html',
	second_name:bluemp_cid+'频道',
	second_href:'http://127.0.0.1:8020/cloudpark/list.html'
};
var dataTitle = {
	webname: '乐园文化传媒',
	logo: 'img/logo.jpg'
};
var dataBanner = {
	carouselpic: [{
		pic: 'img/tree.jpg',
		title: '摄影大赛投票',
		url: 'http://baidu.com'
	}, {
		pic: 'img/runimg_1.jpg',
		title: '吉娃娃求抱养',
		url: 'http://baidu.com'
	}, {
		pic: 'img/logo.jpg',
		title: '乒乓球大赛报名',
		url: 'http://baidu.com'
	}]
};
var dataNav = [{
	name: '淘',
	url: 'list.html',
	pic: '',
	nav_url: ''
}, {
	name: '二手',
	url: 'list.html',
	pic: '',
	nav_url: ''
}, {
	name: '新闻眼',
	url: 'list.html',
	pic: '',
	nav_url: ''
}, {
	name: '社区服务',
	url: 'list.html',
	pic: '',
	nav_url: ''
}, {
	name: '活动啊啊啊啊',
	url: 'list.html',
	pic: '',
	nav_url: ''
}, {
	name: '',
	url: 'www.baidu.com',
	pic: '',
	nav_url: ''
}, {
	name: '征婚',
	url: 'www.baidu.com',
	pic: 'img/icon_woman.png',
	nav_url: ''
}, {
	name: '外卖',
	url: 'www.baidu.com',
	pic: 'img/icon_woman.png',
	nav_url: ''
}];
var dataBottomNav = [{
	name: '首页',
	url: 'javascript:;',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '站内搜索',
	url: 'javascript:;',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '留言板',
	url: 'javascript:;',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '业务合作',
	url: 'list.html',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '关于我们',
	url: 'http://www.baidu.com',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '关于你们',
	url: 'javascript:;',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}, {
	name: '关于他们',
	url: 'javascript:;',
	pic: 'Images/iconfont-tupian.png',
	nav_url: ''
}];
var dataChannel = [{
	id: '11',
	name: '网罗美食'
}, {
	id: '22',
	name: '丽人频道'
}, {
	id: '33',
	name: '运动健身'
}, {
	id: '44',
	name: '娱乐八卦'
}, {
	id: '55',
	name: '新闻资讯'
}, {
	id: '66',
	name: '文化热点'
}];
var dataArticleList = [{
	id: '11',
	href: 'www.baidu.com',
	pic: 'Images/44.jpg',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	updatetime: '1451380351'
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: 'Images/11.jpg',
	title: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	updatetime: '1451380351'
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351'
}, {
	id: '11',
	href: 'www.baidu.com',
	pic: '',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351'
}, {
	id: '22',
	href: 'www.baidu.com',
	pic: 'Images/11.jpg',
	title: '摄影大赛投票',
	summary: '',
	updatetime: '1451380351'
}];
var dataExtendInfo = {
	copyrightinfo: 'Copyright©2014-2016研究院赶集网'
};
var dataArticle = {
	id: '11',
	href: 'www.baidu.com',
	pic: 'img/tree.jpg',
	title: '摄影大赛投票',
	summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
	posttime: '2016-01-19',
	content:'<p style="height:100px;text-align:center;margin-top:0px;margin-bottom:0px;padding:0px;outline:0px;border:0px;line-height:1.75em;white-space:normal;color:#333333;font-family:tahoma, arial, 宋体, sans-serif;font-size:14px;">哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈哈</p>'
};
var bluemp = new Object();
var block = new Object();
var tool = new Object();
bluemp.block = block;
bluemp.tool = tool;
bluemp.login = function(){
	sessionStorage.userInfo = JSON.stringify({
		id: '82739',
		name: '小烨子', 
		nick: '小烨子', 
		head: 'http://q.qlogo.cn/qqapp/101139311/23380EC26B96B4FFB4FC1C305627901B/40', 
		gender: '1',
		is_login: 1
	});
	location.reload();
};
bluemp.logout = function(){
	sessionStorage.userInfo = JSON.stringify({
		is_login: 0
	});
	location.reload();
};
block.options = function(opt) {
	
}
block.replyList = function(opt) {
	
}
block.userLogin = function(opt) {
	setTimeout(function() {
		var userInfo = sessionStorage.userInfo;
		opt.fnSuccess(userInfo?JSON.parse(userInfo):{is_login: 0});
	}, 100);
}
tool.Vote = function(opt) {
	
}
block.breadcrumb = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBreadcrumb);
	}, 100);
}
block.title = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataTitle);
	}, 100);
}
block.banner = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBanner);
	}, 100);
}
block.mainNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataNav);
	}, 100);
}
block.bottomNav = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataBottomNav);
	}, 100);
}
block.channelList = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataChannel);
	}, 100);
}
block.articleDetail = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataArticle);
	}, 100);
} 
block.articleList = function(opt) {
	var arry = [];
	if(bluemp_cid!=55){
		for (var i = 0; i < 20; i++) {
			var article = {
				cid: bluemp_cid,
				id: bluemp_cid+'0'+i,
				href: 'article.html',
				pic: 'img/tree.jpg',
				title: '摄影大赛投票'+bluemp_cid+'-0-'+i,
				summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
				updatetime: (new Date()).getTime()- Math.random()*1000*60*60*24*30*100,
				pv:Math.random()*100,
				name:'频道'+bluemp_cid
			}
			arry.push(article);
		}
	}
	setTimeout(function() {
		opt.fnSuccess(arry);
	}, 1000);
}
block.articleList.prototype.getNextPage = function(opt,callback){
    var cnt = 20;
    var page = opt.page;
	if(page<0 || page>3){
		cnt = 0;
	}else if(page==3){
		cnt = 5;
	}
	var arry = [];
	for (var i = 0; i < cnt; i++) {
		var article = {
			cid: bluemp_cid,
			id: bluemp_cid+''+opt.page+i,
			href: 'www.baidu.com',
			pic: 'img/tree.jpg',
			title: '摄影大赛投票'+bluemp_cid+'-'+opt.page+'-'+i,
			summary: '摄影大赛投票摄影大赛投票摄影大赛投票摄影大赛投票',
			updatetime: '1451380351'
		}
		arry.push(article);
	}
	setTimeout(function() {
		callback(arry);
	}, 2000);
}
block.extendInfo = function(opt) {
	setTimeout(function() {
		opt.fnSuccess(dataExtendInfo);
	}, 100);
}