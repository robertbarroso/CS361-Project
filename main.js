// Storage objects for all sections
const scheduleData = {
  monday: [],
  tuesday: [],
  wednesday: [],
  thursday: [],
  friday: [],
  saturday: [],
  sunday: [],
};

const socialMediaPosts = [];
const inspirationNotes = [];

// Track current states
let currentDay = "monday";
let currentTab = "main-weekly-content";

// Initialize on page load
document.addEventListener("DOMContentLoaded", () => {
  initWeeklySchedule();
  updateNavHighlight("main-weekly-content");
});

document.querySelectorAll(".nav-button").forEach((button) => {
  button.addEventListener("click", function () {
    const sectionId = this.getAttribute("data-section");
    showSection(sectionId);
    updateNavHighlight(sectionId);
    currentTab = sectionId;

    if (sectionId === "main-weekly-content") {
      initWeeklySchedule();
    } else if (sectionId === "main-social-media") {
      initSocialMedia();
    } else if (sectionId === "main-inspiration") {
      initInspiration();
    } else if (sectionId === "main-help") {
      initHelp();
    }
  });
});

function updateNavHighlight(sectionId) {
  document.querySelectorAll(".nav-button").forEach((btn) => {
    btn.classList.remove("active-nav");
  });
  document
    .querySelector(`[data-section="${sectionId}"]`)
    .classList.add("active-nav");
}

function showSection(sectionId) {
  document.querySelectorAll(".section").forEach((section) => {
    section.classList.add("hidden");
  });
  document.getElementById(sectionId).classList.remove("hidden");
}

// ------------------ Weekly Schedule ------------------
function initWeeklySchedule() {
  const weeklyContent = document.getElementById("main-weekly-content");

  weeklyContent.innerHTML = `
  <div id="schedule-current-entry">
    <div id="schedule-content-title">
      <input id="content-title" placeholder="Enter title here...">
    </div>

    <div id="schedule-content-genre">
      <input id="content-genre" placeholder="Enter subtitle or genre here...">
    </div>

    <div id="schedule-content-modifiers">
  <div class="modifier-block tooltip">
    <label class="input-label" for="platform-select">Select Platform</label>
    <select id="platform-select">
      <option value="" disabled selected>Select platform...</option>
      <option value="youtube">YouTube</option>
      <option value="twitch">Twitch</option>
      <option value="kick">Kick</option>
      <option value="x">X</option>
      <option value="instagram">Instagram</option>
      <option value="facebook">Facebook</option>
      <option value="tiktok">TikTok</option>
    </select>
    <span class="tooltiptext">
      <strong>Select which platform to go live</strong><br><br>
      Choose one service where this content will be published. You can update this before exporting.
    </span>
  </div>

  <div class="modifier-block tooltip">
    <label class="input-label" for="schedule-content-time">Select Time</label>
    <input type="time" id="schedule-content-time" name="schedule-content-time">
    <span class="tooltiptext">
      <strong>Select a time for entry</strong><br><br>
      Choose the exact hour and minute when this content is scheduled to go live.
    </span>
  </div>

  <div class="modifier-block tooltip">
    <label class="input-label" for="schedule-content-day">Select Date</label>
    <input type="date" id="schedule-content-day" name="schedule-content-day">
    <span class="tooltiptext">
      <strong>Select a day for entry</strong><br><br>
      Choose the day, month, and year when this content will go live.
    </span>
  </div>

  <div class="modifier-block tooltip black-button-entity">
    <label class="input-label">&nbsp;</label>
    <button class="black-button" id="add-schedule-btn">Add to schedule</button>
    <span class="tooltiptext">
      <strong>Add to Schedule</strong><br><br>
      Click to add this entry to your schedule.
    </span>
  </div>
</div>

</div>

<div id = "day-selector"> 
  <div id = "monday-selector" class = "day-container active-day" >
    <p class = "day-title"> MON </p>
  <div class = "day-button-layout">
      <button id = "monday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "monday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "tuesday-selector" class = "day-container" >
    <p class = "day-title"> TUE </p>
  <div class = "day-button-layout">
      <button id = "tuesday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "tuesday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "wednesday-selector" class = "day-container" >
    <p class = "day-title"> WED </p>
  <div class = "day-button-layout">
      <button id = "wednesday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "wednesday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "thursday-selector" class = "day-container" >
    <p class = "day-title"> THUR </p>
  <div class = "day-button-layout">
      <button id = "thursday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "thursday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "friday-selector" class = "day-container" >
    <p class = "day-title"> FRI </p>
  <div class = "day-button-layout">
      <button id = "friday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "friday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "saturday-selector" class = "day-container" >
    <p class = "day-title"> SAT </p>
  <div class = "day-button-layout">
      <button id = "saturday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "saturday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

  <div id = "sunday-selector" class = "day-container" >
    <p class = "day-title"> SUN </p>
  <div class = "day-button-layout">
      <button id = "sunday-edit" class = "edit-button tooltip"> Edit 
      <span class="tooltiptext">
      <strong>Edit day</strong><br><br>
      Click here to edit the selected day. This will populate the entries above with what you have put previously. 
    </span></button>
      <button id = "sunday-delete" class = "delete-button tooltip"> Clear
       <span class="tooltiptext">
      <strong>Clear day</strong><br><br>
      Click here to clear the day of all previous entries. Once cleared, you are unable to recover the entry's contents. </span></button>
    </div>
  </div>

</div>

<div id = "bottom-buttons">
  <button id = "import-button" class = "tooltip"> Import Schedule 
  <span class="tooltiptext">
      <strong>Import Schedule</strong><br><br>
      Click here to import a schedule (.csv). This will override the current schedule. Please export the current schedule in order to save it. 
  </span></button>
  <button id = "view-button"  class = "tooltip"> View your schedule 
  <span class="tooltiptext">
    <strong>View Schedule</strong><br><br>
      Click here to view your schedule and how it may look like in the final export. You also go here to export your current schedule.  
  </span></button>
</div>
`;

  attachScheduleEventListeners();
  loadDayData(currentDay);
}

