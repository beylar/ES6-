const days = ["monday", "tuesday", "wednesday", "thursday", "friday", "saturday", "sunday"]

for(let day of days){
    day= day.charAt(0).toUpperCase() + day.slice(1);
    console.log(day)
}
