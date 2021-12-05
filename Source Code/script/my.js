// ************Setting*************

var waittime=3500;


// ************Setting*************


var playingteam=2;
var genname;
var genval;
var stop;
var get=false;
var togo=[];
var labelary=[];
var addfield=[];
var moveaccept=[];
var readyobj;
var travel={'key11':0,'key12':0,'key13':0,'key14':0,'key15':0,'key21':0,'key22':0,'key23':0,'key24':0,'key25':0};
var tone='err';
var basek=['k56','k64','k5','k13','k22','k30','k39','k47'];





// ************Team one***********
var inhome1=5;
var going1=0;
var add1=0;
var finishone=0;
var killone=0;
var keyone=['key11','key12','key13','key14','key15'];



// ************Team Two***********
var inhome2=5;
var going2=0;
var add2=0;
var finishtwo=0;
var killtwo=0;
var keytwo=['key21','key22','key23','key24','key25'];



var cc=0;
function cusgen(){
    var aaa=[2,1,1,2,5,5,4,6,2,1,2,5,4,1,1,1,6,6,6,6,0,4,5,2,2,2,2,2];
    cc++
    return aaa[cc];
   
}

function playtone(ton){
    if(ton=='bgsound'){
        $('#tone').prop('src','sound/'+ton+'.m4a');
    }else{
        $('#tone').prop('src','sound/'+ton+'.mp3');
    }
    let sound=document.getElementById('tone');
    sound.play();
}

function generator(player){
    playingteam=player;
    $('.playbtn').prop('hidden',true);

    genval=Math.floor(Math.random()*7);
    // genval=cusgen();
    playmov(genval,player);

    switch(genval){
        case 6:
            genname='ဘာရာ';
            break;
        case 5:
            genname='အစိပ်ကေ';
            break;
        case 4:
            genname='လေးလုံး';
            break;
        case 3:
            genname='သုံးလုံး';
            break;
        case 2:
            genname='ပါချေ';
            break;
        case 1:
            genname='တစ်ဆယ်';
            break;
        case 0:
            genname='တစ်ခြောက်';
            break;
    }

    if(genval==2 || genval==3 || genval==4){
        stop=true;

        if(player==1){
            if(going1==0){
                get=false;
            }else{
                seeget(genval);
                
            }
        }

        if(player==2){
            if(going2==0){
                get=false;
            }else{
                seeget(genval);
                
            }
        }

    }else if(genval==6){
        stop=false;
        if(player==1){
            if(going1!=0){
                seeget(genval);
                
            }else{
                get=false;
            }
        }else{
            if(going2!=0){
                seeget(genval);
                
            }else{
                get=false;
            }
        }

    }else if(genval==5){
        stop=false;
        if(player==1){
            setTimeout(()=>{$('.homet1').css({'height':'20px','width':'20px'});},waittime);
            
            if(inhome1!=0){
                inhome1=inhome1-1;
                going1=going1+1;
                add1=add1+1;
                genname=genname+'(တင်)';

            }else{
                togo.push(1);
                labelary.push('တစ်ပို');
            }
        }else{
            setTimeout(()=>{$('.homet2').css({'height':'20px','width':'20px'});},waittime);

            if(inhome2!=0){
                inhome2=inhome2-1;
                going2=going2+1;
                add2=add2+1;
                genname=genname+'(တင်)';
            }else{
                togo.push(1);
                labelary.push('တစ်ပို');
            }
        }
        
        seeget(genval);
        

    }else if(genval==1){
        stop=false;
        if(player==1){
            setTimeout(()=>{$('.homet1').css({'height':'20px','width':'20px'});},waittime);

            if(inhome1!=0){
                inhome1=inhome1-1;
                going1=going1+1;
                add1=add1+1;
                genname=genname+'(တင်)';
            }else{
                togo.push(1);
                labelary.push('တစ်ပို');
            }

        }else{
            setTimeout(()=>{$('.homet2').css({'height':'20px','width':'20px'});},waittime);

            if(inhome2!=0){
                inhome2=inhome2-1;
                going2=going2+1;
                add2=add2+1;
                genname=genname+'(တင်)';
            }else{
                togo.push(1);
                labelary.push('တစ်ပို');
            }
        }

        seeget(genval);
        

    }else if(genval==0){
        stop=false;
        if(player==1){
            if(going1!=0){
                seeget(genval);
                
            }else{
                get=false;
            }
        }else{
            if(going2!=0){
                seeget(genval);
                
            }else{
                get=false;
            }
        }
    }
    

    // return genname;

}

