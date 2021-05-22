// função da seta------------
$(document).ready(
    function(){
      $("#setafluida").hide()
      $(window).scroll(function(){
            if ($(this).scrollTop() > 400) {
                $("#setafluida").fadeIn(500);
            } 
            else {
                $("#setafluida").fadeOut(800);
            }
    //   $("#setafluida").click(function(){
    //   $('html').fadeIn({scrollTop : 0},800);
    //  });
      
    }
  )
}
)
//-----------------------
//funcao para ajeitar o menu nav li nao sobrepor na pagina sobre nos

// $(document).ready(
//     function(){
//         $('nav li').slideUp()
//     }
// )
// $(document).ready(
//     function(){
//         $('#boTaoDomenu').click(
//             function(){
//                 $("nav li").slideDown()
//             }
//         )  
//     }
// )

// function myFunction(x) {
//     if (x.matches) { // If media query matches
//       document.body.style.backgroundColor = "yellow";
//     } else {
//       document.body.style.backgroundColor = "pink";
//     }
//   }
  
//   var x = window.matchMedia("(max-width: 600px)")
//   myFunction(x) // Call listener function at run time
//   x.addListener(myFunction) // Attach listener function on state changes
// //---------------------


//funçõo para ajeitar versão mobile a aba serviços
$(document).ready(
    function(){

    
    $("#navbarDropdown").click(function(){
    $("#textoTitulo").hide()
})}
)

// validação e formatação do cpf


function formataCPF(cpf) {
    const cpfAlvo = cpf //valor final que será passado na função
    const cpfDigitado = cpf.value // valor definido pelo usuario
    let cpfNovo; // função que vai receber o cpfDigitado e fazer sua formatação

        cpfNovo = cpfDigitado.replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, 
            function( regex, arg1, arg2, arg3, arg4 ) {
                    return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
            })
cpfAlvo.value = cpfNovo; 
    }




function valida() {
    //elemento js que retorna falso se o input corresponde ao seu pattern
    if (document.cad.cpf.validity.patternMismatch) {
        document.getElementById("cpfTxt").innerHTML="<font color='coral';>(CPF inválido). Exemplo válido: xxx.xxx.xxx-xx</font>";
        alert("O CPF está incorreto");
    }
    else {
        document.getElementById("cpfTxt").innerHTML="<font color='black'; text-shadow: '20px 20px black';>(CPF válido)"
    };
    return false;
}


//formata e valida cnpj

function formataCNPJ(cnpj) {
    const cnpjAlvo = cnpj //valor final que será passado na função
    const cnpjDigitado = cnpj.value // valor definido pelo usuario
    let cnpjNovo; // função que vai receber o cnpjDigitado e fazer sua formatação

        cnpjNovo = cnpjDigitado.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{2})/, 
            function( regex, arg1, arg2, arg3, arg4 ) {
                    return arg1 + '.' + arg2 + '.' + arg3 + '-' + arg4;
            })
cnpjAlvo.value = cnpjNovo; 
    }




function valida() {
//elemento js que retorna falso se o input corresponde ao seu pattern
    if (document.cad.cnpj.validity.patternMismatch) {
        document.getElementById("cnpjTxt").innerHTML="<font color='coral';>(cnpj inválido). Exemplo válido: XX. XXX. XXX/0001-XX.</font>";
        alert("O cnpj está incorreto");
    }
    else {
        document.getElementById("cnpjTxt").innerHTML="<font color='black'; text-shadow: '20px 20px black';> (cnpj válido)"
    };
    return false;
}

//desativa campo do cnpj
function desativaCampo(){
    $(document).ready(
        function(){
            $("#campodecnpj").slideUp().toggle()
        }
    )
}












