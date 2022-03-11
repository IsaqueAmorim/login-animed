const singUpSide = document.querySelector('.singup');
const singIntSide = document.querySelector('.singin');
const cont = document.querySelector('.backgroundx')

function slide(){
    if(cont.classList.contains('sidea')){
        cont.classList.remove('sidea');
        cont.classList.add('sideb');
        cont.innerHTML = "<h2>Wellcome Back!</h2><p>Enter your personal details and start journey with us</p><button onclick='slide()'>Sing In</button>"
    }else{
        cont.classList.remove('sideb')
        cont.classList.add('sidea')
        cont.innerHTML = "<h2>Hello, Friend!</h2><p>To keep connected with us please login with your personal info</p><button  onclick='slide()'>Sing Up</button>"
    }

    console.log('foi')
}slide();
