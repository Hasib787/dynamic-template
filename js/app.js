fetch('https://jsonplaceholder.typicode.com/users')
    .then(response => response.json())
    .then(data => showUserNames(data))

function showUserNames(data) {
    let userHtml = '';
    data.forEach(user => {
        userHtml = userHtml + `<div class="user">
        <h2>${user.name}</h2>
        <p>Email: ${user.email}</p>
        <p>${user.company.name}.${user.company.catchPhrase}.${user.company.bs}</p>
        </div>`
    });
    const userContainer = document.getElementById('container-list');
    userContainer.innerHTML = userHtml;
}