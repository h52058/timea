// $(function(){
//     $(".topnava").click(function(){
//         $(".topnavul").stop().slideToggle("fast");
//     });
// });


var Body = {
    setColor:function (color){
    $('body').css('color',color);
    },
    setBackgroundColor:function (color){
    $('body').css('backgroundColor',color);
    }
}


function nightDayhandler(self){
    var target = document.querySelector('body');

    if(self.value === '야간모드'){
        Body.setBackgroundColor('black');
        Body.setColor('white');
        self.value = '주간모드';
    }else{
        Body.setBackgroundColor('white');
        Body.setColor('black');
        self.value = '야간모드';
    }
}