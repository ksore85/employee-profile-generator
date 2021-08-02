
function selectRole(data) {
    const profiles ={
        manager: [],
        intern: [],
        engineer: []
    }
    for (let i = 0; i < data.length; i++) {
        const employeeType = data[i];
        switch (employeeType.getRole()) {
            case "Manager":
                profiles.manager.push(createManager(employeeType))
                break;
            case "Intern":
                profiles.intern.push(createIntern(employeeType))
                break;
            case "Engineer":
                profiles.engineer.push(createEngineer(employeeType))
                break;
        }
    }
    return profiles
}

function createManager(manager) {
    return `
<div class="card" style="width: 18rem;">
    <div class="card-body">
      <h5 class="card-title">${manager.name}</h5>
      <div class="employee-position">
        <span class="oi oi-briefcase"></span>
        ${manager.getRole()}
      </div>
    </div>
    <ul class="list-group list-group-flush">
      <li class="list-group-item">ID: ${manager.id}</li>
      <li class="list-group-item">Email: <a href="mailto:${manager.email}">${manager.email}</a></li>
      <li class="list-group-item">Office Number: ${manager.officeNumber}</li>
    </ul>
</div>`
}

const createEngineer = employee => `
        <div class="card col-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <div class="employee-position">
            <span class="oi oi-code"></span>
            ${employee.getRole()}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">GitHub: <a href="https://www.github.com/${employee.gitHub}/">${employee.gitHub}</a></li>
        </ul>
        </div>`

const createIntern = employee => `
        <div class="card col-4" style="width: 18rem;">
        <div class="card-body">
          <h5 class="card-title">${employee.name}</h5>
          <div class="employee-position">
            <span class="oi oi-clipboard"></span>
            ${employee.getRole()}
          </div>
        </div>
        <ul class="list-group list-group-flush">
          <li class="list-group-item">ID: ${employee.id}</li>
          <li class="list-group-item">Email: <a href="mailto:${employee.email}">${employee.email}</a></li>
          <li class="list-group-item">School: ${employee.school}</li>
        </ul>
        </div>`

function generatePage(data) {
    const profiles = selectRole(data)
    return `<!DOCTYPE html>
    <html lang="en">
    
    <head>
        <meta charset="UTF-8">
        <meta http-equiv="X-UA-Compatible" content="IE=edge">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">
        <title>${data[0].name}'s Team</title>
        <link href='https://cdn.jsdelivr.net/npm/bootstrap@5.0.1/dist/css/bootstrap.min.css' rel='stylesheet'
            integrity='sha384-+0n0xVW2eSR5OomGNYDnhzAbDsOXxcvSN1TPprVMTNDbiYZCxYbOOl7+AMvyTG2x' crossorigin='anonymous'>
        <link rel="stylesheet"
            href="https://cdnjs.cloudflare.com/ajax/libs/open-iconic/1.1.1/font/css/open-iconic-bootstrap.min.css" />
        <link rel="stylesheet" href="./style.css">
    </head>

    <header>
        <h1>${data[0].name}'s Team</h1>
    </header>
    
    <body>
        <h2>Manager</h2>
        <div class="container">
            <div class="row">
                <div class="col-12 card-container">
                    ${profiles.manager}
                </div>
            </div>
        </div>
    
        <h2>Members</h2>
        ${profiles.engineer.length ? `<h3>Engineers</h3>` : ""}
        <div class="container">
            <div class="row">
                <div class="col-12 card-container">
                    ${profiles.engineer.join('')}
                </div>
            </div>
        </div>
        ${profiles.intern.length ? `<h3>Interns</h3>` : ""}
        <div class="container">
            <div class="row">
                <div class="col-12 card-container">
                    ${profiles.intern.join('')}
                </div>
            </div>
        </div>
    </body>
   
    </html>`
}

module.exports = generatePage;