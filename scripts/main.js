function toggleMenu(menuBtn) {
    var menu = document.getElementById("left");
    if (menuBtn.classList.contains("open")) {
        menu.classList.remove("show");
        menuBtn.classList.remove("open");
    } else {
        menu.classList.add("show");
        menuBtn.classList.add("open");
    }
}

function toggleProfile(profileBtn) {
    var userProfile = document.getElementById("user-profile");
    if (profileBtn.classList.contains("open")) {
        userProfile.classList.remove("show");
        profileBtn.classList.remove("open");
    } else {
        userProfile.classList.add("show");
        profileBtn.classList.add("open");
    }
}
