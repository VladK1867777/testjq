let ans=["яблуко","груша","город","школа","сайт","браузер","плагин","цвет","стиль","язик","узор","сорока"]
let progres=0
let wasrebus=[]

let pic =Math.floor(1 + Math.random()*12)











$(document).ready(function(){
    $(".inp2").knob({
            
        'displayInput':false,
        
        'fgColor':'red',
        'inputColor':'green',
        'bgColor':'blue',
        'width':60,
        'height':44,
        'lineCap':'line',
        'thickness':0.5,
    })
   
    $(".accordion-button").click(function(){
         $(".accordion").slideTogle()
    })
    random()


    $(".go").click(function(){
        let ans=$("#inp3").attr("text")
        if($("#inp").val()==`${ans[pic-1]}`){
            alertify.success("Right")
            $("#inp1").vall("")
            progres++
            wasrebus.push(pic)

            if(progres>5){
             do{
                pic=Math.floor(1 + Math.random()*12)
            }
                while(wasrebus.includes(pic))
                startrebus(pic)

            
            }
            else{

            }
        }else{
            alertify.error("Error");
        }
    })
    
    
})




function random(arg){
    let a=Math.floor(1+ Math.random() * 12);
    $('#pic').attr("src",'rebuses/'+a+'.jpg')
    console.log(a)
   
}


