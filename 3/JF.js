let firstCard=null;
let secondCard=null;
let progress =0
let cards=[
    {
        name:"py",
        img:"data:image/jpeg;base64,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",
        id:1,
    },

    {
        name:"js",
        img:"https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png",
        id:2,
    },

    {
        name:"intel",
        img:"https://s3-symbol-logo.tradingview.com/intel--600.png",
        id:3,
    },

    {
        name:"java",
        img:"https://upload.wikimedia.org/wikipedia/uk/8/85/%D0%9B%D0%BE%D0%B3%D0%BE%D1%82%D0%B8%D0%BF_Java.png",
        id:4,
    },

    {
        name:"jq",
        img:"https://www.interviewbit.com/blog/wp-content/uploads/2021/10/jquery-logo-vertical_large_square.png",
        id:5,
    },

    {
        name:"nasa",
        img:"https://yt3.googleusercontent.com/ytc/AGIKgqM3XIV7958dnUx4CZulcV0teZGz4xY86HYxOC3J9g=s900-c-k-c0x00ffffff-no-rj",
        id:6,
    },

    {
        name:"amd",
        img:"data:image/png;base64,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",
        id:7,
    },

    {
        name:"win",
        img:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAQMAAADCCAMAAAB6zFdcAAAAnFBMVEX///8BeNYEd9P///36//4AeNgAdNQAdNj9/f/9/vv9//f///pnos4Aa8Pg+PvY9P/w/PtyrdoAcMgAZ8VSmtk4idOpy+YAbMn2//+LttUvhNA5h84yfrw4hMJ0rs94qs4AeOAAaLwHds4Ab8Fnocdvrt0AdeGRweBRk8xSmt1Ik9FTl8jK3uudyuqqx9uizuoAa9EAZMUAWKrl9fzjMcQrAAAClklEQVR4nO3c61ITQRCG4cl272G2ZV2ISRajEoPigVOE+783Zy1uQDtFU/i+EH5+RZ5MoPjBpERERERERERERERERM+TiBxh4ggrgc3ffvf0NP61nPOUJxHzzUgS0wgD08m9oWpmapN7SVPMcTp/v1352q4+DJp1/OjcWW23208hBhdt09aNp2r3ebCUhrOda6bZVXX7JsTgdFc529cngyQbLxe+nbqqmy8RBHLaVgtnxcBUxjPvzqKKOQfHNKgxwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDIIMagw4BxhggAEGGGCAAQYYYIABBhhggAEGGGCAAQYYYPC3OxiEngP364fBqzDwfuv8POAcYPBaDJp97avaPxm0rplF+Qz63/+v7b72/c/+ot4M1qXx0rmzrwLfC+VZ+F7Bcg6kGDhn4s7BRXvlvL+iaZaDqA6bK+9O0DlI376/8/bj52hdN11f+5fOIwhsfrhvo+lNs/kv2ClDIRfjiKjzWiORpJMmsd63onMhBNkszbc8uZJylFQn305vIhZioOp9K5RzMJUv5t55ejx7/c3t+n7t7G4sr+F4d+ucub9f30QYpNPDpvVWfjdmGU8O3p3D4TqCgL8XMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwwwwAADDDDAAAMMMMAAAwxehsGx7pD0EkQZpItfm6Wzw8OQtB8e3EPLZcxdII9vj1AnanqMoccQA7G+902YzTdtlQ/3TtD9SKnrOi0MjvJ8uZWJpuya6S1nCbknK0lWmyEclVfvz41j6puZ78qKMSAiIiIiIiIiIiKi/7DfmUTnmnpPLksAAAAASUVORK5CYII=",
        id:8,
    },

    {
        name:"cat",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSxSMBEw3aWsJH1Vt9zlKidMvxMMzqy3jPDeJmldN3MdkBSjpCG8K_Nv_BMfJvs9OL8pQI&usqp=CAU",
        id:9,
    },

    {
        name:"lego",
        img:"data:image/png;base64,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",
        id:10,
    },

    {
        name:"lego",
        img:"https://www.apple.com/ac/structured-data/images/knowledge_graph_logo.png?202103091141",
        id:11,
    },

    {
        name:"chevrole",
        img:"https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTJhcD_k2talfsiM43eWY3rEe8m4FVC5qFssA&usqp=CAU",
        id:12,
    },
]



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

    $("#start").click(function(){
        $(".start").hide()
        $(".gameBoard").show()
        // startTime()
        fillBoard()
        // $(".card").on('click',cardClicked)
    })

  

    
    
})




// function random(arg){
//     let a=Math.floor(1+ Math.random() * 12);
//     $('#sound').attr("src",'sound/'+a+'.mp3')
//     console.log(a)
   
// }

function  startTime(){
    setInterval (function(){
                 time=parseInt(localStorage.getItem("time"))-1;
            $(".time").val(time).trigger('change');
            if(time==0){
                alertify.error("Time out")
                setTimeout(()=>window.open("../3/JF.html","_self",false),2000);
                localStorage.removeItem("time")
            }else if(time>0){
                localStorage.setItem("time",time)
            }
    },1000)
   
}

function fillBoard(){
        let board=shuffle([...cards, ...cards])
        for(let i=0;i<board.length;i++){
            let cardHtml=`<div class="card "data-id="${board[i].id}">
                            <div class="front">
                                ROBOCODE
                            </div>
                            <div class="back">
                                <img src="${board[i].img}" alt="${board[i].name}">
                            </div>
                            
                         </div>`

            $(".gameBoard").append(cardHtml)
        }        
}




function shuffle(array){
    let board=[...cards, ...cards]
    let counter = array.length;
    let temp;
    let index;
        // While there are elements in the array
            while (counter > 0) {
        // Pick a random index
            index = Math.floor(Math.random() * counter);
        // Decrease counter by 1
            counter--;
        // And swap the last element with it
            temp = array[counter];
            array[counter] = board[index];
            array[index] = temp;
            }
            return array;
   }

   function cardClicked(event) {
    if(secondCard || $(this).hasClass('matched')){
     return
    }
    if(!firstCard){
     firstCard = $(this);
     firstCard.addClass('flip');
     return
    }
    if(firstCard){
     secondCard = $(this);
     secondCard.addClass('flip');
     if(firstCard.attr('data-id') == secondCard.attr('data-id')){
      firstCard.addClass('matched');
      secondCard.addClass('matched');
      firstCard = null;
      secondCard = null;
      progress++;
      $('.progress').val(progress).trigger('change');
      if(progress==12) {
       win();
      }
      return
     }
     else {
      setTimeout(function(){
       firstCard.removeClass('flip');
       secondCard.removeClass('flip');
       firstCard = null;
       secondCard = null;
      },600);
     }
    }
   }