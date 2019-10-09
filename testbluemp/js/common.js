var testMode = false;
var winW, winH, rfSize = 40;
var isAndroid = (/android/gi).test(navigator.appVersion);
$(window).resize(function(){
	layout();
});
function updateSize(){
	winW = $(window).width();
	winH = $(window).height();
	//winW = 750;
	rfSize = 40*winW/750;
	$('html').css('font-size',rfSize+'px');
	//console.log(winW,rfSize,$('html').css('font-size'));
	updateMenuList();
}
Date.prototype.Format = function (fmt) { //author: meizz 
    var o = {
        "M+": this.getMonth() + 1, //月份 
        "d+": this.getDate(), //日 
        "h+": this.getHours(), //小时 
        "m+": this.getMinutes(), //分 
        "s+": this.getSeconds(), //秒 
        "q+": Math.floor((this.getMonth() + 3) / 3), //季度 
        "S": this.getMilliseconds() //毫秒 
    };
    if (/(y+)/.test(fmt)) fmt = fmt.replace(RegExp.$1, (this.getFullYear() + "").substr(4 - RegExp.$1.length));
    for (var k in o)
    if (new RegExp("(" + k + ")").test(fmt)) fmt = fmt.replace(RegExp.$1, (RegExp.$1.length == 1) ? (o[k]) : (("00" + o[k]).substr(("" + o[k]).length)));
    return fmt;
}
function formatDate (strTime) {
    var date = new Date(parseInt(strTime+'000'));
    return date.Format("yyyy-MM-dd");
    //return date.getFullYear()+"-"+(date.getMonth()+1)+"-"+date.getDate();
}

function px2Int(str){
	var len = str.length;
	return parseFloat(str.substring(0,len-2));
}
function initExtendInfo(){
	new bluemp.block.extendInfo({
		isDefault: false,
		fnSuccess: function(data) {
			console.log('版权信息：');
			console.log(data);
			if(data){
				var copyright = data.copyrightinfo;
				if (copyright && copyright != '') {
					$('#copyright').html(copyright);
				}
			}
		}
	});
}
function initTitle(){
	new bluemp.block.title({
		isDefault: false,
		fnSuccess: function(data) {
			var logo = data.logo;
			var title = data.webname;
			var logoEle = $('#logo');
			var titleEle = $('#title');
			var titleShow = false;
			if(logo){
				var imgEle = logoEle.find('img');
				imgEle.attr('src',logo);
				imgEle[0].onload = function(){
					logoEle.removeClass('none');
					var img = this;
					//setTimeout(function(){
						var temp = logoEle[0].offsetWidth;
						var temp2 = this.offsetWidth;
						console.log(temp,temp2);
						titleEle.css({'left':(0.6+img.width/rfSize)+'rem'});
						titleEle.removeClass('none');
					//},10);
				};
			}else{
				titleEle.css({'left':'.45rem'});
				titleShow = true;
			}
			if(title!='无'){
				titleEle.find('a').html(title);
				if(titleShow){
					titleEle.removeClass('none');
				}
			}
			new bluemp.block.bottomNav({
				isDefault: false,
				fnSuccess: function(data) {
					if(data && data.length>0){
						$('#menuBtn').removeClass('none');
			        	var menuListEle = $('#menuListInner');
			            for(var i=0;i<data.length;i++){
			                menuListEle.append('<div class="menuItem"><a href="'+data[i].url+'">'+data[i].name+'</a></div>');
			            }
						updateMenuList();
			            closeMenuList();
					}else{
						titleEle.css({'right':'0.45rem'});
					}
				}
			});
		}
	});
}
function initHeader(){ 
	$('#menuBtn').click(function(){
		var header = $('header');
		if(header.is('.menuOpen')){
			closeMenuList(true);
		}else{
			$('#menuList,#menuBtn').addClass('anim');
			header.addClass('menuOpen');
			$('#menuList').css('margin-top','0px');
			$('body').css('overflow-y','hidden');
		}
	});
	$('#bodyMask').click(function(){
		closeMenuList();
	}).on('touchstart',function(){
		closeMenuList();
	});
	
	document.body.addEventListener('touchmove', function(event) {
		if($('header').is('.menuOpen')){
			event.preventDefault();
		}
	}, false);
}
var menuListTop, menuListScroll;
var hasTouch = 'ontouchstart' in window;
function updateMenuList(){
	$('#menuList').removeClass('anim');
	var maxH = winH - 3.4*rfSize;
	maxH = (maxH<0?0:maxH)+'px';
	$('#menuList').css({'max-height':maxH});
	menuListTop = '-'+(px2Int($('#menuList').css('height'))+rfSize)+'px';
	if(!$('header').is('.menuOpen')){
		$('#menuList').css({'margin-top':menuListTop});
	}
	if(hasTouch){
		$('#menuList').css('overflow-y','hidden');
		if(!menuListScroll){
			menuListScroll = new IScroll('#menuList', {
							mouseWheel: true,
							preventDefault: false,
							preventDefaultException: { tagName: /^A$/ }
					});
		}else{
			menuListScroll.refresh();
		}
	}
}
function closeMenuList(anim){
	if(anim){
		$('#menuList,#menuBtn').addClass('anim');
	}else{
		$('#menuList,#menuBtn').removeClass('anim');
	}
	$('header').removeClass('menuOpen');
	$('#menuList').css({'margin-top':menuListTop});
	$('body').css('overflow-y','auto');
}
function closeOpenedMenuList(){
	var menuList = $('header').not('.menuOpen').find('#menuList');
	if(menuList){
		closeMenuList();
	}
}
function trim(str){
	return str.replace(/(^\s*)|(\s*$)/g,'');
}