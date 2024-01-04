function carregar(){

    fetch('times.json')
        .then(res => res.json())
        .then(times => {


                let container = document.querySelector('.container')
                let campoPesquisa = document.querySelector('#input')
                let btn = document.querySelector('#botao')

                    
                
                   
                    btn.addEventListener('click', () => {
    
                        const timeEncontrado = times.find(time => campoPesquisa.value === time.nome)

                        container.innerHTML = '';

                        
                        if(timeEncontrado){
                            const card = document.createElement('div')
                            card.classList.add('card')
    
                            const img = document.createElement('img')
                            img.src = timeEncontrado.imagem
                            img.alt = timeEncontrado.nome
    
                            const titulo = document.createElement('h3')
                            titulo.textContent = timeEncontrado.nome
    
                            card.appendChild(img)
                            card.appendChild(titulo)
    
                            container.appendChild(card)
                            
                        } else{
                            let texto = document.createElement('h3');
                            texto.textContent = "Time não encontrado!"
                            texto.style.color = "red"
                            container.appendChild(texto)
                        }

                        campoPesquisa.value = ""
                        campoPesquisa.focus()
                    })                  
        })
}

carregar();