
export const useColor = (color) => {
    let userColor = "#ffffff";

    if(color <= 60 && color >= 52){
        userColor = "#7f0da9"
    }if (color <= 51 && color >= 42) {
        userColor = "#1799d1"
    }if (color <= 41 && color >= 32) {
        userColor = "#40d117"
    }if (color <= 31 && color >= 22) {
        userColor = "#fbef13"
    }if (color <= 21 && color >= 12) {
        userColor = "#fb8413"
    }if (color <= 11 && color >= 0) {
        userColor = "#fb1313"
    }
    return userColor;
}