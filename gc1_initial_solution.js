// I took the pseudocode given to me and here is what I came up with:


// Pseudo code for finding sum of a list.

//Initialize constant variable SumList = 0.
//Make a loop which iterate over all the elements in that list and 
//sum the varibales and store it inside SumList as sumList = sumList + //var.
//print sumList on console using console.log(sumList)

// Ensuring to make  we start the loop, I used 'for' to define the variable


var sumList = 0;
    var randomList = [1, 2, 3, 4, 5, 6, 7 ,8, 9, 10];
    for(var i = 0; i < randomList.length; i++)
    {

         sumList += randomList[i];

    }

    console.log(sumList);

//Pseudo code for finding Median
//initialize constant variable median=0.
//Sort the list as list.sort()
//Find the length of list as listlength=list.length
//if listlength is odd{
	// find the middle number middle as Math.round(listlength-1)
	// Now median=list[middle-1]
//} 
//else{
	// middle=list.length/2
	// median=(list[middle]+list[middle-1])/2 
//}

//print median on console using console.log(median)
var median = 0;
        var middle;
        var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
        var listlength = list.length;
        list.sort();

        if (listlength%2 !== 0){
           middle =  Math.round(listlength-1);
           median = list[middle-1]; 
           }
        else{
           middle = listlength/2;
           median = (list[middle]+list[middle-1])/2;
        }
        console.log(median);


// Pseudo code for finding mean of a list.

//initialize constant variable mean=0.
//find the sum of list using the same method as in idea 1.
//find the length of the list as listlength=list.length
//find the mean as mean=sumList/listlength

//print mean on console using console.log(mean)

var mean = 0;
   for(var i = 0; i < randomList.length; i++)
   var list = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
   var listlength = list.length;

   {
     
    mean = sumList/list.length;



   }

   console.log(mean);
