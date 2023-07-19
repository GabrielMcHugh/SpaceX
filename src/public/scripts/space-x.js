// Define an async function to load data and populate the list
async function httpGetLaunchpads() {
  try {
    // Make a fetch request to an unspecified API endpoint
    const response = await fetch("http://localhost:3100/launchpads");
    const data = await response.json();

    const dataList = document.getElementById("Launchpad List");
    // Iterate through the data array and create list items
    if (data.status == 200) {
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
document.onload = httpGetLaunchpads();
