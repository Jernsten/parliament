var partyColor = {
  S: "#EE2020",
  M: "#1B49DD;",
  SD: "#DDDD00",
  C: "#009933",
  L: "#6BB7EC",
  KD: "#231977",
  MP: "#83CF39",
  V: "#AF0000"
};

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
    member["hidden"] = false; // For filtering

    reducedMemberList.push(member);
  });

  // console.log(reducedMemberList);
  console.log(`<<< reduceMemberData`);
  return reducedMemberList;
}

function populateParliament(memberList) {
  console.log(">> populateParliament");

  let htmlListOfMembers = "";
  memberList.forEach(member => {
    htmlListOfMembers += 
    `<li class="member"  name="${member.name} ${member.surname}" id="${member.id}" style="background-color: ${partyColor[member.party]};">
      <img class="memberPic" src="${member.imgUrl}" alt="Foto på ledamöten"/>
    </li>`;
  });

  document.getElementById("parliament").innerHTML = htmlListOfMembers;
}

function main(memberList) {
  console.log(`>> main`);

  populateParliament(memberList);
}

init();
