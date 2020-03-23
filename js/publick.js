// 搜索框显示
  $(function(){
    $(".search").click(function(){
      $(".jitter_top_search input").show();
    });
  });

// 滚动显示送礼物的用户
 //  function gundong() {
 //     var liH = $(".roll ul li").height();
 //     var gunH = 0;
 //     console.log(liH);
 //     $(".roll ul").append($(".roll ul li").eq(0).clone());
 //     setInterval(function() {
 //         gunH += liH;
 //         console.log(gunH);
 //         $(".roll ul").animate({
 //             marginTop: -gunH + "px"
 //         }, 500);
 //         if (gunH >= ($(".roll ul li").length - 1) * 30) {
 //             gunH = 0;
 //             $(".roll ul").animate({
 //                 marginTop: gunH + "px"
 //             }, 1);
 //         }
 //    }, 2000);
 // }
 // gundong();

  // --显示隐藏--      
  function _show(cld){
    $("."+cld).show();
  }
  function _hide(cld){
    $('.'+cld).hide();
  }
function _tge(a){
  $('.'+a).toggle();
}
//   // --动画显示隐藏--      
  function Slide_show(cld){
    $("."+cld).stop().slideDown(200);
  }
  function Slide_hide(cld){
    $('.'+cld).stop().slideUp(200);
  }
　　　　

  // 礼物选中样式
   $('.gift-box>li').click(function(){
      $(this).addClass('state');
      $('.gift-box>li').not($(this)).removeClass('state');
      $(this).children("li").show();
      $('.gift-box>li').not($(this)).children("li").hide();
    });



//点击某个视频的播放按钮，如果正在播放则暂停，如果暂停则播放
      // $(function(){

      //   // myVid=document.getElementById("video");

      //   $(".icon-play,video").click(function(){
      //   var myVid =  $(this).parent().find("video")[0];  
      //     if (myVid.paused) {
      //       myVid.play();
      //       $(myVid).next().css("display","none");
      //       $(myVid).next().next().css("display","none");
      //       // $(".icon-play,.video-cover").css("display","none");
      //     } else {
      //       myVid.pause();
      //       $(".icon-play").css("display","block");
      //     }
      //   })
      // });




  
    //   var pid = "**********";
    //   var page = 3;
    // var gid = "4";
    //   $(function () {
    //       $('#user-list').empty();
    //       $('#loaduser').click(function () {
    //           if ($(this).hasClass('layui-btn-disabled')) {
    //               return;
    //           }
    //           $("#loaduser").addClass('layui-btn-disabled');
    //           $('#loaduser').text('加载中...');

    //           var url = U('toupiao/ajax/gvu');
    //           page = page + 1;
    //           $.post(url, {page: page, gid:gid}, function (data) {
    //               if (data.flag == 100) {
    //                   $('.user-list').append(data.html);
    //                   $("#loaduser").removeClass('layui-btn-disabled');
    //                   $('#loaduser').text('加载更多');
    //               } else {
    //                   $('.user-list').append(data.html);
    //                   $('#loaduser').text('没有更多了~');
    //               }
    //           }, 'json')
    //       })
    //   })
    //   layui.use(['form'], function () {
    //     var form = layui.form();
    //     form.on('select(groupNav)', function (obj) {
    //       var url = "后台" + obj.value;
    //       location.href= url;
    //     })
    //   });