function attachScheduleEventListeners() {
  const addBtn = document.getElementById("add-schedule-btn");
  if (addBtn) {
    addBtn.addEventListener("click", addToSchedule);
  }

  const days = [
    "monday",
    "tuesday",
    "wednesday",
    "thursday",
    "friday",
    "saturday",
    "sunday",
  ];
  days.forEach((day) => {
    const editBtn = document.getElementById(`${day}-edit`);
    const deleteBtn = document.getElementById(`${day}-delete`);

    if (editBtn) {
      editBtn.addEventListener("click", () => switchToDay(day));
    }

    if (deleteBtn) {
      deleteBtn.addEventListener("click", () => clearDay(day));
    }
  });
}

function addToSchedule() {
  const title = document.getElementById("content-title").value;
  const genre = document.getElementById("content-genre").value;
  const platform = document.getElementById("platform-select").value;
  const time = document.getElementById("schedule-content-time").value;
  const date = document.getElementById("schedule-content-day").value;

  if (!title || !platform || !time || !date) {
    alert(
      "Please fill in all required fields (Title, Platform, Time, and Date)"
    );
    return;
  }

  const entry = {
    title: title,
    genre: genre,
    platform: platform,
    time: time,
    date: date,
  };

  scheduleData[currentDay].push(entry);

  document.getElementById("content-title").value = "";
  document.getElementById("content-genre").value = "";
  document.getElementById("platform-select").selectedIndex = 0;
  document.getElementById("schedule-content-time").value = "";
  document.getElementById("schedule-content-day").value = "";

  alert(
    `Entry added to ${
      currentDay.charAt(0).toUpperCase() + currentDay.slice(1)
    }!`
  );
}

function switchToDay(day) {
  currentDay = day;

  document.querySelectorAll(".day-container").forEach((container) => {
    container.classList.remove("active-day");
  });
  document.getElementById(`${day}-selector`).classList.add("active-day");

  loadDayData(day);
}

