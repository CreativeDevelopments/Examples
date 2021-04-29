import colour from "cdcolours";

console.log(
    colour("Hello World!", {
        textColour: "green",
        backgroundColour: "cyan"
    })
);

console.log(
    colour("Hello World!", {
        textColour: "green",
        backgroundColour: "cyan"
    }) 
    + " How are you?"
);

console.log(
    colour("Hello World!", {
        textColour: "green",
        backgroundColour: "cyan"
    })
    + colour(" How are you?", {
        textColour: "cyan"
    })
);