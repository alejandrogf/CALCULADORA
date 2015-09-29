var num1, num2, resultado, num1Int, num2Int;

function fsumar(){
    ////V.1 = Mas líneas de código, pero mas claro.
    ////num1 = document.getElementById("num1_txt").value; 
    ////num2 = document.getElementById("num2_txt").value; V.1
    ////num1Int = parseInt(num1);
    ////num2Int = parseInt(num2);
    ////V.1

    //V.2 = Menos líneas de código, juntando instrucciones.
    //num1Int = parseInt(document.getElementById("num1_txt").value);
    //num2Int = parseInt(document.getElementById("num2_txt").value);
    //V.2

    //V.3 = Mas óptimo con una función ya que el recuperar los números y transformarlos en INT es
    //      común a todas las operaciones, por lo que ahorras código.
    //V.3
    recuperar();
    document.getElementById("resultado_txt").value = num1Int + num2Int;
    document.getElementById("simbolo").innerHTML = "+";
    document.getElementById("igual").innerHTML = "=";
}

function frestar() {
    ////V.1 = Mas líneas de código, pero mas claro.
    ////num1 = document.getElementById("num1_txt").value; 
    ////num2 = document.getElementById("num2_txt").value; V.1
    ////num1Int = parseInt(num1);
    ////num2Int = parseInt(num2);
    ////V.1

    //V.2 = Menos líneas de código, juntando instrucciones.
    //num1Int = parseInt(document.getElementById("num1_txt").value);
    //num2Int = parseInt(document.getElementById("num2_txt").value);
    //V.2

    //V.3 = Mas óptimo con una función ya que el recuperar los números y transformarlos en INT es
    //      común a todas las operaciones, por lo que ahorras código.
    //V.3
    recuperar();
    document.getElementById("resultado_txt").value = num1Int - num2Int;
    document.getElementById("simbolo").innerHTML = "-";
    document.getElementById("igual").innerHTML = "=";
}

function fmulti() {
    ////V.1 = Mas líneas de código, pero mas claro.
    ////num1 = document.getElementById("num1_txt").value; 
    ////num2 = document.getElementById("num2_txt").value; V.1
    ////num1Int = parseInt(num1);
    ////num2Int = parseInt(num2);
    ////V.1

    //V.2 = Menos líneas de código, juntando instrucciones.
    //num1Int = parseInt(document.getElementById("num1_txt").value);
    //num2Int = parseInt(document.getElementById("num2_txt").value);
    //V.2

    //V.3 = Mas óptimo con una función ya que el recuperar los números y transformarlos en INT es
    //      común a todas las operaciones, por lo que ahorras código.
    //V.3
    recuperar();
    document.getElementById("resultado_txt").value = num1Int * num2Int;
    document.getElementById("simbolo").innerHTML = "X";
    document.getElementById("igual").innerHTML = "=";
}

function fdividir() {
    ////V.1 = Mas líneas de código, pero mas claro.
    ////num1 = document.getElementById("num1_txt").value; 
    ////num2 = document.getElementById("num2_txt").value; V.1
    ////num1Int = parseInt(num1);
    ////num2Int = parseInt(num2);
    ////V.1

    //V.2 = Menos líneas de código, juntando instrucciones.
    //num1Int = parseInt(document.getElementById("num1_txt").value);
    //num2Int = parseInt(document.getElementById("num2_txt").value);
    //V.2

    //V.3 = Mas óptimo con una función ya que el recuperar los números y transformarlos en INT es
    //      común a todas las operaciones, por lo que ahorras código.
    //V.3
    recuperar();
    var res = num1Int / num2Int;
    document.getElementById("resultado_txt").value = res.toFixed(2)
    document.getElementById("simbolo").innerHTML = "/";
    document.getElementById("igual").innerHTML = "=";
}

function recuperar() {
    num1Int = parseInt(document.getElementById("num1_txt").value);
    num2Int = parseInt(document.getElementById("num2_txt").value);
}
