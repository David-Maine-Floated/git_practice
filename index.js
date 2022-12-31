const array1 = ['fluffy','funny','greasy','monstrous','tiny','volatile','arrogant','sloppy','saucy','French']
const array2 = ['eggs','chicken','duck','pasta','soup','rissotto','greens','potatoes', 'salad','toast']
const array3 = ['quickly.','dumbly.','fast.','nastily.','feverishly.','with love.','without love.','like grandma used to.','like grandma never would want it cooked.','as if you were never going to see me again.', ]

function elliotsOrder() {
    let word1 = array1[Math.floor(Math.random() * 10)];
    let word2 = array2[Math.floor(Math.random() * 10)];
    let word3 = array3[Math.floor(Math.random() * 10)];

    return `Elliot would like to order ${word1} ${word2} cooked ${word3}`;
}

console.log(elliotsOrder())

