"use strict";
const shortcut = (key, id) => {
    return document.addEventListener("keyup", (e) => {
        //@ts-ignore
        if (event.keyCode == key && !e.ctrlKey && !e.shiftKey && !e.altKey) {
            document.getElementById(id).click();
            console.log(`Clicked: ${id} (${key})`);
        }
    });
};
const R = 82;
shortcut(R, "refresh");
const C = 67;
shortcut(C, "copy");
const T = 84;
shortcut(T, "dark-mode-toggle");
const M = 77;
shortcut(M, "moreinfo");
const G = 71;
shortcut(G, "github");
const H = 72;
shortcut(H, "hbutton");
const slash = 191;
shortcut(slash, "shortcuts");
const F = 70;
shortcut(F, "fullscreen");
const L = 76;
shortcut(L, "fav");
const O = 79;
shortcut(O, "favlist");
const EyeDropperLink = "https://developer.mozilla.org/en-US/docs/Web/API/EyeDropper#browser_compatibility";
//@ts-ignore
const picker = new EyeDropper();
document.addEventListener("keyup", (event) => {
    if (event.keyCode == 80) {
        picker
            .open()
            .then((result) => {
            const rgb = result.sRGBHex.replace(",", "").replace("rgb(", "").replace(")", "").replace(",", "");
            const r = Number(rgb.split(" ")[0]);
            const g = Number(rgb.split(" ")[1]);
            const b = Number(rgb.split(" ")[2]);
            console.log(rgbToHex(r, g, b));
            loadColor(rgbToHex(r, g, b));
            link.Change();
        })
            .catch((error) => {
            // console.log(error);
            if (!error.toString().includes("EyeDropper is already open")) {
                notification.Show("<i class='fa-solid fa-eye-dropper'></i>", `Eye Dropper Error`, `Your browser may not support <span class='alertLink'>this feature</span>
        `, `${EyeDropperLink}`, true);
            }
        });
    }
});
