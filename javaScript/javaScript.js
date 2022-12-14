let btnFinanciero = document.getElementById('financiero');
let estadoFinanciero = document.getElementById('estadoFinanciero');
let btnAcreencias = document.getElementById('btnAcreencias');
let acreencias = document.getElementById('Acreencias');
var conFinanciero = 0;
var conAcreencias = 0;
var estado = 2;


btnFinanciero.addEventListener('click', ()=>{
    if(estado != 1){
        if(conFinanciero == 0){
            estadoFinanciero.style.display = 'block';
            estadoFinanciero.style.transform = 'rotateX(0)';
            estadoFinanciero.style.transform = 'translateY(0)';        
            conFinanciero++;
            estado = 0;
        }else{
            estadoFinanciero.style.transform = 'translateY(-100%)';
            estadoFinanciero.style.transform = 'rotateX(90deg)';
            estadoFinanciero.style.display = 'none';
            conFinanciero=0;
            estado = 2;
        }
    }
})

btnAcreencias.addEventListener('click', ()=>{
    if(estado != 0){
        if(conAcreencias == 0){
            acreencias.style.visibility = "visible";
            conAcreencias++;
            estado=1;
            console.log('aca estamos')
        } else{
            acreencias.style.visibility = "hidden";
            conAcreencias = 0;
            estado = 2;
        }
    }
    
    
})

var time=2;
setInterval(()=>{
    let banner1 = document.getElementById('banner1');
    let banner2 = document.getElementById('banner2');
    if(time%2 == 0){
        banner1.style.transform = 'translateX(-100%)';
        banner2.style.transform ='translateX(0%)';
        time++;
    } else{
        banner1.style.transform = 'translateX(0%)';
        banner2.style.transform ='translateX(100%)';
        time++;
    }
    
},8000);








