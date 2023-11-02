import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [
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
          ],
    },
    mutations: {},
    actions: {},
    modules: {}
  });