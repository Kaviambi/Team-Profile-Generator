const { TEAMCITY } = require("ci-info");

//Manager Card
const generateManager = function(manager) {
  return `<div class="card-column m-3 rounded" style="width: 18rem;">
  <div class="card-body border border-light shadow p-3 mb-5 bg-white rounded">
    <p class="card-title">${manager.name}</p>
    <p class="card-subtitle mb-2 text-muted">MANAGER</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item"><a href="Mailto: ${manager.email}"></a></li>
      <li class="list-group-item">Office Number: ${manager.number}</li>
    </ul>
    
  </div>  
</div>`;
}
    

//Intern Card
const generateIntern = function(intern) {
  return `<div class="card-column m-3 rounded" style="width: 18rem;">
  <div class="card-body  shadow p-3 mb-5 bg-white rounded">
    <p class="card-title">${intern.name}</p>
    <p class="card-subtitle mb-2 text-muted">Desigination with logo</p>
    <ul class="list-group">
      <li class="list-group-item">ID: ${intern.id}</li>
      <li class="list-group-item"><a href="Mailto: ${intern.email}"</li>
      <li class="list-group-item">School: ${intern.school}</li>
    </ul>
    
  </div>
  
</div>`;
}
    

          //Engineer Card
const generateEngineer = function(engineer) {
  return `<div class="card-column m-3 rounded" style="width: 18rem;">
            <div class="card-body shadow p-3 mb-5 bg-white rounded">
              <p class="card-title">${engineer.name}</p>
              <p class="card-subtitle mb-2 text-muted">Desigination with logo</p>
              <ul class="list-group">
                <li class="list-group-item">ID: ${engineer.id}</li>
                <li class="list-group-item"><a href="Mailto: ${engineer.email}"</li>
                <li class="list-group-item">${engineer.github}</li>
              </ul>
              
            </div>
            
          </div>`;
}
    

generateHTML = (data) => {
 
  //Array to store engineer,intern inputs
   teamArray = [];

    for(let i=0; i<teamArray.length; i++){
        const employee = data[i];
        const role = employee.getRole();
        

        //If the role is manager push those input into managercard
        if(role === 'Manager'){
            const managerCard = generateManager(employee);
            teamArray.push(managerCard);
        }
//If the role is engineer push those input into engineercard
            if(role === 'Engineer'){
                const engineerCard = generateEngineer(employee);
                teamArray.push(engineerCard);
            }
//If the role is intern push those input into interncard
                if(role === 'Intern'){
                    const internCard = generateIntern(employee);
                    teamArray.push(internCard);
        }
    
    }

    const teamMembers = teamArray.join('');
    const generateTeam = generatePage(teamMembers);
    return generateTeam; 
}
const generatePage = function(manager){
        return `
        <!DOCTYPE html>
        <html lang ="en">
            <head>
                <meta charset="UTF-8">
                <meta http-equiv="X-UA-Compatible" content="ie=edge">
                <link rel ="stylesheet" href="./style.css">
                <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.2/dist/css/bootstrap.min.css">
                <title>Profile Generator</title>
            </head>
        
            <body>
                <div>
                <nav class="navbar navbar-dark bg-success">
                    <span class="navbar-brand mb-0 h1 w-100 text-center">MY TEAM</span>
                  </nav>
                </div>
                <section class="row justify-center">
                <div class="card-column m-3 rounded" style="width: 18rem;">
                <div class="card-body border border-light shadow p-3 mb-5 bg-white rounded">
                  <p class="card-title">${manager.name}</p>
                  <p class="card-subtitle mb-2 text-muted">MANAGER</p>
                  <ul class="list-group">
                    <li class="list-group-item">ID: ${manager.id}</li>
                    <li class="list-group-item"><a href="Mailto: ${manager.email}"></a></li>
                    <li class="list-group-item">Office Number: ${manager.number}</li>
                  </ul>
                  
                </div>  
              </div>
    
  </div>  
</div>

                </section>
        </body>
    </html> 
    `;
    }

   module.exports = generateHTML; 

