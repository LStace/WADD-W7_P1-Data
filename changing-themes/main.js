let radioButtonSet = document.getElementsByName("theme-button");

radioButtonSet.forEach((element) => {
    element.addEventListener("click", changeTheme);
})

let theme1 = {
    background: "#FFFFFF",
    bodyColour: "#000000",
    headColour: "#000000",
    bodyFont: "Times",
    headFont: "Times",
}

let theme2 = {
    background: "#F0F5F2",
    bodyColour: "#806A70",
    headColour: "#F4ACB7",
    bodyFont: "Arial",
    headFont: "Times New Roman",
}

let theme3 = {
    background: "#343154",
    bodyColour: "#464035",
    headColour: "#A061EA",
    bodyFont: "Comic Sans MS",
    headFont: "Segoe Print",
}

let theme4 = {
    background: "#000000",
    bodyColour: "#FFFFFF",
    headColour: "#FFFFFF",
    bodyFont: "Webdings",
    headFont: "Webdings",
}

function changeTheme(event){
    console.log(event);
    let themeValue = event.srcElement.value;
    let newTheme;

    switch (themeValue){
        case ("theme1"):
            newTheme = theme1;
            break;
        
        case ("theme2"):
            newTheme = theme2
            break;
        
        case ("theme3"):
            newTheme = theme3
            break;
        
        case ("theme4"):
            newTheme = theme4
            break;
        
        default:
            break;
        
    }


    document.body.style.background = newTheme.background;

    let paras = document.body.getElementsByTagName("p")
    let heads = document.body.getElementsByTagName("h1")

    for (let p of paras){
        p.style.color = newTheme.bodyColour;
        p.style.fontFamily = newTheme.bodyFont;
    }

    for (let h of heads){
        h.style.color = newTheme.headColour;
        h.style.fontFamily = newTheme.headFont;
    }
}