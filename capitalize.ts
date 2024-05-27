function capitalizeWords(sentence: string): string {
    return sentence.replace(/\b\w/g, (char) => char.toUpperCase())
}
console.log(capitalizeWords("my name is janet anyona"))