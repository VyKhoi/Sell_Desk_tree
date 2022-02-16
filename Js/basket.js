$(document).ready(function(){


    $("#bag").click(function(){
        $("#basket").show(1000)
        
    })
    $("#close2").click(function(){
        $("#basket").fadeOut(1000)

    })

    
    $(".order").click(function(){
        var img = $(this).attr("rel")// lay hinh
        var a =  $(this).attr("role")//gia
        var b =  $(this).attr("lang")//lay ten
         alert("Đã Thêm Vào Giỏ Hàng")
        
         $("#bags").append(
             `<li> 
             <img src="${img}"/> 
             <h1 class="tenSanPham">${b}</h1>
             <span> Giá :</span>
             <input class="price" type="button" value='${a}' />
            <span class="soLuong"> Số lượng</span>
             <input class="quantity" type="text" value="1" placeholder="Số lượng" />
             <i class="fas fa-trash-alt xoa"></i>
             </li>`
         );
        
    })
    

    $("#bags").on("click","li > i",function(){
       // alert("da vos uoc")
         $(this).parent().remove()
        
    })
    
   
  

  

$("#okePay").click(function(){
    $(".pay").hide(1000)
})

$("#close3").click(function(){
    $(".pay").hide(1000)
})
})

// tinh duoc tien rooi
function tinhTien(){
   

    // document.getElementById("tien").innerHTML = tmp
    

    var price = document.getElementsByClassName("price")
    var quantity = document.getElementsByClassName("quantity")

    //alert("khoi")
    
    var tmp = 0;
    for(var i = 0; i< price.length ;i++){
        console.log(price[i].value)
        tmp = tmp + +price[i].value * quantity[i].value
    } 

    if(tmp > 0)
    {
    
    $("#basket").fadeOut(100)
    $(".pay").fadeIn(200)
    document.getElementById("tien").innerHTML = tmp
    }else{
        alert("Bạn chưa đặt cây")
    }
}

// function okePill()
// {
//     $("pay").slideUp(1000)
//     alert("oke")
// }
