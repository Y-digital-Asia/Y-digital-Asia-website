/* SCA modal */
// Get the modal
var button = document.getElementById("sca-download");
var modal = document.getElementById("sca-download-form");

// Get the button that opens the modal
// var btn = document.getElementById("myBtn");

// Get the <span> element that closes the modal
var span = document.getElementById("sca-close");

// When the user clicks on the button, open the modal
button.onclick = function () {
  modal.style.display = "block";
};

// When the user clicks on <span> (x), close the modal
span.onclick = function () {
  modal.style.display = "none";
};

// When the user clicks anywhere outside of the modal, close it

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

function postData(
  url = "",
  data = {},
  downloadUrl = `${window.location.origin}/img/upload/y-digital_whitepaper-nl.pdf`
) {
  // send data to server
  fetch(url, {
    method: "POST",
    mode: "cors",
    cache: "no-cache",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    redirect: "follow",
    referrerPolicy: "no-referrer",
    body: JSON.stringify(data),
  })
    .then((result) => {
      if (result.status != 200) {
        throw new Error("Bad server response");
      }

      // download file
      var url = downloadUrl; // URL to download
      console.log(url);
      anchor = document.createElement("a");
      anchor.href = downloadUrl;
      anchor.download = "y-digital_whitepaper";
      anchor.click();

      // clean up
      window.URL.revokeObjectURL(url);
      document.removeChild(anchor);

      return result;
    })
    .catch((error) => {
      console.log(error);
      throw new Error("Bad server response");
    });
}

const form = document.getElementById("sca-form");
const API_ENDPOINT = "https://voicemonitor.chatbots.nl/api/prod/log-events";

form.addEventListener("submit", function (e) {
  e.preventDefault(); //to prevent form submission

  // build the data
  const first_name = document.getElementById("first_name")?.value;
  const last_name = document.getElementById("last_name")?.value;
  const company = document.getElementById("company")?.value || "test";
  const email = document.getElementById("email")?.value;
  const phone = "test";
  const downloadUrl = document
    .getElementById("submit-button")
    ?.getAttribute("data-url");
  console.log({ downloadUrl });
  const ydigital = document.getElementById("y-digital-consent").checked;
  const data = {
    first_name,
    last_name,
    company,
    email,
    phone,
    direct_research: 0,
    ddma: 0,
    ydigital: ydigital ? 1 : 0,
  };
  // modal.style.display = "none";
  postData(API_ENDPOINT, data, downloadUrl);
});
