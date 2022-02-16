$(document).ready(function(){

    // sử lí gôttp
    $(".goToTop").hide()

    $(window).scroll(function(){



        if($(window).scrollTop() >= 500){
            $(".goToTop").show(500)
        }
        else{
            $(".goToTop").hide(500)

        }
    })
 
     $(".sub").on({
        click: function(){
            $(".submenu").slideDown(500)
        },
        mouseleave : function(){
            $(".submenu").hide(500)
        }
     })

     $(".item").on({
        mouseenter: function(){
            $(this).css({
                // " backgroundColor" : "yellow", cú pháp nài là sai,chỉ có animate mới như vậy thoi

                  transform : "scale(1.2)",
                 transitionDuration : '0.5s',
                 zIndex : "10",
            })
        },
        mouseleave : function(){
            $(this).css({

                transform : "scale(1)",
                        transitionDuration :'1s',
                      zIndex : "0",
            })
        }

    })

    $("#menu > li").on({
        mouseenter: function(){
            $(this).css({
                // " backgroundColor" : "yellow", cú pháp nài là sai,chỉ có animate mới như vậy thoi

                  transform : "scale(1.2)",
                 transitionDuration : '0.5s',
                 backgroundColor : '#08b42d',
                 color: "black",
                 zIndex : "10",
            })
        },
        mouseleave : function(){
            $(this).css({

                transform : "scale(1)",
                        transitionDuration :'0.5s',
                 backgroundColor : 'rgb(83, 218, 49)',
                        
                        color:"white",
                      zIndex : "0",
            })
        }
    })
   //  truot menu
    $(window).scroll(function(){
        if($(this).scrollTop() >=500){
            $("#topHead").css({
                "position":"fixed",
                "top":0,
                "right":0,
                "left":0,
                "z-index":99
            })
            $("nav").css({
                "position":"fixed",
                "top":"45px",
                "right":0,
                "left":0,
                "z-index":99,

            })
        }else{
            $("#topHead").css({
                "position":"relative",
                "top":0,
                "right":0,
                "left":0,
                "z-index":99,

            })
            $("nav").css({
                "position":"relative",
                "top":0,
                "right":0,
                "left":0,
                "z-index":99,

            })
        }
    })

//    $(".submenu > li").click(function(){
//        var h= $(this).attr("href")
//       $("html, body").animate({
//           scrollTop:  $(h).prop("offsetTop")+ "1200px"
//      },1000)
//      //  alert("co vo")
//    })

   // alert("khio")


    $(".changeImg > li img").click(function(){
        var src = $(this).attr("src")
        $("#showImg").attr("src",src)
      //  alert(src)

    })

    $("#close").click(function(){
        $("#contentInforItem").fadeOut(400)
        $("#content2").fadeTo(1000,1)

    })
    $(".show").click(function(){



        $("#contentInforItem").fadeIn(400)
        $("#content2").fadeTo(1000,0.7)


    })


    $(".showMoreImg").click(function(){
        var sp = $(this).attr("rel")
       $("#showImg").attr("src",sp)
        console.log(`pictures/items/cay4/sp${$(this).attr("role")}`)
       var subImg = document.querySelectorAll(".changeImg img")
       for(var i = 0 ; i < subImg.length ;i++)
       {
           subImg[i].src = `pictures/items/cay${$(this).attr("lang")}/sp${$(this).attr("role")}/cay${i+1}.jpg`
       }
    })

   // sử lý ảnh xem them
   // ảnh main div xem them

    // &("input").mouseenter(function(){
    //     $(this).animate({
    //         "background-color": "red",
    //     })
    // })



    //Phan tim kiem

    
    $(".timKiem").click(function(){



   $("#resutlSearch").slideDown(1000)

        document.getElementById("resutlSearch").innerHTML = "<i id='closeResutlSearch' class='fas fa-trash'></i> <h1 id='listSearch'><i class='fas fa-list'></i> Danh sach san pham tim kiem</h1>"
      //  alert("heheheh")


        var va  = $("#search").val()
     //  alert(va)
        

        var b =   $(`div.item h1:contains(${va})`).parent().parent()
        console.log(b)
      $("#resutlSearch").append(b)

      /*
      //jsCrip
    //  var tmp =   document.querySelectorAll(".item")
    //  console.log(tmp)

    //  for(var i = 0 ; i < tmp.length ;i++ )
    //  {
    //      var c = tmp[i].querySelector(".nameItem")
    //      c = c.innerText
    //   //   console.log(c)

    //        if(c.indexOf(va) > 0){

    //                console.log("tim thay")
    //                console.log(tmp[i])
    //                $("#resutlSearch").append(tmp[i])
    //        }
      
    //  }
       */
    })

  $("#resutlSearch").on("click","i#closeResutlSearch",function(){
   
   $("#resutlSearch").slideUp(1000)

  
  })
 
  $("#showNews").on({
    click: function(){
        $("#content1").show(1000)
    //   alert("ooke 1")
    },
  
  })

  $("#tittleContent1").click(function(){
    $("#content1").hide(1000)
  })
    // $("#showNews").click(function(){
    //     $("#content1").show(1000)
    //     alert("ooke 1")
    // })
    // $("#showNews").dblclick(function(){
    //     alert("oke 2")
    //     $("#content1").hide(1000)
    // })
})