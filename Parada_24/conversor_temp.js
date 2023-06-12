document.getElementById('convert').onclick = convertTemp;
document.getElementById('clear').onclick = clearForm;

function convertTemp(){
    var celsius = document.getElementById("celsius").value;
    var fahrenheit = document.getElementById("fahrenheit").value;
    var kelvin = document.getElementById("kelvin").value;

    if(isNaN(celsius) || isNaN(fahrenheit) || isNaN(kelvin)){
        alert("Digite um valor válido!");
        return
    }else if(fahrenheit === '', kelvin ===''){
        fahrenheit = (parseFloat(celsius) * 1.8) + 32;
    
        kelvin = (parseFloat(celsius) + 273.15);
    }

    document.getElementById("fahrenheit").value = parseFloat(fahrenheit).toFixed(1);
    document.getElementById("kelvin").value = parseFloat(kelvin).toFixed(1);
}

function clearForm(){
    document.getElementById("fahrenheit").value = "";
    document.getElementById("celsius").value = "";
    document.getElementById("kelvin").value = "";
}   