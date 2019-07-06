cons user = {};

fetch('url')
.then(res => res.json())
.then(res =>{
    this.user = res
    wyswietlanie(this.user)
})


function wyswietlanie (data) {}