function carregar(){
    var msg = window.document.getElementById('msg');
    var img = window.document.getElementById('imagem');
    
        var data = new Date()
        var hora = data.getHours()
    
        if(hora >= 0 && hora < 12)
        {
            //Bom dia
            img.src = 'icones/dia.png'
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