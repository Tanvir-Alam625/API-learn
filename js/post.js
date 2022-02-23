fetch('https://jsonplaceholder.typicode.com/posts')
.then(response => response.json())
.then(data => displayPost(data))

function displayPost(posts){
    const container = document.getElementById('post');
    console.log(posts);
    for(const post of posts){
        const div  = document.createElement('div');
        div.innerHTML = `
        <h2>${post.title}</h2>
        <p>${post.body}</p>
        `;
        container.appendChild(div);
    }
}