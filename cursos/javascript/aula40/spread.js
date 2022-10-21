const Original = {
    nome: "Vitor",
    idade: 18,
    sonho: "Rico",
    redes: {
        github: "Testa ai bobao",
        linkedin: "Linkedin.com/tazmania"
    }
}

console.log(Original)

const CopiaDeep = structuredClone(Original)
CopiaDeep.redes.github = "Ve se foi"
console.log(CopiaDeep)

