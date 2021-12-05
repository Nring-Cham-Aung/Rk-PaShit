
var inhome1=5;
var going1=0;
var inhome2=5;
var going2=0;
var add1=0;
var add2=0;
var team;
var stop;
var get=false;
var readyobj=0;
var cangofield='';
var togo=[];
var goowner;
var moveaccept='';
var pcolor='';
var gokeyclick=0;
var travel={'key11':0,'key12':0,'key13':0,'key14':0,'key15':0,'key21':0,'key22':0,'key23':0,'key24':0,'key25':0};
var startp={'key11':'0','key12':'0','key13':'0','key14':'0','key15':'0','key21':'0','key22':'0','key23':'0','key24':'0','key25':'0'};

var kill1=0;
var kill2=0;
var readyfinish='';

var success1=0;
var success2=0;


function generator(player){
    goowner=player;
    var naming;
    var genval;
    genval=Math.floor(Math.random()*7);
    // genval=cusgen();

    switch(genval){
        case 6:
            naming='ဘာရာ';
            break;
        case 5:
            naming='အစိပ်ကေ';
            break;
        case 4:
            naming='လေးလုံး';
            break;
        case 3:
            naming='သုံးလုံး';
            break;
        case 2:
            naming='ပါချေ';
            break;
        case 1:
            naming='တစ်ဆယ်';
            break;
        case 0:
            naming='တစ်ခြောက်';
            break;
    }

    if(genval==2 || genval==3 || genval==4){
        stop=true;
        $('.playbtn').prop('hidden',true);

        if(player==1){
            if(inhome1==5 || going1==0){
                $('#t2btn').prop('hidden',false);
                $('#t2l').html('');
                $('#t2t').append('<label class="go">Go</label>');    
                $('#t1t .go').remove();
                $('#t2l').html('');
                get=false;
            }else{
                get=true;
                defineval(genval);
            }
        }

        if(player==2){
            if(inhome2==5 || going2==0){
                $('#t1btn').prop('hidden',false);
                $('#t1l').html('');  
                $('#t1t').append('<label class="go">Go</label>');
                $('#t2t .go').remove();
                $('#t1l').html('');
                get=false;
            }else{
                get=true;
                defineval(genval);
            }
        }

    }else if(genval==6){
        stop=false;
        if(player==1){
            if(going1!=0){
                get=true;
                defineval(genval);
            }else{
                get=false;
            }
        }else{
            if(going2!=0){
                get=true;
                defineval(genval);
            }else{
                get=false;
            }
        }

    }else if(genval==5){
        stop=false;
        // $('.playbtn').prop('hidden',true);
        if(player==1){
            $('.homet1').css({'height':'20px','width':'20px'});
            if(inhome1!=0){
                inhome1=inhome1-1;
                going1=going1+1;
                add1=add1+1;
                naming=naming+'(တင်)';

            }else{
                // "တစ်ပိုပေး"
            }
        }else{
            $('.homet2').css({'height':'20px','width':'20px'});
            if(inhome2!=0){
                inhome2=inhome2-1;
                going2=going2+1;
                add2=add2+1;
                naming=naming+'(တင်)';
            }else{
                // "တစ်ပိုပေး"
            }
        }
        
        get=true;
        defineval(genval);

    }else if(genval==1){
        stop=false;
        // $('.playbtn').prop('hidden',true);
        if(player==1){
            $('.homet1').css({'height':'20px','width':'20px'});
            if(inhome1!=0){
                inhome1=inhome1-1;
                going1=going1+1;
                add1=add1+1;
                naming=naming+'(တင်)';
            }else{
                // "တစ်ပိုပေး"
            }

        }else{
            $('.homet2').css({'height':'20px','width':'20px'});
            if(inhome2!=0){
                inhome2=inhome2-1;
                going2=going2+1;
                add2=add2+1;
                naming=naming+'(တင်)';
            }else{
                // "တစ်ပိုပေး"
            }
        }

        get=true;
        defineval(genval);

    }else if(genval==0){
        stop=false;
        if(player==1){
            if(going1!=0){
                get=true;
                defineval(genval);
            }else{
                get=false;
            }
        }else{
            if(going2!=0){
                get=true;
                defineval(genval);
            }else{
                get=false;
            }
        }
    }
    

    return naming;

}

var lid=0;

