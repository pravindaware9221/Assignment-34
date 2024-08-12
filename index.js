// Find largest number
const a = [1,50,45,6,3,252,88,58,68,755,];
const b = Math.max(...a);
const d = Math.min(...a)
console.log('Largest Number ',b);
console.log('Small Number',d)


// even odd 
const c = a.map(num => num % 2 === 0 ? `${num} Even` : `${num} Odd`);
console.log(c);


// for loop
const arr =[ 'Ram' , 'sham' ,'Radha' ,'Krishna' ,'om']
for( let i=0 ; i < arr.length ; i++){
console.log(`Hello,${arr[i]}`);
}