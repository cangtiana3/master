// JavaScript Document
//选项卡切换调用tabClick
function tabClick(tabTit, tabClass, tabTxt) {
	$(tabTit).click(function() {
		var index = $(this).index();
		$(tabTit).removeClass(tabClass);
		$(tabTxt).css("display", "none");
		$(this).addClass(tabClass);
		$(tabTxt).eq(index).css("display", "block");
	});
}	

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
$(function(){
	//点击 - 收起下拉菜单
	var Index;
	$(".myDeal").click(function(){
		Index = $(".myDeal").index(this);
		$(this).toggleClass("on");
		if( $(this).hasClass("on") ){
			$(this).find("i").html(" + ");
			//$(this).removeClass("on")
			$(".myDealList").eq(Index).slideUp();
		}else{
			$(this).find("i").html(" - ");			
			$(".myDealList").eq(Index).slideDown();
		}
	});
	
	//点击变背景
	tabClick(".orderList", "active", ".fullOrderUl");
	
	//优惠券切换
	tabClick(".orderList", "active", ".privilegeDiv");
	
	//退货换货切换
	tabClick(".applyFor", "active", ".applyForTxt");
	
	//点击单选文本变背景
	$(".radioOne").click(function(){
		$(this).addClass("checked").siblings().removeClass("checked")
	});
	
	//点击 + 号 数值增加
		var Num;
		$(".add").click(function(){
			var Num =parseInt($(".number").val());
			var addNum = parseInt(Num + 1);
			//alert(Num)
			//console.log(Num)
			$(".number").val(addNum);
		});
		$(".ease").click(function(){
			var Num =parseInt($(".number").val());
			var easeNum = parseInt(Num -1);
			
			if($(".number").val() == 0){
				$(".number").val() == 0
				alert("当前没有商品！")
			}else{
				$(".number").val(easeNum);
			}
		});
});
