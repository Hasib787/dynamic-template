fetch('https://jsonplaceholder.typicode.com/users')
.then(response => response.json())
.then(data => showUserNames(data))

function showUserNames(data){
    let lists ='';
    data.forEach(user => {
        lists = lists + `<li>${user.name}</li>`
    });
    const ul = document.getElementById('user-list');
    ul.innerHTML = lists;
}