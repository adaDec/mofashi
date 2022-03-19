$('.list li').on('click', function (e) { 
  $(this).addClass('current-item');  // 当前点击元素加上class
  $(this).siblings().removeClass('current-item'); // 当前元素的兄弟元素去除class
  var currentText = $(this).html();
  $(".title-box").html(currentText);
  var index = $(".list li").index(this); // 获取当前点击元素的位置
  var element = $(".content-detail").eq(index);  //去右侧找到对应的结构
  element.addClass('show');
  element.siblings().removeClass('show');
});
