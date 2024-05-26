export default function greet (name){
    return `Hello ${name}, welcome back`
}
export function schedule (time){
    return `Welcome to the ${time} meeting.`
}
console.log(schedule(9))
console.log(greet("charite"))