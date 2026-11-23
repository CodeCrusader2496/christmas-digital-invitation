
// ELEMENTS
const envelope = document.getElementById("envelope");
const openButton = document.getElementById("openButton");
const envelopeScreen = document.getElementById("envelopeScreen");
const invitation = document.getElementById("invitation");

const rsvpButton = document.getElementById("rsvpButton");
const rsvpModal = document.getElementById("rsvpModal");
const closeModal = document.getElementById("closeModal");

const rsvpForm = document.getElementById("rsvpForm");
const successMessage = document.getElementById("successMessage");


// OPEN ENVELOPE
openButton.addEventListener("click", () => {

    openButton.disabled = true;

    envelope.classList.add("open");

    setTimeout(() => {
        envelopeScreen.classList.add("hide");
        invitation.classList.add("show");
    }, 1400);

});


// OPEN RSVP MODAL
rsvpButton.addEventListener("click", () => {
    rsvpModal.classList.add("active");
});


// CLOSE RSVP MODAL
closeModal.addEventListener("click", () => {
    rsvpModal.classList.remove("active");
});


// CLOSE MODAL WHEN CLICKING OUTSIDE
rsvpModal.addEventListener("click", (event) => {
    if (event.target === rsvpModal) {
        rsvpModal.classList.remove("active");
    }
});


// RSVP FORM
rsvpForm.addEventListener("submit", (event) => {

    event.preventDefault();

    const name = document.getElementById("guestName").value.trim();
    const email = document.getElementById("guestEmail").value.trim();
    const attendance = document.getElementById("attendance").value;

    if (!name || !email || !attendance) {
        alert("Please complete all fields.");
        return;
    }

    const response = {
        name: name,
        email: email,
        attendance: attendance,
        date: new Date().toISOString()
    };

    // Save RSVP in browser for demonstration
    let responses = JSON.parse(
        localStorage.getItem("christmasRSVPs") || "[]"
    );

    responses.push(response);

    localStorage.setItem(
        "christmasRSVPs",
        JSON.stringify(responses)
    );

    rsvpForm.style.display = "none";
    successMessage.style.display = "block";

    successMessage.textContent =
        `Thank you, ${name}! Your response has been recorded.`;

});


// FALLING SNOW
const snowContainer = document.getElementById("snow");

function createSnowflake() {

    const snowflake = document.createElement("span");

    snowflake.className = "snowflake";
    snowflake.textContent = "❄";

    snowflake.style.left = Math.random() * 100 + "%";
    snowflake.style.fontSize = (Math.random() * 12 + 8) + "px";
    snowflake.style.animationDuration =
        (Math.random() * 6 + 5) + "s";

    snowflake.style.opacity = Math.random();

    snowContainer.appendChild(snowflake);

    setTimeout(() => {
        snowflake.remove();
    }, 12000);

}

setInterval(createSnowflake, 300);
