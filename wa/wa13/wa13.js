const employees = [
    {
      "firstName": "Sam",
      "department": "Tech",
      "designation": "Manager",
      "salary": 40000,
      "raiseEligible": true
    },
    {
      "firstName": "Mary",
     "department": "Finance",
      "designation": "Trainee",
      "salary": 18500,
      "raiseEligible": true
    },
    {
      "firstName": "Bill",
      "department": "HR",
      "designation": "Executive",
      "salary": 21200,
      "raiseEligible": false
    },
    ];
    console.log("Question 1");
    console.log(employees);


const companyDetails = {
    companyName: "Tech Stars",
    website: "www.techstars.site",
    employees: employees}
    
    console.log("Question 2");
    console.log(companyDetails);


const staff = [
        {
            "firstName": "Sam",
            "department": "Tech",
            "designation": "Manager",
            "salary": 40000,
            "raiseEligible": true
          },
          {
            "firstName": "Mary",
           "department": "Finance",
            "designation": "Trainee",
            "salary": 18500,
            "raiseEligible": true
          },
          {
            "firstName": "Bill",
            "department": "HR",
            "designation": "Executive",
            "salary": 21200,
            "raiseEligible": false
          },
        {
            "firstName": "Anna",
            "department": "Tech",
            "designation": "Executive",
            "salary": 25600,
            "raiseEligible": false
        }
    ];
    
    console.log("Question 3");
    console.log(staff);


function totalSalary(staff){
        let totalSalary = 0;

    for(employee of staff){
        totalSalary += employee.salary;
    }
   return totalSalary;
   }
    console.log("Question 4");
    console.log(totalSalary(staff));


function updateSalary() {
    staff.forEach((e) => {
      if (e.raiseEligible) {
        e.salary = e.salary * 1.1;
        e.raiseEligible = false;
      };
    });
  }

  updateSalary();

    console.log("Question 5");
    console.log(staff);


const workFromHome = ["Anna", "Sam"];
  
function workHome(){
    staff.forEach((e) => {
        if (workFromHome.includes(e.firstName)) {
        e.workFromHome = true;
    }
    })
  }
 
  workHome();

    console.log("Question 6");
    console.log(staff);