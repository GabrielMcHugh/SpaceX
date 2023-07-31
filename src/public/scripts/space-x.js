const URL = "http://localhost:3100";
let launchpadList;

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

    if (response.status === 200) {
      addLaunchpad(launchpadList, name);
    }

    return response;
  } catch (err) {
    console.log(err);
  }
}

/**
 * Appends a list element to an unorder list
 * @param {*} list: HTML unordered list element containing launchpads
 * @param {*} launchpadName : Name of the launchpad
 */
function addLaunchpad(list, launchpadName) {
  const li = document.createElement("li");
  li.textContent = launchpadName;

  const deleteButton = document.createElement("button");
  deleteButton.textContent = "Delete";
  deleteButton.addEventListener("click", function () {
    list.removeChild(li); // This removes the list item when the delete button is clicked
  });

  li.appendChild(deleteButton);
  list.appendChild(li);
}

async function deleteLaunchpad(name) {
  try {
    const response = await fetch(`${URL}/launchpads/test`, {
      method: "delete"
    })
    return response
  } catch (err) {
    return {
      ok: false
    }
  }

}

/**
 * Populates the launchpad list with some test data
 * 
 * @param {*} list: HTML unordered list element containing launchpads
 */
function addDummyLaunchpads(list) {
  const launchpads = ["Georgia", "Flint Michigan"]

  launchpads.forEach((x) => {
    addLaunchpad(list, x)
  })
}

function ready() {
  function onReady() {
    getLaunchpads();
    launchpadList = document.getElementById("launchpad-list");
    addDummyLaunchpads(launchpadList)
  }
  if (document.readyState !== "loading") {
    onReady();
    return;
  }
  document.addEventListener("DOMContentLoaded", onReady());
}

// Call the async function to load data
ready();
