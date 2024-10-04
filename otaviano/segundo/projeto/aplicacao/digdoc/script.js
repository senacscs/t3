document.getElementById('uploadBtn').addEventListener('click', function() {
    document.getElementById('fileInput').click();
});

document.getElementById('fileInput').addEventListener('change', function(event) {
    const file = event.target.files[0];
    if (file) {
        uploadFile(file);
    }
});

document.getElementById('cameraBtn').addEventListener('click', function() {
    if (navigator.mediaDevices && navigator.mediaDevices.getUserMedia) {
        navigator.mediaDevices.getUserMedia({ video: true })
            .then(function(stream) {
                const video = document.createElement('video');
                video.srcObject = stream;
                video.play();
                document.body.appendChild(video);

                const captureButton = document.createElement('button');
                captureButton.textContent = 'Capturar';
                captureButton.className = 'btn';
                document.body.appendChild(captureButton);

                captureButton.addEventListener('click', function() {
                    const canvas = document.createElement('canvas');
                    canvas.width = video.videoWidth;
                    canvas.height = video.videoHeight;
                    const context = canvas.getContext('2d');
                    context.drawImage(video, 0, 0, canvas.width, canvas.height);

                    canvas.toBlob(function(blob) {
                        uploadFile(blob);
                        document.body.removeChild(video);
                        document.body.removeChild(captureButton);
                        stream.getTracks().forEach(track => track.stop());
                    });
                });
            })
            .catch(function(error) {
                console.error('Erro ao acessar a câmera: ', error);
            });
    } else {
        alert('A câmera não é suportada neste dispositivo.');
    }
});

function uploadFile(file) {
    const reader = new FileReader();
    reader.onload = function(event) {
        const img = document.createElement('img');
        img.src = event.target.result;
        img.alt = 'Documento digitalizado';
        img.addEventListener('click', function() {
            const name = prompt('Insira o novo nome do documento:');
            const description = prompt('Insira a descrição do documento:');
            if (name) {
                img.alt = name;
            }
            if (description) {
                img.title = description;
            }
        });
        document.getElementById('gallery').appendChild(img);
    };
    reader.readAsDataURL(file);
}