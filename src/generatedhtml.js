//Manager Card
const generateManager = ({ managername, managerid, manageremail, managernumber }) =>
    `<div class="card-column m-3 rounded" style="width: 18rem;">
            <div class="card-body border border-light shadow p-3 mb-5 bg-white rounded">
              <p class="card-title">${managername}</p>
              <p class="card-subtitle mb-2 text-muted">MANAGER<i class="material-icons">content_paste</i></p>
              <ul class="list-group">
                <li class="list-group-item">ID: ${managerid}</li>
                <li class="list-group-item"><a href="Mailto: ${manageremail}"</li>
                <li class="list-group-item">Office Number: ${managernumber}</li>
              </ul>
              
            </div>  
          </div>`;

//Intern Card
const generateIntern = ({ internname, internid, internemail, internschool }) =>
    `<div class="card-column m-3 rounded" style="width: 18rem;">
            <div class="card-body  shadow p-3 mb-5 bg-white rounded">
              <p class="card-title">${internname}</p>
              <p class="card-subtitle mb-2 text-muted">Desigination with logo</p>
              <ul class="list-group">
                <li class="list-group-item">ID: ${internid}</li>
                <li class="list-group-item"><a href="Mailto: ${internemail}"</li>
                <li class="list-group-item">School: ${internschool}</li>
              </ul>
              
            </div>
            
          </div>`;

          //Engineer Card
const generateEngineer = ({ engineername, engineerid, engineeremail, engineergithub }) =>
    `
          <div class="card-column m-3 rounded" style="width: 18rem;">
            <div class="card-body shadow p-3 mb-5 bg-white rounded">
              <p class="card-title">${engineername}</p>
              <p class="card-subtitle mb-2 text-muted">Desigination with logo</p>
              <ul class="list-group">
                <li class="list-group-item">ID: ${engineerid}</li>
                <li class="list-group-item"><a href="Mailto: ${engineeremail}"</li>
                <li class="list-group-item">${engineergithub}</li>
              </ul>
              
            </div>
            
          </div>`;

generateHTML = (data) => {
    teamArray = [];

    for(let i=0; i< data.length; i++){
        const employee = data[i];
        const role = employee.getRole();

        if(role === 'Manager'){
            const managerCard = generateManager(employee);
            teamArray.push(managerCard);
        }

            if(role === 'Engineer'){
                const engineerCard = generateManager(employee);
                teamArray.push(engineerCard);
            }

                if(role === 'Intern'){
                    const internCard = generateManager(employee);
                    teamArray.push(internCard);
        }
    
    }

    const employeeCards = teamArray.join('')
    const generateTeam = generatePage(employeeCards);
    return generateTeam; 
}
const generatePage = function(employeeCards){
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
                ${employeeCards}
                </section>
        </body>
    </html> 
    `;
    }

