// DOM elements
const teacherList = document.getElementById("teacherList");
const childList = document.getElementById("childList");
const momentList = document.getElementById("momentList");

// ------------------------------
// TEACHERS
// ------------------------------
async function fetchTeachers() {
  try {
    const res = await fetch("/api/teachers");
    const teachers = await res.json();
    teacherList.innerHTML = teachers
      .map(t => `<div>${t.name} - ${t.email} - ${t.classroom}</div>`)
      .join("");
  } catch (err) {
    console.error("Error fetching teachers:", err);
  }
}

document.getElementById("teacherForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("teacherName").value;
  const email = document.getElementById("teacherEmail").value;
  const classroom = document.getElementById("teacherClassroom").value;

  try {
    await fetch("/api/teachers", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, classroom })
    });
    e.target.reset();
    fetchTeachers();
  } catch (err) {
    console.error("Error adding teacher:", err);
  }
});

// ------------------------------
// CHILDREN
// ------------------------------
async function fetchChildren() {
  try {
    const res = await fetch("/api/children");
    const children = await res.json();
    childList.innerHTML = children
      .map(c => `<div>${c.name} - Age: ${c.age} - Parent: ${c.parentEmail}</div>`)
      .join("");
  } catch (err) {
    console.error("Error fetching children:", err);
  }
}

document.getElementById("childForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("childName").value;
  const age = document.getElementById("childAge").value;
  const parentEmail = document.getElementById("childParentEmail").value;

  try {
    await fetch("/api/children", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, parentEmail })
    });
    e.target.reset();
    fetchChildren();
  } catch (err) {
    console.error("Error adding child:", err);
  }
});


// ------------------------------
// INITIAL LOAD
// ------------------------------
fetchTeachers();
fetchChildren();
fetchMoments();
