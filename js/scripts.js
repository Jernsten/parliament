function init() {
  console.log(">> init");

  let xhr = new XMLHttpRequest();

  xhr.open("GET", "json/data.json");
  /*  For production: use API url below for live data
   *   'http://data.riksdagen.se/personlista/?utformat=json'
   */

  xhr.responseType = "json";

  xhr.send();

  xhr.onerror = function() {
    // only triggers if the request couldn't be made at all
    alert("Network Error");
  };

  xhr.onload = function() {
    console.log("---- API data loaded ----");

    let reducedMemberList = reduceMemberData(xhr.response);
    main(reducedMemberList);
  };
}

function reduceMemberData(response) {
  console.log(">> reduceMemberData");
  let memberList = response.personlista.person;
  let reducedMemberList = [];

  memberList.forEach(function(person) {
    let member = {};

    member["id"] = person.hangar_id;
    member["name"] = person.tilltalsnamn;
    member["surname"] = person.efternamn;
    member["born"] = person.fodd_ar;
    member["gender"] = person.kon;
    member["party"] = person.parti;
    member["area"] = person.valkrets;
    member["status"] = person.status;
    member["imgUrl"] = person.bild_url_80;

    reducedMemberList.push(member);
  });

  // console.log(reducedMemberList);
  console.log(`<<< reduceMemberData`);
  return reducedMemberList;
}

function main(memberList) {
  console.log(`>> main`);

  let htmlListOfMembers = "";
  memberList.forEach(member => {
    htmlListOfMembers += `<li class="member" id="${member.id}"></li>`;
  });
  document.getElementById("parliament").innerHTML = htmlListOfMembers;
}

init();
