document.addEventListener("keypress", (e) => {
    // console.log(e.code, e.key)
    if (e.code == "Slash") {
        if (/.*:\/\/(.*\.)?jisho\.org\/.*/.test(window.location.href)) {
            if (!document.getElementById("keyword").matches(":focus")) {
                document.getElementById("keyword").focus();
            }
        } else if (/.*:\/\/(.*\.)?twitch\.tv\/.*/.test(window.location.href)) {
            if (!document.getElementsByClassName("tw-input")[0].matches(":focus")) {
                document.getElementsByClassName("tw-input")[0].focus();
            }
        }
    }
});