function playmov(mov,team){

    $('#continer').html('<video id="mov"><source src="bin/'+mov+'p'+team+'.mp4"></video>');
    var topaly=document.getElementById('mov');
        topaly.play();

}

// ********Team One Play*********
$('#t1btn').click(function() {
    playtone('play');
    generator(1);  
    
    setTimeout(()=>{
        
            $('#t1l').html('');
            labelary.forEach((v)=>{
                $('#t1l').append("<label class='m5'>"+v+"</label>");
            });


        btncontroller();

    },waittime);
    
});


// **********Team Two Play***********
$('#t2btn').click(function() {
    playtone('play');
    generator(2); 

    setTimeout(()=>{

            $('#t2l').html('');
            labelary.forEach((v)=>{
                $('#t2l').append("<label class='m5'>"+v+"</label>");
            });

        btncontroller();

    },waittime);
    
});

function seeget(num){

    switch(num){
        case 6:
            num=12;
            break;
        case 5:
            num=25
            break;
        case 4:
            num=4
            break;
        case 3:
            num=3
            break;
        case 2:
            num=2
            break;
        case 1:
            num=10;
            break;
        case 0:
            num=6;
            break;
    }

    var skipval=0;
    if(playingteam==1){
        skipval=Math.min(travel.key11,travel.key12,travel.key13,travel.key14,travel.key15);
    }else{
        skipval=Math.min(travel.key21,travel.key22,travel.key23,travel.key24,travel.key25);
    }
    skipval=skipval+num;

    if(skipval>84){
        get=false;
    }else{
        get=true;
        togo.push(num);
        labelary.push(genname);
    }

}

// No used function
function chackingval(){
    var minch;
    if(playingteam==1){
        minch=[travel.key11,travel.key12,travel.key13,travel.key14,travel.key15];
    }else{
        minch=[travel.key21,travel.key22,travel.key23,travel.key24,travel.key25];
    }

    minch.some((v,k)=>{
        if(v==0){
            minch[k]=1000;
        }
    });

    var minval = Math.min(minch[0],minch[1],minch[2],minch[3],minch[4]);

    if(minval!=1000 && togo.length>0){
        togo.some((v,k)=>{
            if(minval+v>84){
                recolor();
                togo.splice(k,1);
                labelcontroller(k);
                btncontroller();
                moveaccept=[];
            }
        });
    }

    if(playingteam==1){
        if(add1==0 && minval==1000){
            clear();
            $('#t1l').html('');
        }

    }else{
        if(add2==0 && minval==1000){
            clear();
            $('#t2l').html('');
        }

    }
    
}
// ------------------

function btncontroller(){
    if(stop){
        if(togo.length==0){
            if(playingteam==1 && add1==0){
                $('#t2btn').prop('hidden',false);
                $('#t2l').html('');
            }

            if(playingteam==2 && add2==0){
                $('#t1btn').prop('hidden',false);
                $('#t1l').html('');
            }
           
        }
    }else{
        if(playingteam==1){
            
            $('#t1btn').prop('hidden',false);
            
        }else{
            $('#t2btn').prop('hidden',false);
            
        }
    }
}

function homeone(homeid){
    moveaccept=[];
    addfield=[];
    recolor();
    if(add1!=0){
        readyobj=homeid;
        // addfield.push('k1h1','k2h1');
        addfield.push('k2h1');

        // $('#k1h1').css({'background':'red'});
        $('#k2h1').css({'background':'red'});
    }
    playtone('click');
}

