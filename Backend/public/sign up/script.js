document.addEventListener("DOMContentLoaded", function () {
    const step1 = document.getElementById("step1");
    const step2 = document.getElementById("step2");
    const nextBtn = document.getElementById("next");
    const backBtn = document.getElementById("back");

    // Show Step 2 and Hide Step 1
    nextBtn.addEventListener("click", function () {
        step1.classList.add("hidden");
        step2.classList.remove("hidden");
    });

    // Show Step 1 and Hide Step 2
    backBtn.addEventListener("click", function () {
        step2.classList.add("hidden");
        step1.classList.remove("hidden");
    });
});
