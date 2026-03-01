const activityText = document.getElementById("activity")
const typeText = document.getElementById("type")
const participantsText = document.getElementById("participants")
const button = document.getElementById("get-activity")
const loadingText = document.getElementById("loading")
const errorText = document.getElementById("error")

button.addEventListener("click", getActivity)

async function getActivity() {

    loadingText.classList.remove("hidden")
    errorText.classList.add("hidden")

    try {
        const response = await fetch("https://apis.scrimba.com/bored/api/activity")

        if (!response.ok) {
            throw new Error("Network error")
        }

        const data = await response.json()

        activityText.textContent = data.activity
        typeText.textContent = `• ${data.type}`
        participantsText.textContent = `• ${data.participants} person(s)`

        document.getElementById("title").textContent = "Here’s something for you 🌼"

    } catch (error) {
        errorText.textContent = "Couldn't fetch an idea right now. Try again!"
        errorText.classList.remove("hidden")
    }

    loadingText.classList.add("hidden")
}