function hometwo(homeid){
    moveaccept=[];
    addfield=[];
    recolor();
    if(add2!=0){
        readyobj=homeid;
        // addfield.push('k3h1','k4h1');
        addfield.push('k3h1');
        
        $('#k3h1').css({'background':'yellow'});
        // $('#k4h1').css({'background':'yellow'});
    }
    playtone('click');
}

function fieldestimitor(id,forgo){
    let cfield=$('#'+id).parent().attr('id');
    let cfieldval;
    let efield;
    let efieldval;

    // check for finish or not 

    var trip=travel[id];
    var etrip=trip+forgo;

    if(cfield.length==4){

        if(etrip>76 && etrip<84){
            if(playingteam==1){
                efieldval=84-etrip;
                efield='k1h'+efieldval;
                moveaccept.push(efield);
            }else{
                efieldval=84-etrip;
                efield='k4h'+efieldval;
                moveaccept.push(efield);
            }
        }
        if(etrip==84){
            moveaccept.push("finish");
        }

        if(etrip<76){
            // From Home Going
            cfieldval=cfield.substr(3,1)*1;
            efieldval;
            efieldval=cfieldval+forgo;

            if(efieldval>7){
                efieldval=forgo-(7-cfieldval);
                let pchack=cfield.substr(0,3);
                if(pchack=="k1h"){
                    efieldval=efieldval+59;
                }else if(pchack=="k2h"){
                    efieldval=efieldval+42;
                }else if(pchack=="k3h"){
                    efieldval=efieldval+8;
                }else if(pchack=="k4h"){
                    efieldval=efieldval+25;
                }

                if(efieldval>68){
                    efieldval=efieldval-68;
                }
                
                efield='k'+efieldval;
                moveaccept.push(efield);

            }else{
                // In Home Going
                efield=cfield.substr(0,3)+efieldval;
                moveaccept.push(efield);
            }

        }
        
        if(etrip>84){
            moveaccept.push('over');
        }

    }else{

        if(etrip<=76){
            // Go on
            // Road Going
            cfieldval=cfield.substr(1,2)*1;
            efieldval;
            efieldval=cfieldval+forgo;
            if(efieldval>68){
                efieldval=efieldval-68;
            }
            efield='k'+efieldval;

            basetaker(efield);

            // moveaccept.push(efield);

        }
        if(etrip>76 && etrip<84){
            // get in home road back
            if(playingteam==1){
                efieldval=84-etrip;
                efield='k1h'+efieldval;
                moveaccept.push(efield);
            }else{
                efieldval=84-etrip;
                efield='k4h'+efieldval;
                moveaccept.push(efield);
            }
            
        }
        if(etrip==84){
            moveaccept.push("finish");
        }

        if(etrip>84){
            moveaccept.push('over');
        }

        

    }
}

function gokey1(id){
    double(id,1);
    if(tone!='kill'){
        playtone('click');
    }else{
        playtone(tone);
        tone='err';
    }
    
    addfield=[];
    moveaccept=[];
    recolor();
    readyobj=id;
    if(togo.length>0 && playingteam==1){
       togo.forEach((v,k)=>{
            fieldestimitor(id,v);
       });
       moveaccept.forEach((v)=>{
           if(v=='finish'){
                $('#'+'f1').css({'background':'red'});
           }else{
                $('#'+v).css({'background':'red'});
           }
       });

    }

}

function gokey2(id){
    double(id,2);
    if(tone!='kill'){
        playtone('click');
    }else{
        playtone(tone);
        tone='err';
    }

    addfield=[];
    moveaccept=[];
    recolor();
    readyobj=id;
    if(togo.length>0 && playingteam==2){
       togo.forEach((v,k)=>{
            fieldestimitor(id,v);
       });

       moveaccept.forEach((v)=>{
           if(v=='finish'){
                $('#'+'f2').css({'background':'yellow'});
           }else{
                $('#'+v).css({'background':'yellow'});
           }
       });
      
    }

}

function recolor(){
    $('td').css({'background':'cadetblue'});
    $('#f1').css({'background':'cadetblue'});
    $('#f2').css({'background':'cadetblue'});
    $('.base').css({'background':'url("xphoto.jpg")','background-size':'cover', 'background-position':'center'});

}

