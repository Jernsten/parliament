MEMBERDATA = [];
MEMBERLIST = [];
/**
 *
 *   Function that fetches JSON from API URL
 *   Returns list of members in swedish government
 *
 *   For production: use API url below for live data
 *   'http://data.riksdagen.se/personlista/?utformat=json'
 *
 *   Snapshot 'json/data.json' can be used for dev purposes
 *
 */

/**
 *      Bootstrap
 */
fetchMemberData().then(() => {
  main();
});

function fetchMemberData() {
  console.log(">> fetchMemberData()");

  return $.getJSON("json/data.json", function(){

  });
}

// .then(data => {
//     MEMBERDATA = data.personlista.person;
//     for (i = 0; i < MEMBERDATA.length; i++) {
//       let member = {};
//       member["id"] = MEMBERDATA.hangar_id;
//       member["name"] = MEMBERDATA.tilltalsnamn;
//       member["surname"] = MEMBERDATA.efternamn;
//       member["born"] = MEMBERDATA.fodd_ar;
//       member["gender"] = MEMBERDATA.kon;
//       member["party"] = MEMBERDATA.parti;
//       member["area"] = MEMBERDATA.valkrets;
//       member["status"] = MEMBERDATA.status;
//       member["imgUrl"] = MEMBERDATA.bild_url_80;

//       MEMBERLIST.push(member);
//       console.log(member)

/**
 *      MAIN
 */

function main() {
  console.log(">> main()");
// console.log(MEMBERLIST)

  // Print faces
  MEMBERLIST.forEach((member, i) => {
    console.log(">> MEMBERLIST.forEach");

    $("#parliament").append(
      "<li class='member' id="+member.id+"></li>"
    );
  });
}