$('#t1btn').click(function() {
    var txt=generator(1);
    if(get){
        $('#t1l').append("<label class='m5' id='l"+lid+"'>"+txt+"</label>");
        lid++;
    }else{
        $('#t1l').append("<label class='not'>"+txt+"</label>");
    }
});

$('#t2btn').click(function() {
    var txt=generator(2);
    if(get){
        $('#t2l').append("<label class='m5' id='l"+lid+"'>"+txt+"</label>");
        lid++;
    }else{
        $('#t2l').append("<label class='not'>"+txt+"</label>");
    }
});

function colorchanger(){
    if(pcolor.length==4){
        // In home 
        let idnum=pcolor.substr(1,1)*1;
        if(idnum<3){
            $('#'+pcolor).css({'background':'sandybrown'});
            // Over Going Chacking
            if(travel[readyobj]>75 && kill1==0){
                losegame();
            }
        }else{
            $('#'+pcolor).css({'background':'cadetblue'});
            // Over Going Chacking
            if(travel[readyobj]>75 && kill2==0){
                losegame();
            }
        }

    }else if(pcolor.length==2 || pcolor.length==3){
        // On road 
        let base=$('#'+pcolor).attr('class');
        if(base=="base"){
            $('#'+pcolor).css({'background':'url("xphoto.jpg")','background-size':'cover', 'background-position':'center'});
        }else{
            let idnum=pcolor.substr(1,2)*1;
            if(idnum>34){
                $('#'+pcolor).css({'background':'sandybrown'});
                // Over Going Chacking
                if(travel[readyobj]>75 && kill1==0){
                    losegame();
                }
            }else{
                $('#'+pcolor).css({'background':'cadetblue'});
                // Over Going Chacking
                if(travel[readyobj]>75 && kill2==0){
                    losegame();
                }
            }
    
        }
    }
    

}

var lred=0
function removeone() { 
    togo=togo.filter((v,k)=>{
        return k!=0;
    });
    
    $('#l'+lred).css({'background':'red'});
    lred++;

    btncontroller();
    movesound();
    
}

function btncontroller(){
    if(togo.length==0){
        if(team=="homet1" || team=="got1"){
            if(add1==0 && stop){
                $('#t2btn').prop('hidden',false);
                $('#t2l').html('');
                $('#t2t').append('<label class="go">Go</label>');    
                $('#t1t .go').remove();
                $('#t2l').html('');
            }
        }else{
            if(add2==0 && stop){
                $('#t1btn').prop('hidden',false);
                $('#t1l').html('');  
                $('#t1t').append('<label class="go">Go</label>');
                $('#t2t .go').remove();
                $('#t1l').html('');
            }
        }
    }
}

function defineval(val) {
    switch(val){
        case 6:
            togo.push(12);
            break;
        case 5:
            togo.push(25);
            break;
        case 4:
            togo.push(4);
            break;
        case 3:
            togo.push(3);
            break;
        case 2:
            togo.push(2);
            break;
        case 1:
            togo.push(10);
            break;
        case 0:
            togo.push(6);
            break;
    }
}

function homeone(homeid){
    clicksound();
    colorchanger();
    moveaccept='';
    if(add1!=0){
        readyobj=homeid;
        cangofield='k1h1 k2h1';
        $('#k1h1').css({'background':'red'});
        $('#k2h1').css({'background':'red'});
    }
}

function hometwo(homeid){
    clicksound();
    colorchanger();
    moveaccept='';
    if(add2!=0){
        readyobj=homeid;
        cangofield='k3h1 k4h1';
        $('#k3h1').css({'background':'yellow'});
        $('#k4h1').css({'background':'yellow'});
    }
    
}

// ******* Sound *************************************************************************
function clicksound(){
    let sound=document.getElementById('clicktone');
    sound.play();
}

function movesound(){
    let sound=document.getElementById('movetone');
    sound.play();
}

