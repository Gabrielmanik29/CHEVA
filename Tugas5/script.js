document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".button1");
    const taskContainer = document.querySelector(".container1");

    // Load tasks from localStorage when page loads
    function loadTasks() {
        const tasks = JSON.parse(localStorage.getItem("tasks")) || [];
        taskContainer.innerHTML = "";
        tasks.forEach(task => {
            addTaskToDOM(task.name, task.desc, task.date);
        });
    }

    function saveTasks() {
        const taskElements = document.querySelectorAll(".belajar");
        const tasks = [];
        taskElements.forEach(taskEl => {
            const name = taskEl.querySelector(".judul").innerText;
            const desc = taskEl.querySelector(".deskripsi-text").innerText;
            const date = taskEl.querySelector(".deadline").innerText.replace("Deadline: ", "");
            tasks.push({ name, desc, date });
        });
        localStorage.setItem("tasks", JSON.stringify(tasks));
    }

    function addTaskToDOM(nameValue, descValue, dateValue) {
        const taskDiv = document.createElement("div");
        taskDiv.classList.add("belajar");
        taskDiv.innerHTML = `
            <strong class="judul">${nameValue}</strong><br>
            <span class="deskripsi-text">${descValue}</span> <br>
            <label class="deadline">Deadline: ${dateValue}</label> <br>
            <button type="submit" class="hapus">Hapus</button>
        `;
        
        taskContainer.appendChild(taskDiv);
        
        const deleteButton = taskDiv.querySelector(".hapus");
        deleteButton.addEventListener("click", function () {
            taskDiv.remove();
            saveTasks();
        });
    }

    addButton.addEventListener("click", function () {
        const nameInput = document.querySelector("input[type='text']");
        const descInput = document.querySelector("textarea");
        const dateInput = document.querySelector("input[type='date']");

        const nameValue = nameInput.value.trim();
        const descValue = descInput.value.trim();
        const dateValue = dateInput.value;

        if (nameValue === "" || descValue === "" || dateValue === "") {
            alert("Harap isi semua kolom sebelum menambahkan tugas.");
            return;
        }

        addTaskToDOM(nameValue, descValue, dateValue);
        saveTasks();

        nameInput.value = "";
        descInput.value = "";
        dateInput.value = "";
    });

    loadTasks();
});
