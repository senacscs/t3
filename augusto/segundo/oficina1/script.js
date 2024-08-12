const input = document.querySelector('#arquivo');
const preview = document.querySelector('#preview')
const btnDownload = document.querySelector('#download')

input.addEventListener('change' , function(){
    const arquivo = this.files[0];
    const leitor = new FileReader();
    leitor.addEventListener('load', function(){
        preview.value= leitor.result;
    });

    if(arquivo) {
        leitor.readAsText(arquivo);
    }

});

const download = function() {
    const a = document.createElement('a');
    a.style = 'display: none';
    document.body.appendChild(a);
    return function(conteudo, nomeArquivo) {
        const blob = new Blob([conteudo], { type: 'octet/stream' });
        const url = window.URL.createObjectURL(blob);
        a.href = url;
        a.download = nomeArquivo;
        a.click();
        window.URL.revokeObjectURL(url);
    }
}

btnDownload.addEventListener('click', function(){
    download()(preview.value, '');
})

