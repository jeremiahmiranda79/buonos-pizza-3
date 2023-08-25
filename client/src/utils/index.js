export const capitalize = (text) => 
text[0].toUpperCase() + text.substring(1).toLowerCase();

export const formatProjectTitle = (text) => {
    const words = text.split('-');
    const capitalizedWords = words.map((word) => capitalize(word));
    return capitalizedWords.join(' ');
}