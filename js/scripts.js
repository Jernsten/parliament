MEMBERLIST = [];
hallå = "hallå";

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

function fetchMemberList() {
  console.log(">> fetchMemberList()");

  return $.getJSON("json/data.json").then(function(data) {
    MEMBERLIST = data.personlista.person;
  });
}

/**
 *      Bootstrap
 *      Fetch member list and then run main
 */
fetchMemberList().then(() => {
  main();
});

/**
 *      MAIN
 */

function main() {
  console.log(">> main()");
  // console.log(MEMBERLIST);

  // Print faces
  MEMBERLIST.forEach(member => {
    console.log(">> MEMBERLIST.forEach");

    // $('#main').append("<div class='memberbox' id="+member.hangar_id+"></div>");
  });
}