function loadDayData(day) {
  const entries = scheduleData[day];

  if (entries.length === 0) {
    document.getElementById("content-title").value = "";
    document.getElementById("content-genre").value = "";
    document.getElementById("platform-select").selectedIndex = 0;
    document.getElementById("schedule-content-time").value = "";
    document.getElementById("schedule-content-day").value = "";
  } else {
    const entry = entries[0];
    document.getElementById("content-title").value = entry.title;
    document.getElementById("content-genre").value = entry.genre;
    document.getElementById("platform-select").value = entry.platform;
    document.getElementById("schedule-content-time").value = entry.time;
    document.getElementById("schedule-content-day").value = entry.date;
  }
}

function clearDay(day) {
  const deleteBtn = document.getElementById(`${day}-delete`);

  if (deleteBtn.classList.contains("confirm-delete")) {
    scheduleData[day] = [];

    if (day === currentDay) {
      document.getElementById("content-title").value = "";
      document.getElementById("content-genre").value = "";
      document.getElementById("platform-select").selectedIndex = 0;
      document.getElementById("schedule-content-time").value = "";
      document.getElementById("schedule-content-day").value = "";
    }

    deleteBtn.innerHTML = "Clear";
    deleteBtn.classList.remove("confirm-delete");
    deleteBtn.style.height = "35px";

    alert(`${day.charAt(0).toUpperCase() + day.slice(1)} has been cleared!`);
  } else {
    deleteBtn.innerHTML =
      '<strong>Are you sure?</strong><br><span style="font-size: 11px; font-weight: 400;">You cannot undo this action</span>';
    deleteBtn.classList.add("confirm-delete");
    deleteBtn.style.height = "70px";

    setTimeout(() => {
      if (deleteBtn.classList.contains("confirm-delete")) {
        deleteBtn.innerHTML = "Clear";
        deleteBtn.classList.remove("confirm-delete");
        deleteBtn.style.height = "35px";
      }
    }, 3000);
  }
}

// ------------------ Social Media ------------------
function initSocialMedia() {
  const socialContent = document.getElementById("main-social-media");

  socialContent.innerHTML = `
    <div id="social-input-section">
      <div id="schedule-content-title">
        <input id="social-post-text" placeholder="What's on your mind?">
      </div>

      <div id="schedule-content-modifiers">
        <div class="modifier-block tooltip">
          <label class="input-label" for="social-platform-select">Select Platform</label>
          <select id="social-platform-select">
            <option value="" disabled selected>Select platform...</option>
            <option value="x">X</option>
            <option value="facebook">Facebook</option>
            <option value="instagram">Instagram</option>
            <option value="discord">Discord Announcement</option>
          </select>
          <span class="tooltiptext">
            <strong>Select social platform</strong><br><br>
            Choose which social media platform to post this content to.
          </span>
        </div>

        <div class="modifier-block tooltip black-button-entity">
          <label class="input-label">&nbsp;</label>
          <button class="black-button" id="add-social-btn">Save Post</button>
          <span class="tooltiptext">
            <strong>Save Post</strong><br><br>
            Click to save this post to your social media queue.
          </span>
        </div>
      </div>
    </div>

    <div id="social-posts-container"></div>
  `;

  attachSocialEventListeners();
  renderSocialPosts();
}

function attachSocialEventListeners() {
  const addBtn = document.getElementById("add-social-btn");
  if (addBtn) {
    addBtn.addEventListener("click", addSocialPost);
  }
}

function addSocialPost() {
  const postText = document.getElementById("social-post-text").value;
  const platform = document.getElementById("social-platform-select").value;

  if (!postText || !platform) {
    alert("Please enter post content and select a platform");
    return;
  }

  const post = {
    id: Date.now(),
    text: postText,
    platform: platform,
  };

  socialMediaPosts.push(post);

  document.getElementById("social-post-text").value = "";
  document.getElementById("social-platform-select").selectedIndex = 0;

  renderSocialPosts();
}

