// Define an async function to load data and populate the list
async function getLaunchpads() {
  console.log("Running httGetLaunchpads")
  try {
    // Make a fetch request to an unspecified API endpoint
    const response = await fetch("http://localhost:3100/launchpads")
    
    // .then((res) => console.log('launchpads: ', res))
    const data = await response.json();
    const dataList = document.getElementById("launchpad-list");
    // Iterate through the data array and create list items
    if (!!data) {
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

// Call the async function to load data
document.onload = getLaunchpads();