function labelcontroller(idx){

    labelary.splice(idx,1);

    if(playingteam==1){
        $('#t1l').html('');
        labelary.forEach((v)=>{
            $('#t1l').append("<label class='m5'>"+v+"</label>");
        });
    }else{
        $('#t2l').html('');
        labelary.forEach((v)=>{
        $('#t2l').append("<label class='m5'>"+v+"</label>");
    });
    }


}

function double(id,t){
    let pid=$('#'+id).parent().attr('id');
    if(playingteam==t){
        if(moveaccept.indexOf(pid)>=0 || addfield.indexOf(pid)>=0){
            // allow to double
            tdclick(pid);
        }
    }else{

            // chacking base
        if(basek.indexOf(pid)>=0){
            // base in two team
            if(moveaccept.indexOf(pid)>=0){

            }
            
        }else{
            // Kill & Death
            if(moveaccept.indexOf(pid)>=0){
            // Kill & Set

                let divobj=$('#'+pid+' div');
                if(playingteam==1){
                    // death team two
                    divobj.each((i,ele)=>{
                        var keyid=$('#'+ele.id).prop('id');
                        $('#'+keyid).remove();
                        $('#t2t').append('<button class="homet2" id="'+keyid+'" onclick="hometwo('+"'"+keyid+"'"+')"></button>');
                        
                        inhome2=inhome2+1
                        going2=going2-1;
                        travel[keyid]=0;
                        killone=killone+1;
                    });

                }else{
                    // death team one
                    divobj.each((i,ele)=>{
                        var keyid=$('#'+ele.id).prop('id');
                        $('#'+keyid).remove();
                        $('#t1t').append('<button class="homet1" id="'+keyid+'" onclick="homeone('+"'"+keyid+"'"+')"></button>');
                        
                        inhome1=inhome1+1
                        going1=going1-1;
                        travel[keyid]=0;
                        killtwo=killtwo+1;

                    });
                }

                tone='kill';
                tdclick(pid);
            }
        }



    }
    
}

