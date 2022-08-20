/*Some people just have a first name; some people have first and last names and some people have first, middle and last names.

You task is to initialize the middle names (if there is any).

Examples
'Jack Ryan'                   => 'Jack Ryan'
'Lois Mary Lane'              => 'Lois M. Lane'
'Dimitri'                     => 'Dimitri'
'Alice Betty Catherine Davis' => 'Alice B. C. Davis'*/

function initializeNames(name) {
  let initName = name.split(" ");

  if (name.split(" ").length <= 2) initName;
  else {
    for (let i = 1; i < initName.length - 1; i++) {
      initName[i] = initName[i][0] + ".";
    }
  }
  return initName.join(" ");
}

console.log(initializeNames("Alice Betty Catherine Davis"));
