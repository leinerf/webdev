var person = {id: 53, name: "Tim"};
function addJob(personObj, job){
    return Object.assign({},personObj,{job});
}

var person = {id: 53, name: "Tim"};
function addJob(personObj, job){
    return {...personObj, job};
}

addJob(person, "Instructor");