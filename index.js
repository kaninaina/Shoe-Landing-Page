$(".plus").click((e)=>{
    let a=e.target.closest(".page");
    $(a).parent().children().removeClass("active");
    $(a).parent().children().find(".content").slideUp(1000)
    $(a).toggleClass("active");
    $(a).find(".content").delay(1000).slideToggle(1000)
})
let data=[
    {"src":"images/shoe1.png",name:"image4"},
    {"src":"images/shoe3.png",name:"image1"},
    {"src":"images/shoe4.png",name:"image2"},
    {"src":"images/shoe5.png",name:"image3"},
    {"src":"images/shoe6.png",name:"image5"},
]

$(".flex-1").click((e)=>{
    let image=$(e.target).attr("src");
    $(e.target).closest(".page").find(".image .image-margin .image-screen").animate({
        left:0,
    },500).animate({left:"100%"},500);
setTimeout(()=>{
    $(e.target).closest(".page").find(".image .image-margin img").delay(1000).attr("src",`${image}`);
},500)

    
})

$(".back").click((e)=>{
    $(".page").removeClass("active");
    $(".content").slideUp(1000);
    let index=$(e.target).closest(".page").attr("name");
    let img=data.filter((el)=>{
    return el.name==index;
    });
 
    $(e.target).closest(".page").find(".image .image-margin img").attr("src",`${img[0].src}`)
})


