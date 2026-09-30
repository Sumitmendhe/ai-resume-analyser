function analyzeResume() {

    const fileInput = document.getElementById("resumeInput");

    const message = document.getElementById("message");

    if (fileInput.files.length === 0) {

        message.textContent = "Please select a resume.";

        return;
    }

    const file = fileInput.files[0];

    message.textContent =
        "Resume selected: " + file.name;
}