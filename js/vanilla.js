
const app = document.getElementById('root')

const conteudo = document.createElement('div')
conteudo.setAttribute('class','conteudo')

app.appendChild(conteudo)

var request = new XMLHttpRequest()

request.open('GET','https://api.sheety.co/30b6e400-9023-4a15-8e6c-16aa4e3b1e72', true)

request.onload = function(){
    var data = JSON.parse(this.response)
    if(request.status >= 200 && request.status < 400){
        data.forEach(airBnb => {
            
            const galeria = document.createElement('div')
            galeria.setAttribute('class','galeria col-xs-12 col-md-4')

            const photos = document.createElement('img');
            photos.setAttribute('class','photos-api ')
            photos.src = airBnb.photo;
            
            const h3 = document.createElement('h3')
            h3.textContent = airBnb.property_type;
            h3.setAttribute('class','tamanho-h3')

            const h4 = document.createElement('h4')
            h4.textContent = airBnb.name;
            h4.setAttribute('class','tamanho-h4')

            const span = document.createElement('span')
            span.textContent = airBnb.price;    

            conteudo.appendChild(galeria);
            galeria.appendChild(photos);
            galeria.appendChild(h3);
            galeria.appendChild(h4);
            galeria.appendChild(span);
        })
    }else{
        console.log('Nao deu certo')
    }
}

request.send()