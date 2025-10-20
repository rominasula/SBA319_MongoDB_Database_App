// ------------------------------
// CONFIG
// ------------------------------
const API_BASE = "http://localhost:5000/api"; 
// DOM elements
const teacherList = document.getElementById("teacherList");
const childList = document.getElementById("childList");
const momentList = document.getElementById("momentList");

// ------------------------------
// TEACHERS
// ------------------------------
async function fetchTeachers() {
  try {
    const res = await fetch(`${API_BASE}/teachers`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const teachers = await res.json();
    teacherList.innerHTML = teachers
      .map(t => `<div>${t.name} - ${t.email} - ${t.classroom}</div>`)
      .join("");
  } catch (err) {
    console.error("Error fetching teachers:", err);
    teacherList.innerHTML = `<div style="color:red;">Error loading teachers. Check server connection.</div>`;
  }
}

document.getElementById("teacherForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("teacherName").value;
  const email = document.getElementById("teacherEmail").value;
  const classroom = document.getElementById("teacherClassroom").value;

  try {
    const res = await fetch(`${API_BASE}/teachers`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, email, classroom }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
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
    const res = await fetch(`${API_BASE}/children`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const children = await res.json();
    childList.innerHTML = children
      .map(c => `<div>${c.name} - Age: ${c.age} - Parent: ${c.parentEmail}</div>`)
      .join("");
  } catch (err) {
    console.error("Error fetching children:", err);
    childList.innerHTML = `<div style="color:red;">Error loading children. Check server connection.</div>`;
  }
}

document.getElementById("childForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const name = document.getElementById("childName").value;
  const age = document.getElementById("childAge").value;
  const parentEmail = document.getElementById("childParentEmail").value;

  try {
    const res = await fetch(`${API_BASE}/children`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ name, age, parentEmail }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    e.target.reset();
    fetchChildren();
  } catch (err) {
    console.error("Error adding child:", err);
  }
});

// ------------------------------
// MOMENTS
// ------------------------------
async function fetchMoments() {
  try {
    const res = await fetch(`${API_BASE}/moments`);
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    const moments = await res.json();
    momentList.innerHTML = moments
      .map(m => `<div>${m.title} - Child: ${m.childName} - ${m.description}</div>`)
      .join("");
  } catch (err) {
    console.error("Error fetching moments:", err);
    momentList.innerHTML = `<div style="color:red;">Error loading moments. Check server connection.</div>`;
  }
}

document.getElementById("momentForm").addEventListener("submit", async (e) => {
  e.preventDefault();
  const title = document.getElementById("momentTitle").value;
  const childName = document.getElementById("momentChild").value;
  const description = document.getElementById("momentDescription").value;

  try {
    const res = await fetch(`${API_BASE}/moments`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ title, childName, description }),
    });
    if (!res.ok) throw new Error(`HTTP ${res.status}`);
    e.target.reset();
    fetchMoments();
  } catch (err) {
    console.error("Error adding moment:", err);
  }
});

// ------------------------------
// INITIAL LOAD
// ------------------------------
fetchTeachers();
fetchChildren();
fetchMoments();
