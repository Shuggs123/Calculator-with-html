let btns = document.querySelectorAll('.btn')
let screen = document.querySelector('.screen')
const equalto = document.querySelector('.equalto')
const clearAll = document.querySelector('.clearAll')
const clear = document.querySelector('.clear')

function arithmetic(expressin){
    let sjoin = expressin.join('')
    sjoin = sjoin.replace(/×/g, "*")
    sjoin = sjoin.replace(/÷/g, "/")
    sjoin = sjoin.replace(/−/g, "-")
    
    let result = eval(sjoin)
    screen.innerText = result 

}

btns.forEach(function (btn){

btn.addEventListener('click',function(e){
    
let value = e.target.innerText;
screen.innerText += value



// Replace the inital zero with a non zero number
if ( screen.innerText[0] =='0'){screen.innerText = screen.innerText.replace(/^0/, "");}

//+÷×−
equalto.addEventListener('click',function(){

    let spltin = screen.innerText.split('')

    for(let i =0; i < spltin.length;i++){


        if (spltin.includes("+") && spltin.includes("−") && spltin.includes("÷") && spltin.includes("×")){

            arithmetic(spltin)

        }

        else if (spltin.includes("+") && spltin.includes("−") &&  spltin.includes("×") || spltin.includes("+") && spltin.includes("÷") &&  spltin.includes("×")  ||  spltin.includes("−") &&  spltin.includes("×") && spltin.includes("÷") || spltin.includes("+") && spltin.includes("÷") && spltin.includes("−")){

            arithmetic(spltin)
        }
        
        
        else if (spltin.includes("+") && spltin.includes("−") || spltin.includes("+") && spltin.includes("×") || spltin.includes("+") && spltin.includes("÷") ||  spltin.includes("−")  && spltin.includes("×") || spltin.includes("−")  && spltin.includes("÷") || spltin.includes("×") && spltin.includes("÷")){

            arithmetic(spltin)   

        }
        
        
        else if (spltin.includes("+") || spltin.includes("−") || spltin.includes("×") || spltin.includes("÷") ){

            arithmetic(spltin) 

        }
        
        
    }
    

})

clearAll.addEventListener('click', () => screen.innerText='0')


})

})

clear.addEventListener('click', () => {
    let array = [...screen.innerText]
    array.pop()
    array= array.join('')
    screen.innerText = array

} )











//subNumbers()

// function subNumbers(){
//         let numbers =screen.innerText.split('−');

//         console.log('THE ITEMS ARE ' + numbers)

//         numbers = addNumbers(numbers)

//         let result = numbers.reduce((acc,num) => acc - num);

//         screen.innerText = result 
//         console.log(result)
//         }


// function addNumbers(expression){
//     let array = []

//             // expression.toString()
//         console.log("the expressin is "  + expression)

//         expression.forEach(i =>{
//         let numbers = i.split('+')

//         numbers = numbers.map(items => +items )
//         console.log(numbers)
//         const initialval = 0;
//         let result = numbers.reduce((acc,num) => acc + num,initialval);

//         array.push(result)
//         console.log(array)
        

// })
// return array
// }


        // else if (spltin.includes("−")){

        //     let numbers =screen.innerText.split('−');
        //     numbers = numbers.map(items => +items )

        //     let result = numbers.reduce((acc,num) =>  acc - num);

        //     screen.innerText = result 

        // }
        
        
        
        // else if (spltin.includes("×")){

        //     let numbers =screen.innerText.split('×');
        //     numbers = numbers.map(items => +items )

        //     let result = numbers.reduce((acc,num) =>  acc * num);

        //     screen.innerText = result 

        // }
        
        
        // else if (spltin.includes("÷")){

        //     let numbers =screen.innerText.split('÷');
        //     numbers = numbers.map(items => +items )

        //     let result = numbers.reduce((acc,num) =>  acc / num);

        //     screen.innerText = result 

        // }