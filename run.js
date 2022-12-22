// template regex: /.*:\/\/(.*\.)?<site>\.<tld>\/.*/
// should make a function that takes the site and generates the regex, but too lazy

document.addEventListener("keypress", (e) => {
    // console.log(e.code, e.key)
    // using e.code == "Slash" makes it trigger on "?" too.
    if (e.key == "/") {
        if (/.*:\/\/(.*\.)?jisho\.org\/.*/.test(window.location.href)) {
            if (document.getElementById("keyword").matches(":focus")) return
            document.getElementById("keyword").focus();
        } else if (/.*:\/\/(.*\.)?twitch\.tv\/.*/.test(window.location.href)) {
            if (document.getElementsByClassName("tw-input")[0].matches(":focus")) return
            // make sure chat isn't focused
            if (document.querySelectorAll("[data-slate-node]")[0].matches(":focus")) return
            document.getElementsByClassName("tw-input")[0].focus();
        }
    }
});
