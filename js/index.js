$(function(){

//	头部动效  obj  objsel
    function headSel(obj,objsel){
        obj.onmouseover=function()
        {
            objsel.style.display="block"
        }
        obj.onmouseout=function()
        {
            objsel.style.display="none"
        }
    }
    var weixin=$(".weixin")[0];
    var shouji=$(".shouji")[0];
    var myyt=$(".myyt")[0];
    var erweima1=$(".erweima1")[0]
    var erweima2=$(".erweima2")[0]
    var ul=$("ul",myyt)[0]

    headSel(weixin,erweima1);
    headSel(shouji,erweima2);
    headSel(myyt,ul);

  /*选项卡*/
    // var ullist=$("li",$(".bn1Ul")[0]);   
    // var xuanxiangka=$(".xuanxiangka");
    // select(ullist,xuanxiangka);
/*    for(var i=0;i<ullist.length;i++)
    {

       ullist[i].index=i;
       ullist[i].onmouseover=function()
       {
          bannertans[this.index].style.display="block";

       }
        ullist[i].onmouseout=function()
       {
          bannertans[this.index].style.display="none";

       } 
     }*/
  var bn1Ulli=$(".bn1Ulli");
  var bannerTan=$(".bannerTan");

  for(var i=0;i<bn1Ulli.length;i++){
     bn1Ulli[i].index=i;

     bn1Ulli[i].onmouseover=function(){
         bannerTan[this.index].style.display="block";
         
     }
     bn1Ulli[i].onmouseout=function(){
         bannerTan[this.index].style.display="none";
     }
  }



/*banner轮播图*/

  /*获取*/  
 /* var  bannern2=$(".bannern2")[0]; 
  var  banner=$(".banner")[0];
  var  imgs=$(".bn2tu",$(".bannern2")[0]);
  var  bnbtns=$("li",$(".bnbtn")[0]);
  var bnL=$(".bnLeft")[0];
  var bnR=$(".bnRight")[0];*/
    var  banner=$(".banner")[0];
    var imgs=$("a",$(".bannern2")[0]);	
	var list=$("li",$(".bnbtn")[0]);
	var imgbox=$(".bannern2")[0];
	var btnl=$(".bnLeft")[0];
	var btnr=$(".bnRight")[0];
  // wufeng(bannern2,imgs,bnbtns,bnL,bnR);
  lunbo1(banner,imgbox,imgs,list,btnl,btnr);



 /* /!*页面初始化*!/
 imgs[0].style.zIndex=10;
 bnbtns[0].classList.add("btncolor");//添加类名
 bnbtns[0].id="btncolor";

/!*自动轮播*!/
 var now=0;//记录当前窗口中图片的下标（）
 var t=setInterval(move,2000);

 /!*鼠标以上停止，移开轮播 *!/

    bannern2.onmouseover=function(){
       clearInterval(t);
    }
    bannern2.onmouseout=function(){
       t=setInterval(move,2000);
    }

/!* 圈圈list *!/

   for(var i=0;i<imgs.length;i++)
    {
       bnbtns[i].index=i;
       bnbtns[i].onclick=function()
       {
          for(var i=0;i<imgs.length;i++){
             imgs[i].style.zIndex=5;
            bnbtns[i].id="";;
        }
        bnbtns[this.index].id="btncolor";
        imgs[this.index].style.zIndex=10;
        now=this.index;
       }

     }

/!*左右按钮*!/
var bnL=$(".bnLeft")[0];
var bnR=$(".bnRight")[0];
bnL.onclick=function(){
  if(flag){
    moveL();
    flag=false;
  }
}
bnR.onclick=function(){
  if(flag){
    move();
    flag=false;
  }
}
function move(){
      now++;
      if(now==imgs.length){
        now=0;
      }//让小标达到最大长度时，变回0

      for(var i=0;i<imgs.length;i++){
        imgs[i].style.zIndex=5;
        bnbtns[i].id="";

      }//调低所有图片的层级
      imgs[now].style.zIndex=10;//调高当前图片层级
      bnbtns[now].id="btncolor";
 }
function moveL(){
   now--;
   if(now<0)
   {
     now=imgs.length-1;
   }

   for(var i=0;i<imgs.length;i++)
   {
     imgs[i].style.zIndex=5;
     bnbtns[i].id="";

   }
     imgs[now].style.zIndex=10;
     bnbtns[now].id="btncolor";     //按钮添加hot
}*/
     
// 选项卡
var bnxianLT=$(".bnxianLT")[0];
var xxkul=$("ul",bnxianLT)[0];
var lis=$("li",xxkul)
var bnxianLBs=$(".bnxianLB")
select2(lis,bnxianLBs)

var tongkxiaR=$(".tongkxiaR")[0];
var xxkul3=$("ul",tongkxiaR)[0];
var lis3=$("li",xxkul3)
var tongkxiaRX=$(".tongkxiaRX");
// console.log(tongkxiaRX,xxkul3)
select2(lis3,tongkxiaRX);

// function lrmove(){
//   var lbdiv=$("div",$(".jutifl1X")[0]);
//   var width=lbdiv[0].offsetWidth;
//   console.log(width)  
//     function move(){
         
//     }
//     function moveL(){

//     }
// //   var mx=parseInt(getStyle(midBn,"width"));  
// //   for(var i=0;i<imgs.length;i++){
// //       if(i==0){
// //          continue;
// //       }
// //       imgs[i].style.left=mx+"px";

// // }
//   /*左右按钮*/
//    // var bnL=$(".bnL")[0];
//    // var bnR=$(".bnR")[0]; 
//    // var flag=true;
//    // bnL.onclick=function(){
//    //     if(flag){
//    //        moveL();
//    //        flag=false;
//    //    }

//    // }
     
//    //   bnR.onclick=function(){
     
//    //        if(flag){
//    //        move();
//    //        flag=false;
//    //    }
//    // }
// }
// lrmove();

// 左侧logo左右切换
var jutifl1X=$(".jutifl1X")[0];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[0];
var mpRight=$(".mpRight")[0];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[1];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[1];
var mpRight=$(".mpRight")[1];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[2];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[2];
var mpRight=$(".mpRight")[2];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[3];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[3];
var mpRight=$(".mpRight")[3];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[4];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[4];
var mpRight=$(".mpRight")[4];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[5];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[5];
var mpRight=$(".mpRight")[5];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[6];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[6];
var mpRight=$(".mpRight")[6];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[7];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[7];
var mpRight=$(".mpRight")[7];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);

var jutifl1X=$(".jutifl1X")[8];
var tupian=$(".tupian",jutifl1X);
var mpLeft=$(".mpLeft")[8];
var mpRight=$(".mpRight")[8];
wufeng2(jutifl1X,tupian,mpLeft,mpRight);


// 每栏小图切换
var  sBanner=$(".jutifl2")[0];
var  sImgs=$("a",sBanner);
var  sLis=$(".sLis",$(".sSel")[0]);
var  sBtnL=$(".sBtnL")[0];
var  sBtnR=$(".sBtnR")[0];
wufeng3(sBanner,sImgs,sLis,sBtnL,sBtnR);


var  sBanner=$(".jutifl2")[4];
var  sImgs=$("a",sBanner);
var  sLis=$(".sLis",$(".sSel")[1]);
var  sBtnL=$(".sBtnL")[1];
var  sBtnR=$(".sBtnR")[1];
wufeng3(sBanner,sImgs,sLis,sBtnL,sBtnR);

var  sBanner=$(".jutifl2")[5];
var  sImgs=$("a",sBanner);
var  sLis=$(".sLis",$(".sSel")[2]);
var  sBtnL=$(".sBtnL")[2];
var  sBtnR=$(".sBtnR")[2];
wufeng3(sBanner,sImgs,sLis,sBtnL,sBtnR);

var  sBanner=$(".jutifl2")[6];
var  sImgs=$("a",sBanner);
var  sLis=$(".sLis",$(".sSel")[3]);
var  sBtnL=$(".sBtnL")[3];
var  sBtnR=$(".sBtnR")[3];
wufeng3(sBanner,sImgs,sLis,sBtnL,sBtnR);

var  sBanner=$(".jutifl2")[7];
var  sImgs=$("a",sBanner);
var  sLis=$(".sLis",$(".sSel")[4]);
var  sBtnL=$(".sBtnL")[4];
var  sBtnR=$(".sBtnR")[4];
wufeng3(sBanner,sImgs,sLis,sBtnL,sBtnR);



// 楼层跳转
	var guding=$(".guding")[0];
    var floor_lis=$(".floor-lis");
    var floor=$(".jutifl");
    var floorTop0=floor[0].offsetTop;
    var floorTop;
    var floorlisImgs=$("img",guding);
    var now;
    
    // 鼠标滚动  对应楼层侧导航颜色变化
    window.onscroll=function() {   	
    	objT=document.body.scrollTop||document.documentElement.scrollTop;;
        if(objT>=floorTop0-400){
            guding.style.display="block";
        }
        if(objT<floorTop0-400){
            guding.style.display="none";
        }
        for(var i=0;i<floor_lis.length-1;i++){
            floorTop=floor[i].offsetTop;
            if(objT>=floorTop-300){
                for(var j=0;j<floorlisImgs.length-1;j++){
                    floorlisImgs[j].style.opacity=1 ;
                }
                floorlisImgs[i].style.opacity=0 ;
                now=i;
            }
        }
    }
    // 点击 楼层跳转到  鼠标移入移出颜色变化
        for(var i=0;i<floor_lis.length-1;i++){
            floor_lis[i].index=i;
            floorTop=floor[i].offsetTop;

            floor_lis[i].onclick=function(){
                console.log(floor_lis[this.index]);
                animate(document.body,{scrollTop:floor[this.index].offsetTop-100},200 );
                animate(document.documentElement,{scrollTop:floor[this.index].offsetTop-100},200 );
                this.index=now;
            }
            floor_lis[i].onmouseover=function(){
                floorlisImgs[this.index].style.opacity=0 ;
            }
            floor_lis[i].onmouseout=function(){
                if(this.index==now){
                    return;
            }
                floorlisImgs[this.index].style.opacity=1 ;
            }
        }
    // 回到顶部
    var footer=$(".floor-lis")[9];
    footer.onclick=function(){
        console.log(1)
        animate(document.body,{scrollTop:0},200)
    }



// border动效
function border1(borderimg,wid,hei){ 
  var borderimg=borderimg
  var wid=wid;
  var hei=hei;
  for(var j=0;j<borderimg.length;j++){
       borderimg[j].index=j;
       borderimg[j].onmouseover=function(){            
          var borderTop=$(".borderTop",borderimg[this.index])[0];
          var borderLeft=$(".borderLeft",borderimg[this.index])[0];
          var borderRight=$(".borderRight",borderimg[this.index])[0];
          var borderBottom=$(".borderBottom",borderimg[this.index])[0];
          animate(borderTop,{width:wid},500)
          animate(borderLeft,{height:hei},500)
          animate(borderBottom,{width:wid},500)
          animate(borderRight,{height:hei},500)
       }
       borderimg[j].onmouseout=function(){
          var borderTop=$(".borderTop",borderimg[this.index])[0];
          var borderLeft=$(".borderLeft",borderimg[this.index])[0];
          var borderRight=$(".borderRight",borderimg[this.index])[0];
          var borderBottom=$(".borderBottom",borderimg[this.index])[0];
          animate(borderTop,{width:0},500)
          animate(borderLeft,{height:0},500)
          animate(borderBottom,{width:0},500)
          animate(borderRight,{height:0},500)
       }  
  }     
}
// 超值特卖
var bnxianLB=$(".bnxianLB")[0];
var borderimg1=$("a",bnxianLB);
border1(borderimg1,217,260);

var bnxianLB=$(".bnxianLB")[1];
var borderimg1=$("a",bnxianLB);
border1(borderimg1,217,260);

//同款 
var bnxianLB=$(".bnxianLB")[2];
var borderimg1=$("a",bnxianLB);
border1(borderimg1,217,260);

var tongkxiaRX_mr=$(".tongkxiaRX-mr")[0];
var borderimg1=$("a",tongkxiaRX_mr);
border1(borderimg1,198,248);

var tongkxiaRX_mr=$(".tongkxiaRX-mr")[0];
var borderimg1=$("a",tongkxiaRX_mr);
border1(borderimg1,198,248);

// 名品等
var jutifl3=$(".jutifl3")[0];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[1];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[2];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[3];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[4];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[5];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[6];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[7];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

var jutifl3=$(".jutifl3")[8];
var borderimg=$(".borderimg",jutifl3);
border1(borderimg,270,180);

})