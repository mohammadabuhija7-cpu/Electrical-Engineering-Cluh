console.log("الموقع جاهز للعمل!");

document.querySelectorAll(".lesson-list li").forEach(item => {
    item.addEventListener("click", () => {
        alert("رح نضيف رابط الدرس هون لاحقًا 😉");
    });
});
