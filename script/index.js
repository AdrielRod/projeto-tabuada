function tabuada()
{
    var numero = document.getElementById("inumero")
    var res = document.getElementById("ires")
    var sessao = document.getElementById("container")

    res.innerHTML = ""

    if(numero.value.length == 0)
    {
        res.innerHTML = "Digite um número!!"
        res.style.color = "red"
    }
    else{
        var n = Number(numero.value)
        for (var cont = 0; cont <= 10; cont++) 
        {   
            var multi = cont * n
            res.innerHTML += `${cont} x ${n} = ${multi} <br>`    
        }
        sessao.style.height = "270px" 
        res.style.color = "green"

    }

}