function tdclick(id){
    let acceptfield=id;
        // ********* Add New Key And Moving *********

        if(addfield.indexOf(acceptfield)>=0){    
        
            if(playingteam ==1){
                $('#'+acceptfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
                $('#k1h1').css({'background':'cadetblue'});
                $('#k2h1').css({'background':'cadetblue'});
    
                add1=add1-1;
                playtone('move');
                $('h2 #'+readyobj).remove();
                addfield=[];
    
                if(add1==0){
                    $('.homet1').css({'height':'15px','width':'15px'});
                    btncontroller();
                }
            }else{
                $('#'+acceptfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>')
                $('#k3h1').css({'background':'cadetblue'});
                $('#k4h1').css({'background':'cadetblue'});
                // startp[readyobj]=acceptfield;
    
                add2=add2-1;
                playtone('move');
                $('h2 #'+readyobj).remove();
                addfield=[];
    
                if(add2==0){
                    $('.homet2').css({'height':'15px','width':'15px'});
                    btncontroller();
                }
    
            }
            travel[readyobj]=1;
        }
    
        // ****** Normal Moving ***********
    
        let indnum=moveaccept.indexOf(acceptfield);
        if(indnum>=0){
            $('#'+readyobj).remove();
            if(playingteam ==1){
                $('#'+acceptfield).append('<div class="got1" id="'+readyobj+'" onclick="gokey1('+"'"+readyobj+"'"+')"></div>');
            }else{
                $('#'+acceptfield).append('<div class="got2" id="'+readyobj+'" onclick="gokey2('+"'"+readyobj+"'"+')"></div>')
            }
    
           
            travel[readyobj]=travel[readyobj]+togo[indnum];
            // clear
            recolor();
            togo.splice(indnum,1);
            labelcontroller(indnum);
            btncontroller();
            moveaccept=[];

            playtone('move');
        
    
            // Chacking killed to finish
    
            if(travel[readyobj]>76 && killone==0 && playingteam==1){
                // auto lose team one
                endgame(2);
            }
    
            if(travel[readyobj]>76 && killtwo==0 && playingteam==2){
                // auto lose team two
                endgame(1);
            }
    
        }
    
}

function endgame(winplayer){
    $('#finish').attr('hidden',false);

    let winner;
    let loser;
    if(winplayer==1){
        winner='Player one is Winner';
        loser='player two is Loser';

        $('#winkill').html('Kills => '+killone);
        $('#windeath').html('Deaths => '+killtwo);

        $('#losekill').html('Kills => '+killtwo);
        $('#losedeath').html('Deaths => '+killone);
  
    }else{
        winner='Player two is Winner';
        loser='Player one is Loser';

        $('#winkill').html('Kills => '+killtwo);
        $('#windeath').html('Deaths => '+killone);

        $('#losekill').html('Kills => '+killone);
        $('#losedeath').html('Deaths => '+killtwo);

    }

    $('#win').html(winner);
    $('#lose').html(loser);

    setTimeout(()=>{
        playtone('bgsound');
    },1000);

}

function gomain(){
    location.replace('index.html');
}

$('td').click(function (e) { 
    let clickid=e.target.id;
    if($('#'+clickid+' div').prop('id')==undefined && clickid.length<5){
        tdclick(clickid);
    }
   

});

$('#f1').click(()=>{
    let indnum=moveaccept.indexOf('finish');
    if(indnum>=0 && playingteam==1){
        playtone('pass');
        $('#'+readyobj).remove();
        $('#f1').append('<button class="got1" id="'+readyobj+'" ></button><br>');
        
        finishone=finishone+1;
        if(finishone==5){
            endgame(1);
           
        }

        // clear
        recolor();
        togo.splice(indnum,1);
        labelcontroller(indnum);
        btncontroller();
        moveaccept=[];
        going1=going1-1;
        travel[readyobj]=0;

    }
});

$('#f2').click(()=>{
    let indnum=moveaccept.indexOf('finish');
    if(indnum>=0 && playingteam==2){
        playtone('pass');
        $('#'+readyobj).remove();
        $('#f2').append('<button class="got2" id="'+readyobj+'" ></button><br>');
        
        finishtwo=finishtwo+1;
        if(finishtwo==5){
            // Winner
           endgame(2);
        }

        // clear
        recolor();
        togo.splice(indnum,1);
        labelcontroller(indnum);
        btncontroller();
        moveaccept=[];
        going2=going2-1;
        travel[readyobj]=0;


    }
});


function basetaker(field){
    if(basek.indexOf(field)>=0){
        let key=$('#'+field+' div').attr('id');
        if(key==undefined){
            moveaccept.push(field);
        }else{
            if(playingteam==1){
                if(keyone.indexOf(key)>=0){
                    moveaccept.push(field);
                }else{
                    // Notavailible
                    if(going1==1){
                        if(togo.length==1){
                            clear();
                            gokey1(readyobj);
                        }else if(togo.length==2){
                            togo[0]=togo[0]+togo[1];
                            labelary[0]=labelary[0]+' '+labelary[1];
                            gokey1(readyobj);
                        }else{
                            moveaccept.push('notgetbase');
                        }
                    }
                }
            }else{
                if(keytwo.indexOf(key)>=0){
                    moveaccept.push(field);
                }else{
                    // Notavailible
                    if(going2==1){
                        if(togo.length==1){
                            clear();
                            gokey2(readyobj);
                        }else if(togo.length==2){
                            togo[0]=togo[0]+togo[1];
                            labelary[0]=labelary[0]+' '+labelary[1];
                            gokey2(readyobj);
                        }else{
                            moveaccept.push('notgetbase');
                        }
                        
                    }
                }
            }
        }
    }else{
        moveaccept.push(field);
    }
}

function clear(){
    recolor();
    togo=[];
    labelary=[];
    btncontroller();
    moveaccept=[];
}

function hidett(){
    $('#tt').attr('hidden',true);
    playtone('click');
}

function cleanval(){
    clear();
    hidett();
}

function showtt(){
    playtone('click');
    $('#tt').attr('hidden',false);
    
}