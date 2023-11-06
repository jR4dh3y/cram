var crsr = document.querySelector("#cursor"); // dom mai pard lena agey 
var crsrBlur = document.querySelector("#cursor-blur"); // dom mai pard lena agey 

// the crusor hover is not working for the navbar

// document sai pura html select hoh jaeyga ,, ad event listener sai joh joh kuch hoga record hoga kon? ==> mouse ki movements in this case kidr? ==> function (xyz) ke andar 
document.addEventListener("mousemove", function(dets){
    crsr.style.left = dets.x + "px"; // px isliye likha kyunki wrt to what move hoga uske liye samjh nhi aya toh bad mai dom pardna hai tab ajeyga samj 
    crsr.style.top = dets.y + "px";
    crsrBlur.style.left = dets.x - 200 + "px"; // - 200 WAGERA POSITION KAHA HOGI WOH SET KARNE KE LIYE HAI
    crsrBlur.style.top = dets.y - 200 + "px";
});

var h4all = document.querySelectorAll("#nav h4"); // we selected querySelectorAll because we ddint write all in query selector then only one h4 that is the first one would be picked


// + 30 pai the cursor effect is working 
// asey bhi its working maybe h4 center mai jakr activate hoh raha hai kuch samj nhi araha hai check again 

h4all.forEach(function(elem){
    elem.addEventListener("mouseenter",function(){
        crsr.style.scale = 3;
        crsr.style.border = "1px solid white";
        crsr.style.backgroundColor = "transparent";

    });
    elem.addEventListener("mouseleave",function(){
        crsr.style.scale = 1;
        // after removing +30 the cursro effect scaling stops working but if i remove below two also then it works perfectly whats the issue check !!
        crsr.style.border = "0px solid #96c11e";
        crsr.style.backgroundColor = "#96c11e";

    });
});




// gsap is a librabry of js used for animations
// scoll triger use karke ham animations ko scroll hone par hi chaleygey 

gsap.to("#nav",{
    backgroundColor : "black", // css ki koi bhi property ham de saktey hai by using CAMEL CASE THAT IS background-color ==> backgroundColor

    duration:0.5, // itne time bad load hogi ~ Plus seconds likhne ki zarurat nhi hai 
    height: "110px", // load hone ke bad jitni bhi nav ki css mai height hai change hokr js jitni hoh jaeygi 
    
    scrollTrigger:{
        trigger:"#nav", // triggers the mentioned element 
        scroller:"body", // mentioned element will be triggered jab mai yaha pai mentioned element ko scroll karunga  

        // markers:true, // is sai pata chaleyga ki chl raha hai ya nhi jab tak maine iske neeche wala yani ki START nhi diya tha tab tak it was starting from zero ..... to be continued

        start:"top -10%", // lekin jab maine yeh dala toh woh animation tabi trigger hui jab maine thorda sa scroll kiya >>>>> aur start matlab upar sai neeche atey time 4 percent pai activate 
        //  minus samj nhi aya muje check again 

        end:"top -11%", // aur end sai 5 percent matlab upar jatey time jaisey hi 5 percent bacha hoga animation khatam

        scrub:1, // yeh repeat mai help karta hai like == > jab mai neeche jaunga iske bina aur wapis aunga upar toh yeh wahi raheyga,,,, Par iske hone pai upar jane pai start mai waisey hi raheyga >>>>>>>>> and ham scrub ki value - sai 5 tak bhi de saktey hai 
    },

});

gsap.to("#main",{
    backgroundColor: "black",
    scrollTrigger:{
        trigger: "#main",
        scroller:"body",
        start : "top -25%",
        end: "top -70%",
        scrub:1,
    },
});

gsap.from("#about-us img,#about-us-in",{
    y:90, // for movement in y axis (animation)
    opacity:0,
    duration:1,
    scrollTrigger:{
        trigger:"#about-us",
        scroller:"body",
        start:"top 70%",
        end:"top 65%",  
        scrub:2,
    },
});

gsap.from("#page2 h1",{
    y:50,
    scrollTrigger:{
        trigger:"#page4 h1",
        scroller:"body",
        start:"top 70%",
        end:"top 75%",
        scrub:2,
    }
})