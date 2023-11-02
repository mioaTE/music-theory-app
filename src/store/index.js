import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
    state: {
        questions: [
            {
              id: 1,
              question: 'What is the name of this symbol?',
              options: ['Treble Clef', 'Base Clef', 'Quarter Note', 'Quarter Rest'],
              answer: 0, 
              imageUrl: 'pic1.jpg',
            },
            {
              id: 2,
              question: 'What is the name of this symbol?',
              options: ['Base Clef', 'Treble Clef', 'Quarter Note', 'Quarter Rest'],
              answer: 0,
              imageUrl: 'pic2.jpg',
            },
            
          ],
    },
    mutations: {},
    actions: {},
    modules: {}
  });