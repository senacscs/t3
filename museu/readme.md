# Código do header
## Copie e coloque para ter um padrão em todo o site
---
```html
    <header>
        <img src="assets/logo.png" alt="Museu online da consciência negra">
        <a href="./">Voltar</a>
        <style>
            @import url('https://fonts.googleapis.com/css2?family=Inria+Sans:wght@700&family=Inter:wght@100;400;700&family=K2D&family=Poppins:wght@500&family=Raleway:wght@300;400&family=Righteous&display=swap');
            * {
                margin: 0;
            }
            header img{
                height: 10vh;
            }
            header {
                align-items: center;
                background-color: rgb(20, 20, 20);
                padding: 10px;
                display: flex;
                position: fixed;
                width: 100%;
            }
            header a {
                margin-left: 50vw;
                color: #CDA000;
                font-family: 'Inria Sans', sans-serif;
                text-decoration: none;
                font-size: 1.7rem;
                margin-bottom: 2px;
                transition: 1s ease-in;
            }
            header a:hover {
                border-bottom: 2px solid #CDA000;
                margin-bottom: 0px;
            }
            @media screen and (max-width: 450px) {
                header img {
                    height: 6vh;
                }
                header a {
                    margin-left: 13vw;
                    font-size: 1.3rem;
                }
            }
        </style>
    </header>
```
