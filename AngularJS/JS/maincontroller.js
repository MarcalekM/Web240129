app.controller("MainController", function($scope){
    $scope.szoveg = "Így működnek az Angularban a változók";

    $scope.emberek = [
        {nev:"Wick", eletkor:"20", csajok:["Bridget"]},
        {nev:"Lucifer", eletkor:"20000", csajok:["Ki nem?"]},
        {nev:"Ragnar", eletkor:"40", csajok:["Lagherta", "Aslaug"]},
        {nev:"Bulgasal", eletkor:"2000", csajok:["Min Si-Ho"]},
    ]
});