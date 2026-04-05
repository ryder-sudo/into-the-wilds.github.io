// START LOADING
console.time("timeLoading"); // Start loading timer.

// FUNCTIONS

// Get random item from an array.
function randomItem(arr) {
    let i = Math.random(); // 0 to 1, does not reach 1.
    i = i * arr.length;
    i = Math.floor(i);

    return arr[i];
}

// Returns array generated from a given table
function tableToArray(tab) {
    let rows = tab.rows.length;
    let cols = tab.rows[0].cells.length;

    let arr = [];

    let j;
    for (j = 1; j < rows; j++) {
        arr.push(tab.rows[j].cells[cols - 1].innerText);
        //console.log(tab.rows[j].cells[cols - 1].innerText);
    }

    return arr;
}

// Updates all collapsible's height
function touchCollapsibles() {
    let coll = document.getElementsByClassName("collapsible");
    let i = 0;

    for (i = 0; i < coll.length; i++) {
        let content = coll[i].nextElementSibling.nextElementSibling;
        if (coll[i].classList.contains("active"))
        {
            content.style.maxHeight = content.scrollHeight + "px";
        } else {
            content.style.maxHeight = null;
        }
    }
}

// Initializes events for all collapsibles, separated for compartmentilization
function initCollapsibles() { // from https://www.w3schools.com/howto/howto_js_collapsible.asp
    let coll = document.getElementsByClassName("collapsible"); // gets all elements of a class as an array (?)
    let i = 0;

    for (i = 0; i < coll.length; i++) { // gets the length of the array
        coll[i].addEventListener("click", function() {
            this.classList.toggle("active");
            let content = this.nextElementSibling.nextElementSibling;
            
            // if (content.style.display === "block") {
            // content.style.display = "none";
            // } else {
            // content.style.display = "block";
            // }

            if (content.style.maxHeight){
                content.style.maxHeight = null;
            } else {
                content.style.maxHeight = content.scrollHeight + "px";

                setTimeout(function(){
                    touchCollapsibles();
                },200);
            }
        });
    }
}

// Initializes events for tables, separated for compartmentilization
function initTables() {
    let tab = document.getElementsByClassName("tableButton");
    let tabLength = tab.length;

    let i;
    for (i = 0; i < tabLength; i++) {
        tab[i].addEventListener("click", function() {
            let table = this.nextElementSibling.nextElementSibling;
            let text = this.nextElementSibling;

            let arr = tableToArray(table);
            let item = randomItem(arr);

            text.innerText = item;

            touchCollapsibles();

            //console.log(arr);
            //console.log(item);
        });
    }
}

// Closes all content to do with biomeButtons
function closeAllBiomeContent() {
    let buttons = document.getElementsByClassName("biomeButton");
    let buttonsLength = buttons.length;

    let i;
    for (i = 0; i < buttonsLength; i++) {
        let contents = document.getElementsByClassName(buttons[i].id);
        let contentsLength = contents.length;

        console.log("Closing biome (" + buttons[i].id + ")");

        let j;
        for (j = 0; j < contentsLength; j++) {
            let content = contents[j];
            content.style.maxHeight = null;
        }
    }
}

// Opens all content of the specified biome
function openBiomeContent(biome) {
    let tab = document.getElementsByClassName(biome);
    let tabLength = tab.length;

    console.log("Opening biome (" + biome + ")");

    let i;
    for (i = 0; i < tabLength; i++) {
        let content = tab[i];

        content.style.maxHeight = content.scrollHeight + "px";
    }
}

// Initializes events for biome buttons, separated for compartmentilization
function initBiomes() {
    let tab = document.getElementsByClassName("biomeButton");
    let tabLength = tab.length;

    let i;
    for (i = 0; i < tabLength; i++) {
        console.log("Initializing biomeButton (" + tab[i].id + ")");
        tab[i].addEventListener("click", function() {
            closeAllBiomeContent();

            if (this.id == biome) {
                biome = "none";
            } else {
                biome = this.id;
            }
            openBiomeContent(biome);
            setTimeout(function(){
                touchCollapsibles();
            },200);
        });
    }
    closeAllBiomeContent();
    openBiomeContent(biome);
    setTimeout(function(){
        touchCollapsibles();
    },200);
}

