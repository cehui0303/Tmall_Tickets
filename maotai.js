
//定时器
var timer = null;

//检测状态
function checkElementState(path,callback){
}



//点击购买按钮
function clickBuy(){
	console.log('买！');
}


//进入时间判断循环
function enterTimeCheckLoop(callback){
	var date = new Date();
	
	//目标时间
	var dDate = new Date();
	dDate.setHours(16,50,0);
	
	
	var diff = Date.parse(dDate) - Date.parse(date) ;
	
	console.log(diff);
	
	if(diff < 600 ) {

		callback && callback();
		
		console.log('时间到了！！！');
		
	}else{
		setTimeout(function(){ enterTimeCheckLoop(callback);},500);
		
		console.log('--');
	}
	
	
	
}


//主要函数
function main(){
	console.log('############################开始抢购茅台############################');
	
	//进入时间判断
	enterTimeCheckLoop( clickBuy );
	
}


main();