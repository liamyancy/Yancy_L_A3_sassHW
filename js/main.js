import Team from "./modules/DataModule.js";

(() => {
    // select our user elements and load the content
    // set up the XMLHttp object
    let myReq = new XMLHttpRequest;

    // make sure we can handle whatever data comes back, or any errors
    myReq.addEventListener("readystatechange", handleRequest);

    // open a request and pass through the URL of the data that we want
    myReq.open('GET', '../DataSet.json');

    // actually make the request
    myReq.send();

    // handleRequest function goes here
    function handleRequest() {
        debugger;

        if (myReq.readyState === XMLHttpRequest.DONE) {
            debugger;

            // check status here and proceed
            if (myReq.status === 200) {
                // 200 means done and dusted, ready to go with the dataset!
                handleDataSet(myReq.responseText);

            } else {
                // probably got some kind of error code, so handle that 
                // a 404, 500 etc... can render appropriate error messages here
                console.error(`${myReq.status} : something done broke, son`);
            }
        } else {
            debugger;

            // request isn't ready yet, keep waiting...
            console.log(`Request state: ${myReq.readyState}. Still processing...`);
        }

    }

    let userSection = document.querySelector(".user-section"),
        userTemplate = document.querySelector("#profs-template").content;

    function handleDataSet(data) {
        debugger;

        for (let user in data) {

            // make a copy of our template here and then populet the children (text elements) with the static date from team object
            let currentUser = userTemplate.cloneNode(true),
                currentUserText = currentUser.querySelector('.user').children;

            currentUserText[1].textContent = data[user].name;
            currentUserText[2].textContent = data[user].role;
            currentUserText[3].textContent = data[user].nickname;

            userSection.appendChild(currentUser);
        }

        console.log(data);

    }
})();