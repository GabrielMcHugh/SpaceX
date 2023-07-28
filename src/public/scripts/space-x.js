const URL = "http://localhost:3100";
let launchpadList = []; //An array containing the names of launchpads fields to be rendered

// Define an async function to load data and populate the list
async function getLaunchpads() {
  try {
    // Make a fetch request to an unspecified API endpoint
    const response = await fetch(`${URL}/launchpads`);

    // .then((res) => console.log('launchpads: ', res))
    const data = await response.json();
    const dataList = document.getElementById("launchpad-list");
    // Iterate through the data array and create list items
    if (!!data && !data.error) {
      data.forEach((item) => {
        const li = document.createElement("li");
        li.textContent = item.name;
        dataList.appendChild(li);
      });
    }
  } catch (error) {
    console.error("Error:", error);
  }
}

async function addNewLaunchpad() {
  const form = document.getElementById("form");
  const data = new FormData(form);

  const name = data.get("name");
  const mission = data.get("mission");
  const locality = data.get("locality");
  const region = data.get("region");
  const launchpad_attempts = data.get("launchpad-attempts");
  const launchpad_successes = data.get("launchpad-successes");
  const launchpad = {
    name,
    mission,
    locality,
    region,
    launchpad_attempts,
    launchpad_successes,
  };

  try {
    const response = await fetch(`${URL}/launchpads`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(launchpad),
    });

    // if (response.status === 200) {
    launchpadList.push(name);
    updateLaunchpadListHTML(launchpadList);
    // }

    return response;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Compiles the launchpad list template and replaces it on the view
 * @param {*} list: An array of launchpad names
 */
function updateLaunchpadListHTML(list) {
  console.log("updateLaunchListHTML", list);
  const launchpadData = { list };
  const template = Handlebars.compile(
    document.getElementById("launchpad-template").innerHTML
  );
  const launchpadListHTML = template(launchpadData);

  console.log('listHTML', launchpadListHTML)
  document.getElementById("launchpad-list").innerHTML = launchpadListHTML;
}

function ready() {
  function onReady() {
    getLaunchpads();
  }
  if (document.readyState !== "loading") {
    onReady();
    return;
  }
  document.addEventListener("DOMContentLoaded", onReady());
}

// Call the async function to load data
ready();
