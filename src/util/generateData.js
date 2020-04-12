import { LoremIpsum } from "lorem-ipsum";
import { startOfYesterday } from "date-fns";

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

function generateData(length) {
  return Array.from(Array(length), (x, index) => {
    const id = index + 1;
    return {
      id: id,
      name: `Product ${id}`,
      image: `https://i.picsum.photos/id/${id * 10}/600/400.jpg`,
      desc: lorem.generateSentences(3),
      likes: Math.round(Math.random() * 10),
      comments: Array.from(Array(Math.round(Math.random())), () => {
        return lorem.generateWords(10);
      }).slice(0, 3),
      date:
        index < length / 3
          ? new Date(startOfYesterday()).toISOString()
          : new Date().toISOString()
    };
  });
}

export function getData(id) {
  return {
    id: id,
    name: `Product ${id}`,
    image: `https://i.picsum.photos/id/${id * 10}/600/400.jpg`,
    desc: lorem.generateSentences(3),
    likes: Math.round(Math.random() * 10),
    comments: Array.from(Array(Math.round(Math.random())), () => {
      return lorem.generateWords(10);
    }).slice(0, 3),
    date: new Date().toISOString()
  };
}

export default generateData;
