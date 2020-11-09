var darkMode = true

const toggleSwitch = document.getElementById("dark-mode-button");

function switchTheme(e) {
    if (darkMode === true) {
        document.documentElement.setAttribute('data-theme', 'light');
        e.toElement.textContent = "Dark Mode";
        darkMode = false
    }
    else {
        document.documentElement.setAttribute('data-theme', 'dark');
        e.toElement.textContent = "Light Mode";
        darkMode = true
    }    
}

toggleSwitch.addEventListener('click', switchTheme, false);