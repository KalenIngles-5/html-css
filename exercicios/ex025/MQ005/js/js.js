
const itens = document.querySelector('#itens')


function clickMenu (){
    if (itens.style.display == 'block') {
         itens.style.display = 'none'

    } else{
        itens.style.display = 'block';
    }
}

function mudouTamnho() {
    if(window.innerWidth >=769) {
        itens.style.display = 'block'
    } else {
        itens.style.display = 'block'
    }
}
    
 
    
    
     
        
