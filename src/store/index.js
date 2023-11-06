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
                question: 'What is the name of this symbol?',
                options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
                answer: 2,
                imageUrl: 'altoclef.jpg',
            },
            {
                id: 4,
                question: 'What is the name of this symbol?',
                options: ['Treble Clef', 'Base Clef', 'Alto Clef', 'Tenor Clef'],
                answer: 3,
                imageUrl: 'tenorclef.jpg',
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
    },
    mutations: {
        
            updateLevel(state, level) {
              state.level = level;
            },

    },
    actions: {},
    modules: {}
  });