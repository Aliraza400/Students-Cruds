const printStarPattern = () => {
    const blocks = [
        [1, 2],
        [1, 2],
        [3, 2, 3],
        [2, 1, 2]
    ]

    for (const block of blocks) {
        for (const stars of block) {
            console.log("*".repeat(stars))
        }
    }
}

printStarPattern()