// Initializes the header and footer
function initHeaderFooter() {
    let header = document.getElementById("header");

    header.innerHTML = `<div class="header">
        <div class="headerContainer">
            <div style="flex-grow: 1;">
                <h1 class="title" style="background-color: #151535; border: solid 1px white;"><a href="mainpage.html"><p style="display: inline; font-size: 50px;">Into the Wilds:</p><br>A Compendium for Solo<br>TTRPG Play & Exploration</a></h1> \
            </div>
            <div style="flex-grow:3;">
                <div class="navbar" style="flex-direction: column;">
                    <div style="font-size: 30px;"><a href="travel.html">Travel Rules</a></div>
                    <div style="font-size: 30px;"><a href="soloplay.html">Solo Play</a></div>
                </div>
            </div>
        </div>
    </div>

    <div class="headerSpace"></div>`;

    let footer = document.getElementById("footer");

    footer.innerHTML = `<div class="footer">
        <br>
        <div class="footerContainer">
            <div>
                Website made by <div style="background-color: black; display: inline; color: black;">Hey! No looking!</div>
            </div>
            <div>
                No Generative AI was used in the making of this website.
            </div>
            <div>
                No affiliation with Wizards of the Coast.
                <br>
                I do not claim to own the information provided by this website, it is free for others to use, and proper notation is provided to cite the original creators of any and all content.
            </div>
        </div>
    </div>`;
}

// Initializes events for portent buttons, separated for compartmentilization
function initPortent() {
    let tab = document.getElementsByClassName("portent");
    let tabLength = tab.length;

    let i;
    for (i = 0; i < tabLength; i++) {
        tab[i].addEventListener("click", function() {
            let portentTable = ["squishy",
                "tomato",
                "guard",
                "iron",
                "list",
                "slippery",
                "tasty",
                "speculate",
                "coal",
                "touch",
                "chop",
                "steam",
                "examination",
                "open",
                "item",
                "listen",
                "regard",
                "gold",
                "prove",
                "imposter",
                "interference",
                "mutual",
                "split",
                "surgeon",
                "sentence",
                "spare",
                "water",
                "machinery",
                "pound",
                "dog",
                "continental",
                "seal",
                "shallow",
                "close",
                "deficit",
                "trunk",
                "thin",
                "bread",
                "bold",
                "aviation",
                "physical",
                "researcher",
                "argument",
                "sell",
                "dump",
                "thanks",
                "battery",
                "replace",
                "appreciate",
                "name",
                "prescription",
                "surround",
                "survivor",
                "discriminate",
                "rare",
                "slice",
                "gain",
                "earthquake",
                "contribution",
                "sight",
                "marsh",
                "temptation",
                "soak",
                "episode",
                "program",
                "ridge",
                "real",
                "rifle",
                "salvation",
                "photography",
                "pierce",
                "slow",
                "crude",
                "epicalyx",
                "social",
                "dorm",
                "frequency",
                "lost",
                "force",
                "magnetic",
                "digital",
                "discourage",
                "monster",
                "allow",
                "atmosphere",
                "pension",
                "battlefield",
                "supplementary",
                "sip",
                "color",
                "lunch",
                "hang",
                "reform",
                "nuance",
                "solve",
                "mild",
                "pipe",
                "arise",
                "troop",
                "retirement",
                "particle",
                "news",
                "snake",
                "ball",
                "wizard",
            "end"];

            this.nextElementSibling.innerText = "";

            for (i = 0; i < this.previousElementSibling.value; i++) {
                this.nextElementSibling.innerText = this.nextElementSibling.innerText + " " + randomItem(portentTable);
            }

            touchCollapsibles();
        });
    }
}

// MAIN ROUTINE

console.log("Hello, world!"); // First message.

// Collapsibles
initCollapsibles();

// Tables
initTables();

// Biome Buttons
let biome = "none";
initBiomes();

// Header
initHeaderFooter();

// Portent
initPortent();

// END LOADING
console.timeEnd("timeLoading"); // Display amount of time to fully load.