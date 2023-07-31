const comments = {
    damage: [
      "What a great punch!",
      "He's hitting hard!",
      "That was a strong one!",
      "He's on fire!",
      "Awesome power!"
    ],
    defense: [
      "Impressive defense!",
      "He's blocking everything!",
      "Well done on the defense!",
      "Keep it up!",
      "Great reflexes!"
    ]
};

export const useComments = (valDamage) => {
    const arrayComments = valDamage === 0 ? comments.defense : comments.damage
    const randomIndex = Math.floor(Math.random() * arrayComments.length)
    return arrayComments[randomIndex]
}