"use strict";
let mainArr = [function (){
        let admin;
        let name;
        name = "Джон";
        admin = name;
        console.log(admin);
    },
    function (){
        let ourPlanetName = "Земля";
        let currentUserName = "Паша";
    },
    function (){
        const BIRTHDAY = "18.04.1982";
        // const age = someCode(BIRTHDAY);

    }]

for (let i=0; i<mainArr.length; i++){
    console.log('task' + i);
    mainArr[i]();
    console.log();
}
