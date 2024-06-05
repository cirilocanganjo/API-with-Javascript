fetch('https://jsonplaceholder.typicode.com/users')
.then(res  =>{
 return  res.json();
})
.then(data =>{
    data.forEach(user => {
        const html = `<li>${user.name}</li>`;
        document.querySelector('ul').insertAdjacentHTML('beforeend',html);
    });
})
.catch(error => console.log(error));