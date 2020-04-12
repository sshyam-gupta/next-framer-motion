import { LoremIpsum } from 'lorem-ipsum'
import { startOfYesterday } from 'date-fns'

const lorem = new LoremIpsum({
  sentencesPerParagraph: {
    max: 8,
    min: 4
  },
  wordsPerSentence: {
    max: 16,
    min: 4
  }
});

function generateData (length) {
  return Array.from(Array(length), (x, index) => {
    return {
      "productName": `Product ${index + 1}`,
      "image": "https://source.unsplash.com/random/600x400",
      "desc": lorem.generateSentences(3),
      "likes": Math.round(Math.random() * 10),
      "comments": Array.from(Array(Math.round(Math.random() * 10)), () => {
        return lorem.generateSentences(1)
      }),
      "date": index < length / 3 ? new Date(startOfYesterday()).toISOString() : new Date().toISOString()
    }
  })
}

export default generateData