$('td').click(function (e) { 
    let acceptfield=e.target.id;
    team=$('#'+readyobj).attr('class');

    // ********* Add New Key And Moving *********

    if(cangofield.search(acceptfield)>=0){      
        if(team =="homet1"){
            $('#'+acceptfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
            $('#k1h1').css({'background':'sandybrown'});
            $('#k2h1').css({'background':'sandybrown'});
            startp[readyobj]=acceptfield;

            add1=add1-1;
            movesound();
            $('h2 #'+readyobj).remove();
            cangofield='';
            gokeyclick=0;

            if(add1==0){
                $('.homet1').css({'height':'15px','width':'15px'});
                btncontroller();
            }
        }else{
            $('#'+acceptfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>')
            $('#k3h1').css({'background':'cadetblue'});
            $('#k4h1').css({'background':'cadetblue'});
            startp[readyobj]=acceptfield;

            add2=add2-1;
            movesound();
            $('h2 #'+readyobj).remove();
            cangofield='';
            gokeyclick=0;

            if(add2==0){
                $('.homet2').css({'height':'15px','width':'15px'});
                btncontroller();
            }

        }
        

    }else{
        var parentid=$('#'+e.target.id).parent().attr('id');
        if(cangofield.search(parentid)>=0 && parentid!=undefined){
            if(team =="homet1"){
                $('#'+parentid).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
                $('#k1h1').css({'background':'sandybrown'});
                $('#k2h1').css({'background':'sandybrown'});
                startp[readyobj]=parentid;

                add1=add1-1;
                movesound();
                $('h2 #'+readyobj).remove();
                cangofield='';
                gokeyclick=0;
    
                if(add1==0){
                    $('.homet1').css({'height':'15px','width':'15px'});
                    btncontroller();
                }
            }else{
                $('#'+parentid).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>')
                $('#k3h1').css({'background':'cadetblue'});
                $('#k4h1').css({'background':'cadetblue'});
                startp[readyobj]=parentid;

                add2=add2-1;
                movesound();
                $('h2 #'+readyobj).remove();
                cangofield='';
                gokeyclick=0;

                if(add2==0){
                    $('.homet2').css({'height':'15px','width':'15px'});
                    btncontroller();
                }
            }

            
        }else{
            // Northing to add
        }
        
    }

    // ****** Normal Moving ***********

    if(acceptfield==moveaccept){
        $('#'+readyobj).remove();
        
        if(team =="homet1" || team=="got1"){
            $('#'+acceptfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
        }else{
            $('#'+acceptfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>')
        }

        pcolor=acceptfield
        travel[readyobj]=travel[readyobj]+togo[0];
        colorchanger();
        removeone();
        // alert(travel[readyobj]);
        gokeyclick=0;
    }else{

    }

    
});


function gokey1helper(param){

    if(param.length==4){
        let currentfield=param.substr(3,1)*1;
        let arrivefield;
        arrivefield=currentfield+togo[0];
        if(travel[readyobj]>75){
            // Comming to home
            if(currentfield==togo[0]){
                // Finish one 
                finishone1(param);
            }else if(currentfield>togo[0]){
                readyfinish='';
                $('#f1').css({'background':'sandybrown'});
                // Get field 
                
                arrivefield=param.substr(0,3)+(currentfield-togo[0]);
                $('#'+arrivefield).css({'background':'red'});
                pcolor=arrivefield;
                moveaccept=arrivefield;
                gokeyclick=1;
            }else{
                readyfinish='';
                $('#f1').css({'background':'sandybrown'});
                // Fileld Over
                // alert('over'); 
            }


        }else{
            readyfinish='';
            $('#f1').css({'background':'sandybrown'});
            // Start Going
            if(arrivefield>7){
                // Over home
                let pchack=param.substr(0,3);
                arrivefield=togo[0]-(7-currentfield);
                
                if(pchack=="k1h"){
                    arrivefield=arrivefield+59;
                }else if(pchack=="k2h"){
                    arrivefield=arrivefield+42;
                }else if(pchack=="k3h"){
                    arrivefield=arrivefield+8;
                }else if(pchack=="k4h"){
                    arrivefield=arrivefield+25;
                }
    
                if(arrivefield>68){
                    arrivefield=arrivefield-68;
                }
                    arrivefield='k'+arrivefield;
                    $('#'+arrivefield).css({'background':'red'});
                    pcolor=arrivefield;
                    moveaccept=arrivefield;
                    gokeyclick=1;
                
            }else{
                // In Home
    
                arrivefield=param.substr(0,3)+arrivefield;
                $('#'+arrivefield).css({'background':'red'});
                pcolor=arrivefield;
                moveaccept=arrivefield;
                gokeyclick=1;
            }
    
            
    
        }
        
    }else{
        // Road Field 
        let currentfield=param.substr(1,2)*1;
        let arrivefield;
        arrivefield=currentfield+togo[0];
        
        if((togo[0]+travel[readyobj])>83){
        //   over field
        alert("over field");
        
        }else if((togo[0]+travel[readyobj])==83){
                // Direct finish
                finishone1(param);
        }else{
        //    get field 
            if((togo[0]+travel[readyobj])>75){
                arrivefield=83-(togo[0]+travel[readyobj]);
                var homestr=startp[readyobj].substr(0,3);
                arrivefield=homestr+arrivefield; 
                moveaccept=arrivefield;

            }else{
                if(arrivefield>68){
                    arrivefield=arrivefield-68;
                }
                arrivefield='k'+arrivefield;
            }
            
            $('#'+arrivefield).css({'background':'red'});
            pcolor=arrivefield;
            moveaccept=arrivefield;
            gokeyclick=1;
        }

    }
}

function gokey1(id){
    clicksound();
    if(goowner=="1"){
        
        if(cangofield=='' && togo.length!=0){
            if(gokeyclick==0){
                colorchanger();
                readyobj=id;
                let fromfield=$('#'+id).parent().attr('id');
                team='homet1';
                // Going From Home 
                gokey1helper(fromfield);
                
            }else{
                
                let appendfield=$('#'+id).parent().attr('id');
                if(appendfield==pcolor){
                    $('#'+readyobj).remove();
                    $('#'+appendfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
                    gokeyclick=0;
                    travel[readyobj]=travel[readyobj]+togo[0];
                    colorchanger();
                    removeone();
     
                }else{
                    // alert(pcolor);
                    if(id!=readyobj){
                        colorchanger();
                        readyobj=id;
                        gokey1helper(appendfield);
                    }
                }
                
            }
        }

    }else{
        let chb=$('#'+pcolor).attr('class');
        let appendfield=$('#'+id).parent().attr('id');

        if(appendfield==pcolor){
            
            if(chb!="base"){
                $('#'+id).remove();
                travel[id]=0;
                startp[id]='0';
                inhome1=inhome1+1;
                going1=going1-1;
                $('#t1t').append('<button class="homet1" id="'+id+'" onclick="homeone('+"'"+id+"'"+')"></button>');
                kill2=kill2+1;
                // alert('Killing one');
            }

            $('#'+readyobj).remove();
            $('#'+appendfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>');
            gokeyclick=0;
            travel[readyobj]=travel[readyobj]+togo[0];
            colorchanger();
            removeone();

        }


    }

}

function gokey2helper(param) {

    if(param.length==4){
        let currentfield=param.substr(3,1)*1;
        let arrivefield;
        arrivefield=currentfield+togo[0];
        if(travel[readyobj]>75){
            // Comming to home
            if(currentfield==togo[0]){
                // Finish one 
                finishone2(param);
            }else if(currentfield>togo[0]){
                readyfinish='';
                $('#f2').css({'background':'cadetblue'});
                // Get field 
                
                arrivefield=param.substr(0,3)+(currentfield-togo[0]);
                $('#'+arrivefield).css({'background':'yellow'});
                pcolor=arrivefield;
                moveaccept=arrivefield;
                gokeyclick=1;
            }else{
                readyfinish='';
                $('#f2').css({'background':'cadetblue'});
                // Fileld Over
                // alert('over'); 
            }


        }else{
            readyfinish='';
            $('#f2').css({'background':'cadetblue'});
            // Start Going
            if(arrivefield>7){
                // Over home
                let pchack=param.substr(0,3);
                arrivefield=togo[0]-(7-currentfield);
                
                if(pchack=="k1h"){
                    arrivefield=arrivefield+59;
                }else if(pchack=="k2h"){
                    arrivefield=arrivefield+42;
                }else if(pchack=="k3h"){
                    arrivefield=arrivefield+8;
                }else if(pchack=="k4h"){
                    arrivefield=arrivefield+25;
                }
    
                if(arrivefield>68){
                    arrivefield=arrivefield-68;
                }
                    arrivefield='k'+arrivefield;
                    $('#'+arrivefield).css({'background':'yellow'});
                    pcolor=arrivefield;
                    moveaccept=arrivefield;
                    gokeyclick=1;
                
            }else{
                // In Home
    
                arrivefield=param.substr(0,3)+arrivefield;
                $('#'+arrivefield).css({'background':'yellow'});
                pcolor=arrivefield;
                moveaccept=arrivefield;
                gokeyclick=1;
            }
    
            
    
        }
        
    }else{
        // Road Field 
        let currentfield=param.substr(1,2)*1;
        let arrivefield;
        arrivefield=currentfield+togo[0];
        
        if((togo[0]+travel[readyobj])>83){
        //   over field
        alert("over field");
        
        }else if((togo[0]+travel[readyobj])==83){
            // Direct finish
            finishone2(param);
        }else{
        //    get field 
            if((togo[0]+travel[readyobj])>75){
                arrivefield=83-(togo[0]+travel[readyobj]);
                var homestr=startp[readyobj].substr(0,3);
                arrivefield=homestr+arrivefield; 
                moveaccept=arrivefield;

            }else{
                if(arrivefield>68){
                    arrivefield=arrivefield-68;
                }
                arrivefield='k'+arrivefield;
            }
            
            $('#'+arrivefield).css({'background':'yellow'});
            pcolor=arrivefield;
            moveaccept=arrivefield;
            gokeyclick=1;
        }

    }
}


function gokey2(id){
    clicksound();
    if(goowner=="2"){
        
        if(cangofield=='' && togo.length!=0){
            if(gokeyclick==0){
                colorchanger();
                readyobj=id;
                let fromfield=$('#'+id).parent().attr('id');
                team='homet2';
                // Going From Home 
                gokey2helper(fromfield);
                
            }else{
                
                let appendfield=$('#'+id).parent().attr('id');
                if(appendfield==pcolor){
                    $('#'+readyobj).remove();
                    $('#'+appendfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>');
                    gokeyclick=0;
                    travel[readyobj]=travel[readyobj]+togo[0];
                    colorchanger();
                    removeone();
     
                }else{
                    // alert(pcolor);
                    if(id!=readyobj){
                        colorchanger();
                        readyobj=id;
                        gokey2helper(appendfield);
                    }
                }
                
            }
        }

    }else{
        let chb=$('#'+pcolor).attr('class');
        let appendfield=$('#'+id).parent().attr('id');

        if(appendfield==pcolor){
            
            if(chb!="base"){
                $('#'+id).remove();
                travel[id]=0;
                startp[id]='0';
                inhome2=inhome2+1;
                going2=going2-1;
                $('#t2t').append('<button class="homet2" id="'+id+'" onclick="hometwo('+"'"+id+"'"+')"></button>');
                kill1=kill1+1;
                // alert('Killing one');
            }

            $('#'+readyobj).remove();
            $('#'+appendfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
            gokeyclick=0;
            travel[readyobj]=travel[readyobj]+togo[0];
            colorchanger();
            removeone();

        }
    }

}

function finishone1(id){
    $('#f1').css({'background':'red'});
    readyfinish=readyobj;
    pcolor='';
    moveaccept='';
}

function finishone2(id){
    $('#f1').css({'background':'yellow'});
    readyfinish=readyobj;
    pcolor='';
    moveaccept='';
}

function losegame(){
    alert("Going Field "+travel[readyobj]+" By Team "+goowner);
}

$('#f1').click(()=>{
    if(readyfinish!=''){
        $('#'+readyobj).remove();
        $('#f1').append('<button class="got1" id="'+readyobj+'" ></button>');
        readyfinish='';
        $('#f1').css({'background':'sandybrown'});
        travel[readyobj]=travel[readyobj]+togo[0];
        going1=going1-1;
        success1=success1+1;
        
        removeone();

        if(success1==5){
            winner(1);
        }
    }

    // Over Going Chacking
    if(travel[readyobj]>75 && kill1==0){
        losegame();
    }

});

$('#f2').click(()=>{
    if(readyfinish!=''){
        $('#'+readyobj).remove();
        $('#f2').append('<button class="got2" id="'+readyobj+'" ></button>');
        readyfinish='';
        $('#f2').css({'background':'cadetblue'});
        travel[readyobj]=travel[readyobj]+togo[0];
        going2=going2-1;
        success2=success2+1;
        
        removeone();

        if(success2==5){
            winner(2);
        }
    }

    // Over Going Chacking
    if(travel[readyobj]>75 && kill2==0){
        losegame();
    }

});


function winner(team){
    if(team==1){
        alert("Team One is Winner");
    }else{
        alert("Team Two is Winner");
    }
}


var cc=0;
function cusgen(){
    var aaa=[1,2,5,6,6,6,6,4,2,2,2,2,2,2,2,2,2];
    cc++
    return aaa[cc];
}
// var ll=0;
// setInterval(()=>{
    
//         $('#ts').html('');
//         if(togo.length!=0){
            
//             $('#ts').append('<p>'+togo+'</p>');
            
//         }
        

// },100);


