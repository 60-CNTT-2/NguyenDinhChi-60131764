
      // Hàm khởi tạo đồng hồ
      function startTime()
      {
        var today = new Date();
 
 // Giờ, phút, giây hiện tại
 var h = today.getHours();
 var m = today.getMinutes();
 var s = today.getSeconds();

 // Chuyển đổi sang dạng 01, 02, 03
 m = checkTime(m);
 s = checkTime(s);

 // Ghi ra trình duyệt
 document.getElementById('timer').innerHTML ="Bây giờ là " + h + ":" + m + ":" + s;

 // Dùng hàm setTimeout để thiết lập gọi lại 0.5 giây / lần
 var t = setTimeout(function() {
     startTime();
 }, 500);
      }
       
      // Hàm này có tác dụng chuyển những số bé hơn 10 thành dạng 01, 02, 03, ...
      function checkTime(i)
      {
        if (i < 10) {
        i = "0" + i;
    }
    return i; 
      }

    
