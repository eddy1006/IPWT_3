function checkDetails(){
  var message = document.getElementById('message');
  var age = document.getElementById('age').value;
  var visits = document.getElementById('visits').value;
  var dt = document.getElementById('date').value;
  const date = new Date(dt);
  console.log(date);
  var department = document.getElementById('department').value;
  const date1 = new Date("2022-05-01");
  const date2 = new Date("2022-05-31");
  let departments = ['Paediatrician','Ophthalmology', 'Cardiac', 'Dental']
  try{
    if(!Number.isInteger(Number(age))) throw "age must be a number";
    if(!Number.isInteger(Number(visits))) throw "Number of visits must be a number";
    if(Number(age) <= 0 ) throw "age cant be negative or zero";
    if(Number(visits) <=0 ) throw "number of visits cant be negative or zero";
    if(date.getTime() >date1.getTime() && date.getTime() < date2.getTime()) throw "Appointment cant be booked between 1/5/2022 to 31/5/2022.Try another date!";
    if(!departments.includes(department)) throw "Department doesn't exists";
    message.innerHTML = "Your appointment has been booked successfully!";
  }
  catch(err){
    message.innerHTML = err;
  }
}
