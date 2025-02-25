
const usuarios = [
    {
    login: 'mateus',
    senha: 'mateus'
},
{
    login: 'fernanda',
    senha: 'fernanda'
},
{
    login: 'zelita',
    senha: 'zelita'
},
{
    login: 'bruna',
    senha: 'bruna'
},
{
    login: 'admin',
    senha: 'admin'
}

]


let botao = document.getElementById('btnLogin')

botao.addEventListener('click', function logar(){

   
    let getUser = document.getElementById('user').value
    let getPassword = document.getElementById('password').value

    for(let i in usuarios){
      
        if(getUser == usuarios[i].login & getPassword == usuarios[i].senha){

           
            location.href ="home.html";
        }  
        
    }
})

function naoTem(){
    alert('Não tem mais, o gui mandou tirar =/');
}


document.addEventListener("keypress", function(e){
    if(e.key == "Enter"){
        const btn = document.querySelector('#btnLogin');
        btn.click();
    }

    
    })












