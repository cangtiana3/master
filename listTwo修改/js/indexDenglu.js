$(function(){
	/*
	 ***********登录页js开始********
	*/
	//文本框获得焦点
	$(".inputTxt") .each(function(){
     var thisVal=$(this).val();
     //判断文本框的值是否为空，有值的情况就隐藏提示语，没有值就显示
     if(thisVal!=""){
       $(this).siblings("label").hide();
      }else{
       $(this).siblings("label").show();
      }
     //聚焦型输入框验证 
     $(this).focus(function(){
       $(this).siblings("label").hide();
      }).blur(function(){
        var val=$(this).val();
        if(val!=""){
         $(this).siblings("label").hide();
        }else{
         $(this).siblings("label").show();
        } 
      });
	});
	//获得焦点文本框变亮
	$(".inputTxt").focus(function(){
		$(this).css({"border-color":"#f29120","color":"#000"})
	});
	//失去焦点变暗
	$(".inputTxt").blur(function(){
		$(this).css({"border-color":"#ccc"})
	});
	//选中记住密码
	$(".rememberClick").click(function(){
		$(".remember").toggleClass("blue");
	});
	
	/****************************
	 ***********列表页js开始********
	* ***************************/
	//选中排序样式变化
	$(".CommodityList").click(function(){
		$(this).addClass("active").siblings().removeClass("active");
	});
	//排序箭头变化
	$(".sanjiao a").click(function(){
		$(this).addClass("red").siblings().removeClass("red");
	});
	//分页样式变化
	$(".onePage").click(function(){
		$(this).addClass("allPageActive").siblings().removeClass("allPageActive");
	});	
	
});