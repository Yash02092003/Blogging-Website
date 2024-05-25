const blogsContainer = document.getElementById('page-2-content');

blogsContainer.addEventListener('click', async (e) => {
    if (e.target.closest('.like-btn')) {
        const blogDiv = e.target.closest('.blog');
        const blogId = blogDiv.getAttribute('data-id');
        const likeSpan = blogDiv.querySelector('.like');
        const icon = e.target.closest('i')

        try {
            const res = await fetch(`/blogs/${blogId}/like`)
            const data = await res.json();
            likeSpan.textContent = data.likes;
            if(icon.classList.contains('fa-regular')){
                icon.classList.remove('fa-regular');
                icon.classList.add('fa-solid');
            }
            else{
                icon.classList.remove('fa-solid');
                icon.classList.add('fa-regular');
            }
        } 
        catch (error) {
            window.location.href = 'http://localhost:8080/login';
        }
    } 
});
