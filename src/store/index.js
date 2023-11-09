import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        level: null,
        questions1: [
            {
              id: 1,
              question: 'What is the name of this symbol?',
              options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
              answer: 0, 
              imageUrl: 'trebleclef.jpg',
            },
            {
              id: 2,
              question: 'What is the name of this symbol?',
              options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
              answer: 1,
              imageUrl: 'bassclef.jpg',
            },
            {
                id: 3,
                question: 'What is the meaning of this symbol?',
                options: ['loud', 'Soft', 'Very Loud', 'Very Soft'],
                answer: 0,
                imageUrl: 'forte.jpg',
            },
            {
                id: 4,
                question: 'What is the meaning of this symbol?',
                options: ['loud', 'Soft', 'Very Loud', 'Very Soft'],
                answer: 1,
                imageUrl: 'piano.jpg',
              },
            
            {
                id: 5,
                question: 'What is the name of this symbol?',
                options: ['Quarter Note', 'Half Note', 'Whole Note', 'Eighth Note'],
                answer: 0,
                imageUrl: 'quarternote.jpg',
            },
            {
                id: 6,
                question: 'What is the name of this symbol?',
                options: ['Quarter Note', 'Half Note', 'Whole Note', 'Eighth Note'],
                answer: 1,
                imageUrl: 'halfnote.jpg',
            },
            {
                id: 7,
                question: 'What is the name of this symbol?',
                options: ['Quarter Note', 'Half Note', 'Whole Note', 'Eighth Note'],
                answer: 2,
                imageUrl: 'wholenote.jpg',
            },
            {
                id: 8,
                question: 'What is the name of this symbol?',
                options: ['Quarter Note', 'Half Note', 'Whole Note', 'Eighth Note'],
                answer: 3,
                imageUrl: 'eighthnote.jpg',
            },
            {
                id: 9,
                question: 'What is the name of this symbol?',
                options: ['Dotted Quarter Note', 'Dotted Half Note', 'Dotted Whole Note', 'Dotted Eighth Note'],
                answer: 0,
                imageUrl: 'dottedquarternote.jpg',
            },
            {
                id: 10,
                question: 'What is the name of this symbol?',
                options: ['Dotted Quarter Note', 'Dotted Half Note', 'Dotted Whole Note', 'Dotted Eighth Note'],
                answer: 1,
                imageUrl: 'dottedhalfnote.jpg',
            },
            
          ],
          questions2: [
            {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['half step lower', 'half step higher', 'cancels previous accidentals', 'loud'],
                answer: 1,
                imageUrl: 'sharp.jpg',
            },
            {
                id: 2,
                question: 'What is the meaning of this symbol?',
                options: ['Smoothly', 'Gradually Getting Louder', 'Gradually Getting Softer', 'Loud'],
                answer: 1,
                imageUrl: 'crescendo.jpg',
            },
            {
                id: 3,
                question: 'What is the name of this symbol?',
                options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
                answer: 2,
                imageUrl: 'altoclef.jpg',
            },
            {
                id: 4,
                question: 'What is the meaning of this symbol?',
                options: ['Smoothly', 'join notes together to create a new duration', 'Gradually Getting Softer', 'Short'],
                answer: 1,
                imageUrl: 'tie.jpg',
            },
            {
                id: 5,
                question: 'What is the meaning of this symbol?',
                options: ['Smoothly', 'Gradually Getting Louder', 'Gradually Getting Softer', 'Loud'],
                answer: 2,
                imageUrl: 'diminuendo.jpg',
            },
            {
                id: 6,
                question: 'What is the name of this symbol?',
                options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
                answer: 3,
                imageUrl: 'tenorclef.jpg',
            },
            {
                id: 7,
                question: 'What is the meaning of this symbol?',
                options: ['half step lower', 'half step higher', 'cancels previous accidentals', 'loud'],
                answer: 0,
                imageUrl: 'flat.jpg',
            },
            {
                id: 8,
                question: 'What is the meaning of this symbol?',
                options: ['Smoothly', 'join notes together to create a new duration', 'Gradually Getting Softer', 'Short'],
                answer: 3,
                imageUrl: 'staccato.jpg',
            },
            {
                id: 9,
                question: 'What is the meaning of this symbol?',
                options: ['Smoothly', 'join notes together to create a new duration', 'Gradually Getting Softer', 'Short'],
                answer: 0,
                imageUrl: 'slur.jpg',
            },
            {
                id: 10,
                question: 'What is the meaning of this symbol?',
                options: ['half step lower', 'half step higher', 'cancels previous accidentals', 'loud'],
                answer: 2,
                imageUrl: 'natural.jpg',
            },
            
        ],
        questions3: [
            {
              id: 1,
              question: 'What is the name of this symbol?',
              options: ['16th notes', '32nd notes', '64th notes','triplets'],
              answer: 0, 
              imageUrl: 'sixteenthnote.jpg',
            },
            {
                id: 1,
                question: 'What is the name of this symbol?',
                options: ['16th notes', '32nd notes', '32nd rest','16th rest'],
                answer: 3, 
                imageUrl: 'sixteenthrest.jpg',
              },
              {
                id: 1,
                question: 'What is the name of this symbol?',
                options: ['8th rest', 'Quarter Rest', 'half rest','whole rest'],
                answer: 1, 
                imageUrl: 'quarterrest.jpg',
              },
              {
                id: 1,
                question: 'What is the name of this symbol?',
                options: ['8th rest', 'Quarter Rest', 'half rest','whole rest'],
                answer: 2, 
                imageUrl: 'halfrest.jpg',
              },
              {
                id: 1,
                question: 'What is the name of this symbol?',
                options: ['8th rest', 'Quarter Rest', 'half rest','whole rest'],
                answer: 3, 
                imageUrl: 'wholerest.jpg',
              },
              {
                id: 1,
                question: 'What is the name of this symbol?',
                options: ['8th rest', 'Quarter Rest', 'half rest','whole rest'],
                answer: 0, 
                imageUrl: 'eighthrest.jpg',
              },
              {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['Hold a note longer than usual', 'Short', 'Loud','Do not play'],
                answer: 0, 
                imageUrl: 'fermata.jpg',
              },
              {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['Soft', 'Moderately Loud', 'Loud','Moderately Soft'],
                answer: 1, 
                imageUrl: 'mezzoforte.jpg',
              },
              {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['Soft', 'Moderately Loud', 'Loud','Moderately Soft'],
                answer: 3, 
                imageUrl: 'mezzopiano.jpg',
              },
              {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['Soft', 'Moderately Loud', 'Very Soft','Very Loud'],
                answer: 2, 
                imageUrl: 'pianissimo.jpg',
              },
              {
                id: 1,
                question: 'What is the meaning of this symbol?',
                options: ['Soft', 'Moderately Loud', 'Very Soft','Very Loud'],
                answer: 3, 
                imageUrl: 'fortessimo.jpg',
              },
        ],
    },
    mutations: {
        
            updateLevel(state, level) {
              state.level = level;
            },

    },
    actions: {},
    modules: {}
  });