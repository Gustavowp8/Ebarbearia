function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');

    var bhora = window.document.getElementById('bHora');
    
        var data = new Date()
        var hora = data.getHours()
    
        if(hora >= 0 && hora < 12)
        {
            //Bom dia
            img.src = 'icones/manha.png'
            msg.innerHTML = `Bom dia prezado cliente é uma grande satisfação ter você aqui.`
        } 
        else if(hora >= 12 && hora < 18)
        {
            //Boa tarde
            img.src = 'icones/tarde.png'
            msg.innerHTML = `Boa tarde prezado cliente é uma grande satisfação ter você aqui.`
        }
        else
        {
            //Boa noite
            img.src = 'icones/noite.png'
            msg.innerHTML = `Boa noite prezado cliente é uma grande satisfação ter você aqui.`
            //document.body.style.background = '#444444'
        }
        
}

function cChamaMapa(){
    end.style.display='block'
}

function fFechaMaps(){
    end.style.display='none'
}

function cMapa(){
    alert('Localização indisponivel no momento!')
}

function agenda(){
    alert('Agendamento online indisponivel no momento')
}

function aviso(){
    alert('Link indisponivel')
}

function whast(){
    location = 'https://wa.me/5561981462200?text=Vim+pelo+site+quero+fazer+um+agendamento.'
}

function inst(){
    location = 'https://instagram.com/emanuel_du_corte_?igshid=MzRlODBiNWFlZA=='
}