function renderSocialPosts() {
  const container = document.getElementById("social-posts-container");
  if (!container) return;

  if (socialMediaPosts.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; color: #888; padding: 40px;">No posts saved yet. Create your first post above!</p>';
    return;
  }

  container.innerHTML =
    '<div id="day-selector">' +
    socialMediaPosts
      .map(
        (post) => `
    <div class="day-container" data-post-id="${post.id}">
      <p class="day-title">${post.platform.toUpperCase()}</p>
      <p style="font-size: 14px; padding: 10px; word-wrap: break-word;">${post.text.substring(
        0,
        50
      )}${post.text.length > 50 ? "..." : ""}</p>
      <div class="day-button-layout">
        <button class="edit-button tooltip" onclick="editSocialPost(${
          post.id
        })">Edit
          <span class="tooltiptext">
            <strong>Edit post</strong><br><br>
            Click to edit this social media post.
          </span>
        </button>
        <button class="delete-button tooltip" onclick="deleteSocialPost(${
          post.id
        })">Clear
          <span class="tooltiptext">
            <strong>Delete post</strong><br><br>
            Click to delete this post. You cannot undo this action.
          </span>
        </button>
      </div>
    </div>
  `
      )
      .join("") +
    "</div>";
}

function editSocialPost(postId) {
  const post = socialMediaPosts.find((p) => p.id === postId);
  if (!post) return;

  document.getElementById("social-post-text").value = post.text;
  document.getElementById("social-platform-select").value = post.platform;

  deleteSocialPost(postId, true);
}

function deleteSocialPost(postId, skipConfirm = false) {
  const postElement = document.querySelector(`[data-post-id="${postId}"]`);
  const deleteBtn = postElement?.querySelector(".delete-button");

  if (!deleteBtn) return;

  if (skipConfirm || deleteBtn.classList.contains("confirm-delete")) {
    const index = socialMediaPosts.findIndex((p) => p.id === postId);
    if (index > -1) {
      socialMediaPosts.splice(index, 1);
      renderSocialPosts();
    }
  } else {
    deleteBtn.innerHTML =
      '<strong>Are you sure?</strong><br><span style="font-size: 11px; font-weight: 400;">You cannot undo this action</span>';
    deleteBtn.classList.add("confirm-delete");
    deleteBtn.style.height = "70px";

    setTimeout(() => {
      if (deleteBtn.classList.contains("confirm-delete")) {
        deleteBtn.innerHTML = "Clear";
        deleteBtn.classList.remove("confirm-delete");
        deleteBtn.style.height = "35px";
      }
    }, 3000);
  }
}

// ------------------ Content Ideas ------------------
function initInspiration() {
  const inspirationContent = document.getElementById("main-inspiration");

  inspirationContent.innerHTML = `
    <div id="inspiration-input-section">
      <div id="schedule-content-title">
        <input id="note-title" placeholder="Note title...">
      </div>

      <div id="schedule-content-genre">
        <input id="note-content" placeholder="Write your note here...">
      </div>

      <div id="schedule-content-modifiers">
        <div class="modifier-block tooltip black-button-entity">
          <label class="input-label">&nbsp;</label>
          <button class="black-button" id="add-note-btn">Save Note</button>
          <span class="tooltiptext">
            <strong>Save Note</strong><br><br>
            Click to save this note to your collection.
          </span>
        </div>
      </div>
    </div>

    <div id="notes-container"></div>
  `;

  attachNoteEventListeners();
  renderNotes();
}

function attachNoteEventListeners() {
  const addBtn = document.getElementById("add-note-btn");
  if (addBtn) {
    addBtn.addEventListener("click", addNote);
  }
}

function addNote() {
  const title = document.getElementById("note-title").value;
  const content = document.getElementById("note-content").value;

  if (!title || !content) {
    alert("Please enter both a title and content for your note");
    return;
  }

  const note = {
    id: Date.now(),
    title: title,
    content: content,
  };

  inspirationNotes.push(note);

  document.getElementById("note-title").value = "";
  document.getElementById("note-content").value = "";

  renderNotes();
}

