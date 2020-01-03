$(function () {
  $(document).ready(function () {
    $(window).scroll(function () {
      if ($(this).scrollTop() > 100) { // 100pxスクロールしていたら上に戻るボタンを表示
        $(".back-to-top").fadeIn();
      } else {
        $(".back-to-top").fadeOut();
      }
    });

    $(".back-to-top").click(function () {
      $("body,html").animate({
        scrollTop: 0
      }, 1000); // 1000msかけて最初に戻る
    });
  });

  $.jInvertScroll(['.scroll'], // an array containing the selector(s) for the elements you want to animate
    {
      height: 6000, // optional: define the height the user can scroll, otherwise the overall length will be taken as scrollable height
    });

});
