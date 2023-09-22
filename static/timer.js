// 获取元素
var timer = document.querySelector('.timer');
var today = new Date();
var endDate = new Date("2024-06-26 00:00:00"); // 设置截止时间
var leftTime = endDate - today;

// 将毫秒转换为天、小时、分钟、秒、毫秒
var d = Math.floor(leftTime / (1000 * 60 * 60 * 24));
var h = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
var m = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
var s = Math.floor((leftTime % (1000 * 60)) / 1000);
  
// 更新显示
timer.innerHTML = "2024 年深圳市中考倒计时: " + d + " 天 " + h + " 小时 " + m + " 分钟 " + s + " 秒";

// 启动倒计时
function countdown() {
  var timer = document.querySelector('.timer');
  var today = new Date();
  var endDate = new Date("2024-06-26 00:00:00"); // 设置截止时间
  var leftTime = endDate - today;
  
  // 将毫秒转换为天、小时、分钟、秒、毫秒
  var d = Math.floor(leftTime / (1000 * 60 * 60 * 24));
  var h = Math.floor((leftTime % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
  var m = Math.floor((leftTime % (1000 * 60 * 60)) / (1000 * 60));
  var s = Math.floor((leftTime % (1000 * 60)) / 1000);
    
  // 更新显示
  timer.innerHTML = "2024 年深圳市中考倒计时: " + d + " 天 " + h + " 小时 " + m + " 分钟 " + s + " 秒";
}

var timer = setInterval(countdown, 1000);