document.getElementById("updateIntro").addEventListener("click", function() {
    const name = document.getElementById("nameInput").value;
    const bio = document.getElementById("bioInput").value;
    
    if (name.trim() !== "" && bio.trim() !== "") {
        document.getElementById("introText").innerHTML = `<strong>${name}</strong><br>${bio}`;
    } else {
        alert("名前と自己紹介を入力してください！");
    }
});
