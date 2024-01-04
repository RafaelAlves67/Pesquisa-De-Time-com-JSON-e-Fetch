function carregar(){

    fetch('times.json')
        .then(res => res.json())
        .then(times => {


                let container = document.querySelector('.container')
                


                times.map(time => {
                    const card = document.createElement('div')
                    card.classList.add('card')

                    const img = document.createElement('img')
                    img.src = time.imagem
                    img.alt = time.nome

                    const titulo = document.createElement('h3')
                    titulo.textContent = time.nome

                    card.appendChild(img)
                    card.appendChild(titulo)

                    container.appendChild(card)
                    
                })     
        })
}

carregar();