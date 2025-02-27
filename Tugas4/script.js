document.addEventListener("DOMContentLoaded", function () {
    const addButton = document.querySelector(".button1");
    const taskContainer = document.querySelector(".container1");
    
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

        const taskDiv = document.createElement("div");
        taskDiv.classList.add("belajar");
        taskDiv.innerHTML = `
            <strong class="judul">${nameValue}</strong><br>
            ${descValue} <br>
            <label class="deadline">Deadline: ${dateValue}</label> <br>
            <button type="submit" class="hapus">Hapus</button>
        `;
        
        taskContainer.appendChild(taskDiv);

        const deleteButton = taskDiv.querySelector(".hapus");
        deleteButton.addEventListener("click", function () {
            taskDiv.remove();
        });

        nameInput.value = "";
        descInput.value = "";
        dateInput.value = "";
    });

    document.querySelectorAll(".hapus").forEach(button => {
        button.addEventListener("click", function () {
            this.parentElement.remove();
        });
    });
});
