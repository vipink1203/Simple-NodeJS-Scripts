const repos = require('repos');

const options = {
    token: process.env.GITHUB
};

repos(['aenetworks'], options)
    .then(function(repos){
        repos.forEach(repo => {
            console.log(repo.name); 
        });
    })
    .catch(console.error)