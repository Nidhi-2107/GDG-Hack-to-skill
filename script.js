function gradeAssignment() {
    const fileInput = document.getElementById("assignmentUpload");

    if (fileInput.files.length === 0) {
        alert("Please upload an assignment file.");
        return;
    }

    let score = Math.floor(Math.random() * 100) + 1;
    let feedback = generateFeedback(score);

    localStorage.setItem("grade", score);
    localStorage.setItem("feedback", feedback);

    window.location.href = "results.html";
}

document.addEventListener("DOMContentLoaded", function () {
    if (document.getElementById("grade")) {
        document.getElementById("grade").innerText = `Score: ${localStorage.getItem("grade")}/100`;
        document.getElementById("feedback").innerText = `Feedback: ${localStorage.getItem("feedback")}`;
    }
});

function generateFeedback(score) {
    if (score >= 90) return "Excellent work! Keep up the great effort.";
    if (score >= 75) return "Good job! You have a strong understanding.";
    if (score >= 50) return "Fair attempt! Consider reviewing some concepts.";
    return "Needs improvement. Focus on key areas for better understanding.";
}
