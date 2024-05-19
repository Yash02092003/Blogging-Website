const blogsContainer = document.getElementById('page-2-content');

blogsContainer.addEventListener('click', async (e) => {
    if (e.target.closest('.like-btn')) {
        const blogDiv = e.target.closest('.blog');
        const blogId = blogDiv.getAttribute('data-id');
        const likeSpan = blogDiv.querySelector('.like');

        try {
            const res = await fetch(`/blogs/${blogId}/like`)
            const data = await res.json();
            likeSpan.textContent = data.likes;
        } catch (error) {
                console.error('Error:', error);
        }
    } else if (e.target.closest('.dislike-btn')) {
        const blogDiv = e.target.closest('.blog');
        const blogId = blogDiv.getAttribute('data-id');
        const dislikeSpan = blogDiv.querySelector('.dislike');

        try {
            const res = await fetch(`/blogs/${blogId}/dislike`);
            const data = await res.json();
            dislikeSpan.textContent = data.dislikes;
        } catch (error) {
            console.error('Error:', error);
        }
    }
});
