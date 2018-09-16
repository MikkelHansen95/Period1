var nameArr = ["Bo","Hans","Leon","Frederik","Andreas","Jonatan","Peter"];

function myFilter(arr,cb) {
    var tempArr = []; 
    for (var i=0; i < arr.length; i++) {
        if (cb(arr[i])) {
        tempArr.push(arr[i]);
        }
    }
    return tempArr;
};
let longNames = myFilter(nameArr,(name)=>name.length>=5);
console.log(longNames);

function myMap(arr,cb) {
    var tempArr = []; 
    for (var i=0; i < arr.length; i++) {
        tempArr.push(cb(arr[i]));
    }
    return tempArr;
};
let newUpperCased = myMap(nameArr, (name) => name.toUpperCase());
console.log(newUpperCased);

//Filter løber et array igennem og udfra det kriterie som man giver sortere den det array man giver den og ligger 
//dem som "består" eller dem som er true over i et nyt array og herefter returnere det array med de ting som man filterede eftre

//Map løber et array igennem og laver et nyt array med samme længde og ligger alle elementer over i det nye array med
//den ændring man har givet den.

//Reduce løber et array igennem og returnere en enkelt værdi som er en sum eller andet over alle elementer af arrayet.
