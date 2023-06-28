let ans=["harry poter","spanch bob","piraten","simsons","star wars","lion king","frozen","shreck","shreck","rocky","dons","one haus","t1000","bacg ficha","gosts"]
let progres=0
let wasrebus=[]

let pic =Math.floor(1 + Math.random()*15)

let timeStoreg =localStorage
let time
if(timeStoreg.getItem('time') != null){
   time =parseInt(timeStoreg.getItem('time'))
}
else{
     time = 60
    timeStoreg.setItem('time', time)
}
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
        let ans=$("#inp").attr("text")
        if($("#inp").val()==`${ans[pic-1]}`){
            alertify.success("Right")
            $("#inp1").vall("")
            progres++
            wasrebus.push(pic)

            if(progres>5){
             do{
                pic=Math.floor(1 + Math.random()*15)
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
    $(".time").knob({
             
        'displayInput':false,
        
        'fgColor':'red',
        'inputColor':'green',
        'bgColor':'blue',
        'width':60,
        'height':55,
        'lineCap':'line',
        'thickness':0.5,
    })

    $(".start").click(function(){
        $(".start").hide()
        $(".hideShow").show()
        startTime()
    })
    
})




function random(arg){
    let a=Math.floor(1+ Math.random() * 12);
    $('#sound').attr("src",'sound/'+a+'.mp3')
    console.log(a)
   
}

function  startTime(){
    setInterval (function(){
                 time=parseInt(localStorage.getItem("time"))-1;
            $(".time").val(time).trigger('change');
            if(time==0){
                alertify.error("Time out")
                setTimeout(()=>window.open("../2/JF.html","_self",false),2000);
                localStorage.removeItem("time")
            }else if(time>0){
                localStorage.setItem("time",time)
            }
    },1000)
   
}