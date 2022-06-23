const main = document.querySelector('main');

//requisição principal

function loadHome() {
    fetch('views/home.html')
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            main.innerHTML = html;
        });
}

loadHome();

function loadHTML(url) {
    fetch(url)
        .then((res) => {
            return res.text();
        })
        .then((html) => {
            main.innerHTML = html;
        })
}

//requisição menus
const mnHome = document.querySelector('#menuHome');
mnHome.onclick = function () {
    loadHTML('views/home.html')
}
const mnCadastro = document.querySelector('#menuCadastro');
mnCadastro.onclick = function () {
    loadHTML('views/cadastro.html')
}
// const mnCarrinho = document.querySelector('#btnCarrinho');
// mnCarrinho.onclick = function () {
//     loadHTML('views/carrinho.html')
// }

// Injeta texto sobre nós by JSON
const btnSobre = document.getElementById('btnSobre')
if (btnSobre != null) {
    btnSobre.onclick = function () {
        loadHTML('views/sobrenos.html')

        let sectionSobre = document.getElementById('sobre');
        let requestURL = 'http://localhost:3000/projeto';
        let request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            let sobre = request.response;
            mostrarSobre(sobre);
        }

        function mostrarSobre(jsonObj) {
            let obj = jsonObj[0]['sobre'];
            for (let i = 0; i < obj.length; i++) {
                let sectionSobre = document.getElementById('sobre');
                let myArticle = document.createElement('article');
                let myPara2 = document.createElement('p');

                myPara2.textContent = obj[i].text;
                myArticle.appendChild(myPara2);
                sectionSobre.appendChild(myArticle);
            }
        }

    }
}


// Injeta texto localização by JSON
const btnLocal = document.getElementById('btnLocal')
if (btnLocal != null) {
    btnLocal.onclick = function () {
        loadHTML('views/localizacao.html')

        let sectionLocal = document.getElementById('local');
        let requestURL = 'http://localhost:3000/projeto';
        let request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            let local = request.response;
            mostrarLocalizacao(local);
        }

        function mostrarLocalizacao(jsonObj) {
            let obj = jsonObj[0]['localizacao'];
            for (let i = 0; i < obj.length; i++) {
                let sectionLocal = document.getElementById('local');
                let myArticle = document.createElement('article');
                let myPara2 = document.createElement('p');
                let img = document.createElement('img');

                img.src = "img/endereco.png";
                myPara2.textContent = obj[i].text;
                myArticle.appendChild(myPara2);
                myArticle.appendChild(img);
                sectionLocal.appendChild(myArticle);
            }
        }

    }
}

// Injeta texto sobre nós by JSON
const btnCarrinho = document.getElementById('btnCarrinho')
if (btnCarrinho != null) {
    btnCarrinho.onclick = function () {
        loadHTML('views/carrinho.html')

        let sectionCarrinho = document.getElementById('carrinhos');
        let requestURL = 'http://localhost:3000/projeto';
        let request = new XMLHttpRequest();

        request.open('GET', requestURL);
        request.responseType = 'json';
        request.send();
        request.onload = function () {
            let carrinho = request.response;
            mostrarCarrinho(carrinho);
        }

        function mostrarCarrinho(jsonObj) {
            let obj = jsonObj[0]['produtos'];
            for (let i = 0; i < obj.length; i++) {
                let sectionCarrinho = document.getElementById('carrinhos');
                let myH2 = document.createElement('h3')
                let myArticle = document.createElement('article');
                let myPara2 = document.createElement('div');
                myPara2.textContent = obj[i].nome + ' |  ' + 'Preço:' + ' ' + obj[i].preco + '|   Quantidade: 1 |';

                myArticle.appendChild(myPara2);
                sectionCarrinho.appendChild(myArticle);
            }
            let sectionTotal = document.getElementById('total');
            let myArticle = document.createElement('article');
            let total = document.createElement('strong');
            total.textContent = 'Total = 104.33';

            myArticle.appendChild(total);
            sectionTotal.appendChild(myArticle);
        }

    }
}
