const activityText = document.getElementById("activity")
const typeText = document.getElementById("type")
const participantsText = document.getElementById("participants")
const button = document.getElementById("get-activity")
const loader = document.getElementById("loader")
const errorText = document.getElementById("error")

button.addEventListener("click", getActivity)

async function getActivity() {
    loader.classList.remove("hidden")
    errorText.classList.add("hidden")
    activityText.textContent = ""

    try {
        const response = await fetch("https://apis.scrimba.com/bored/api/activity")

        if (!response.ok) {
            throw new Error("Network error")
        }

        const data = await response.json()

        activityText.textContent = data.activity
        typeText.textContent = `Type: ${data.type}`
        participantsText.textContent = `Participants: ${data.participants}`

    } catch (error) {
        errorText.textContent = "Something went wrong. Try again."
        errorText.classList.remove("hidden")
    } finally {
        loader.classList.add("hidden")
    }
}