
 function inputComment(){
    
 // alert(document.getElementById("binhLuan").value)
  b = document.getElementById("binhLuan").value
 }
$(document).ready(function(){

    
    $("#submit").click(function(){
       
       var date = new Date()
     //   alert(b)
        $("#binhLuans").append(
                        `<li>
                        <p>${b}</p>
                        <i class="fas fa-trash-alt deleteComment" ></i>
                        <span id="time">${date}</span>
                        </li>`
         );
         document.getElementById("binhLuan").value = " ";
         document.getElementById("binhLuan").placeholder = "Nhập bình luận";
    })


    $("#binhLuans").on("click","li > i",function(){
     //   alert("da vos uoc")
         $(this).parent().remove()
        
    })
})


//         /// dang làm tới đây , mình lấy đươc cáu comment của ngòi ta rồi

