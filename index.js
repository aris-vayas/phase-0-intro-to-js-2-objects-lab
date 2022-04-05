// Write your solution in this file!
const employee ={
    Name:"Bob",
    address:"New York",
  }
  function updateEmployeeWithKeyAndValue(employee, key, value) {
    const newObj = { ...employee };
  
    newObj [key]=value;
  
    return newObj;
  }
  function destructivelyUpdateEmployeeWithKeyAndValue(employee,key,value){
  
    employee[key]= value
    return employee
  }
  function deleteFromEmployeeByKey(employee,key,value){
    const newEmployee = { ...employee };
  
    newEmployee[key] = value;
  
    return newEmployee;
  }
  
  function destructivelyDeleteFromEmployeeByKey(employee, key,value){
  employee[key] =value 
  return employee
  }
  
  
  