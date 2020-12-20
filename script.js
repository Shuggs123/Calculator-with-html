let btns = document.querySelectorAll('.btn')
let screen = document.querySelector('.screen')
const equalto = document.querySelector('.equalto')
const clearAll = document.querySelector('.clearAll')


btns.forEach(function (btn){

btn.addEventListener('click',function(e){
    
let value = e.target.innerText;
screen.innerText += value

if ( screen.innerText[0] =='0'){screen.innerText = screen.innerText.replace(/^0/, "");}


// I will use this code later
// console.log(spltin)


// spltin.forEach(i =>{
//     let spp = i.split('+')
//     console.log(spp)
// })

//+÷×−
equalto.addEventListener('click',function(){

    let spltin = screen.innerText.split('')
console.log(spltin)
    for(let i =0; i < spltin.length;i++){

        if (spltin.includes("+") && spltin.includes("−")){


            subNumbers()

        function subNumbers(){
                let numbers =screen.innerText.split('−');

                console.log('THE ITEMS ARE ' + numbers)

                numbers = addNumbers(numbers)

                // numbers = numbers.map(items => +items)

                // console.log('THE ITEMS ARE ' + numbers)
                // const initialval = 0;
                let result = numbers.reduce((acc,num) => acc - num);

                screen.innerText = result 
                console.log(result)
                }

// return screen.innerText
        function addNumbers(expression){
            let array = []

                    expression.toString()
                console.log("the expressin is "  + expression)

                expression.forEach(i =>{
                let numbers = i.split('+')

                numbers = numbers.map(items => +items )
                console.log(numbers)
                const initialval = 0;
                let result = numbers.reduce((acc,num) => acc + num,initialval);

                array.push(result)
                console.log(array)
                
        
        })
        return array
        }

        }
    }
    







})


clearAll.addEventListener('click', () => screen.innerText='0')

// console.log(screen.innerText)
})
})











// console.log("the expression is " + expression)
// let numbers = expression.split('+');
// numbers = numbers.map(items => +items )
// const initialval = 0;
// let result = numbers.reduce((acc,num) => acc + num,initialval);

// screen.innerText = result 
// }