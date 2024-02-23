const form = document.querySelector('form');
const error = document.getElementById('error');

form.addEventListener('submit', (e) => {
    e.preventDefault();

        const text = document.getElementById('text').value;
        const error = document.getElementById('error');
    
        if (text === "") {
            error.innerHTML = "The post can't be blank";
        } else {
        error.innerHTML = "";

        const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];

        const newPost = { id: generateUniqueId(), content: text };
        existingPosts.push(newPost);

        localStorage.setItem('posts', JSON.stringify(existingPosts));

        console.log('Post enviado com sucesso:', newPost);
        window.location.href = './'
    }
    function generateUniqueId() {
        return Math.random().toString(36).substr(2, 9);
    }
});
function generatePosts() {
    const existingPosts = JSON.parse(localStorage.getItem('posts'))
    existingPosts.forEach((post) => {

        const posts = document.getElementById('posts')
        const div = document.createElement('div')
        const p = document.createElement('p')
        const edit = document.createElement('i')
        const dell = document.createElement('i')
    
        div.className = 'post';
        p.innerHTML = post.content;
        edit.id = 'edit';
        edit.dataset.id = post.id;
        edit.classList.add('fa-solid', 'fa-pen-to-square');
        edit.onclick = function() { editPost(post.id); };

        dell.id = 'delete';
        dell.dataset.id = post.id;
        dell.classList.add('fa-solid', 'fa-trash');
        dell.onclick = function() { deletePost(post.id); };
    
        div.appendChild(p);
        div.appendChild(edit);
        div.appendChild(dell);
        posts.appendChild(div);
    })
}
function deletePost(postId) {

    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const postIndex = existingPosts.findIndex(post => post.id === postId);

    if (postIndex !== -1) {

        existingPosts.splice(postIndex, 1);

        localStorage.setItem('posts', JSON.stringify(existingPosts));

        const postElement = document.querySelector(`[data-id="${postId}"]`);
        if (postElement) {
            postElement.remove();
        }

        console.log('Post deletado com sucesso. ID:', postId);
    } else {
        console.error('Post não encontrado para exclusão. ID:', postId);
    }
    window.location.href = './'
}
let editado

function editPost(postId) {
    console.log('encontrando item de id:' + postId)
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const selected = existingPosts.find(post => post.id === postId)

    const top = document.getElementById('top')
    const text = document.getElementById('editText')

    editado = postId
    top.style.display = 'flex'
    text.innerHTML = selected.content
}
function edit() {
    const text = document.getElementById('editText').value
    
    const existingPosts = JSON.parse(localStorage.getItem('posts')) || [];
    const indexToEdit = existingPosts.findIndex(post => post.id === editado);
    const top = document.getElementById('top')

    if (indexToEdit !== -1) {
        existingPosts[indexToEdit].content = text;
        localStorage.setItem('posts', JSON.stringify(existingPosts));

        console.log('Texto editado com sucesso!');
        top.style.display = 'none'
        window.location.href = './'
    } else {
        console.log('Item não encontrado para edição.');
    }
}
generatePosts()