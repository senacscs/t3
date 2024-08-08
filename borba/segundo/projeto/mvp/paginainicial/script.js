document.addEventListener('DOMContentLoaded', () => {
    const postInput = document.querySelector('.new-post__input input');
    const postButton = document.querySelector('.new-post__actions button');

    postButton.addEventListener('click', () => {
        const postText = postInput.value;
        if (postText) {
            const postSection = document.querySelector('.posts');
            const newPost = document.createElement('div');
            newPost.className = 'post';
            newPost.innerHTML = `
                <div class="post__header">
                    <img src="profile-pic.jpg" alt="Profile">
                    <div>
                        <h3>Rayan Walton</h3>
                        <p>Web Developer at Microsoft</p>
                        <span>Just now</span>
                    </div>
                </div>
                <div class="post__body">
                    <p>${postText}</p>
                </div>
                <div class="post__footer">
                    <button><i class="fas fa-thumbs-up"></i> Like</button>
                    <button><i class="fas fa-comment"></i> Comment</button>
                    <button><i class="fas fa-share"></i> Share</button>
                </div>
            `;
            postSection.prepend(newPost);
            postInput.value = '';
        }
    });
});