function renderNotes() {
  const container = document.getElementById("notes-container");
  if (!container) return;

  if (inspirationNotes.length === 0) {
    container.innerHTML =
      '<p style="text-align: center; color: #888; padding: 40px;">No notes saved yet. Create your first note above!</p>';
    return;
  }

  container.innerHTML =
    '<div id="day-selector">' +
    inspirationNotes
      .map(
        (note) => `
    <div class="day-container" data-note-id="${note.id}">
      <p class="day-title">${note.title.substring(0, 15)}${
          note.title.length > 15 ? "..." : ""
        }</p>
      <p style="font-size: 14px; padding: 10px; word-wrap: break-word;">${note.content.substring(
        0,
        50
      )}${note.content.length > 50 ? "..." : ""}</p>
      <div class="day-button-layout">
        <button class="edit-button tooltip" onclick="editNote(${note.id})">Edit
          <span class="tooltiptext">
            <strong>Edit note</strong><br><br>
            Click to edit this note.
          </span>
        </button>
        <button class="delete-button tooltip" onclick="deleteNote(${
          note.id
        })">Clear
          <span class="tooltiptext">
            <strong>Delete note</strong><br><br>
            Click to delete this note. You cannot undo this action.
          </span>
        </button>
      </div>
    </div>
  `
      )
      .join("") +
    "</div>";
}

function editNote(noteId) {
  const note = inspirationNotes.find((n) => n.id === noteId);
  if (!note) return;

  document.getElementById("note-title").value = note.title;
  document.getElementById("note-content").value = note.content;

  deleteNote(noteId, true);
}

function deleteNote(noteId, skipConfirm = false) {
  const noteElement = document.querySelector(`[data-note-id="${noteId}"]`);
  const deleteBtn = noteElement?.querySelector(".delete-button");

  if (!deleteBtn) return;

  if (skipConfirm || deleteBtn.classList.contains("confirm-delete")) {
    const index = inspirationNotes.findIndex((n) => n.id === noteId);
    if (index > -1) {
      inspirationNotes.splice(index, 1);
      renderNotes();
    }
  } else {
    deleteBtn.innerHTML =
      '<strong>Are you sure?</strong><br><span style="font-size: 11px; font-weight: 400;">You cannot undo this action</span>';
    deleteBtn.classList.add("confirm-delete");
    deleteBtn.style.height = "70px";

    setTimeout(() => {
      if (deleteBtn.classList.contains("confirm-delete")) {
        deleteBtn.innerHTML = "Clear";
        deleteBtn.classList.remove("confirm-delete");
        deleteBtn.style.height = "35px";
      }
    }, 3000);
  }
}

// ------------------ HELP ------------------
function initHelp() {
  const helpContent = document.getElementById("main-help");
  helpContent.innerHTML = `
  <h2>Help</h2>

  <strong> Weekly Schedule </strong>
  <p> Begin by entering in the details of what you would like to schedule for the week. Include as little or as much information as you like - but must include a weekday.When finished, click “Add to schedule”.  Click “View Schedule” to see your current week. 

    In the “View Schedule” screen, modify colors and fonts and export a PNG file of the schedule to add to your own graphics. </p>

      <strong> Social Media </strong>
  <p> Begin by creating a new group with the button on the right. 

In the create screen, add a title, summary, and then add each post for each individual social media platform. 

This will help you keep organized with all of your posts.  </p>

<strong> Content Ideas </strong>
  <p> Write down some ideas that you have for future content, and your notes will stay saved here. 

Click on “Add a new idea”, add a title and begin typing! 
 </p>


  `;
}

const style = document.createElement("style");
style.textContent = `
  .active-day {
    background-color: #2d2d2d !important;
    transform: scale(1.05);
    box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  }
  
  .active-day .day-title {
    color: #e6e6e6 !important;
  }
  
  .day-container {
    transition: all 0.3s ease;
    height: auto !important;
    min-height: 250px;
  }
  
  .delete-button {
    transition: all 0.3s ease;
  }
  
  .delete-button.confirm-delete {
    background-color: rgb(183, 28, 28) !important;
    font-weight: 700;
  }
  
  .delete-button.confirm-delete:hover {
    background-color: rgb(211, 47, 47) !important;
  }
  
  .active-nav {
    background-color: rgb(233, 233, 233) !important;
  }
  
  #social-posts-container,
  #notes-container {
    margin-top: 40px;
  }
`;
document.head.appendChild(style);
