```javascript
// Go to registration section

function scrollToRegister() {

    document.getElementById("register").scrollIntoView({
        behavior: "smooth"
    });

}


// Student data

const students = [

    {
        name: "Arun",
        department: "CSE",
        skills: ["java", "python"]
    },

    {
        name: "Priya",
        department: "IT",
        skills: ["photoshop", "ui/ux"]
    },

    {
        name: "Rahul",
        department: "AI & DS",
        skills: ["python", "data science"]
    },

    {
        name: "Divya",
        department: "CSE",
        skills: ["web development", "javascript"]
    }

];


// Search skill

function searchSkill() {

    const searchInput =
        document.getElementById("skillSearch").value
        .toLowerCase()
        .trim();

    const results =
        document.getElementById("searchResults");

    results.innerHTML = "";

    if (searchInput === "") {

        results.innerHTML =
            "<p>Please enter a skill.</p>";

        return;
    }

    const matchedStudents = students.filter(student =>
        student.skills.some(skill =>
            skill.includes(searchInput)
        )
    );

    if (matchedStudents.length === 0) {

        results.innerHTML =
            "<p>No students found for this skill.</p>";

        return;
    }

    matchedStudents.forEach(student => {

        const card = document.createElement("div");

        card.className = "result-card";

        card.innerHTML = `
            <h3>${student.name}</h3>

            <p>
                Department: ${student.department}
            </p>

            <p>
                Skills: ${student.skills.join(", ")}
            </p>

            <button onclick="sendRequest('${student.name}')">
                Send Request
            </button>
        `;

        results.appendChild(card);

    });

}


// Send connection request

function sendRequest(name) {

    alert(
        "Skill exchange request sent to " +
        name +
        "!"
    );

}


// Registration

document
    .getElementById("registerForm")
    .addEventListener("submit", function(event) {

        event.preventDefault();

        const name =
            document.getElementById("name").value;

        const department =
            document.getElementById("department").value;

        const teachSkill =
            document.getElementById("teachSkill").value;

        const learnSkill =
            document.getElementById("learnSkill").value;


        const message =
            document.getElementById("profileMessage");


        message.innerHTML = `
            <p style="color: green;">
                ✅ Welcome ${name}!
            </p>

            <p>
                You can teach: ${teachSkill}
            </p>

            <p>
                You want to learn: ${learnSkill}
            </p>

            <p>
                Profile created successfully.
            </p>
        `;


        // Clear form

        document.getElementById("registerForm").reset();

    });
```
