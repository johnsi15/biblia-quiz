import { create } from 'zustand'
import { persist } from 'zustand/middleware'
import { getAllQuestions } from '../services/questions'
import { type Question } from '@/types'

interface State {
  questions: Question[]
  currentQuestion: number
  getQuestions: (limit: number) => Promise<void>
  selectAnswer: (questionId: number, answerIndex: number) => void
  goNextQuestion: () => void
  goPrevQuestion: () => void
  reset: () => void
}

export const useQuestionsStore = create<State>()(
  persist(
    (set, get) => ({
      questions: [], // initial state questions
      currentQuestion: 0,

      getQuestions: async limit => {
        const data = await getAllQuestions()

        const questions = data.sort(() => Math.random() - 0.5).slice(0, limit)
        set({ questions }) // question is ⬆ initial state
      },

      selectAnswer: (questionId, answerIndex) => {
        const { questions } = get()

        const questionIndex = questions.findIndex(q => q.id === questionId)

        if (questionIndex === -1) return

        const questionData = questions[questionIndex]

        const isCorrectUserAnswer = questionData.correctAnswer === answerIndex

        const updatedQuestion = {
          ...questionData,
          userSelectedAnswer: answerIndex,
          isCorrectUserAnswer,
        }

        const newQuestions = [
          ...questions.slice(0, questionIndex),
          updatedQuestion,
          ...questions.slice(questionIndex + 1),
        ]

        set({ questions: newQuestions })
      },

      goNextQuestion: () => {
        const { currentQuestion, questions } = get()
        const nextQuestion = currentQuestion + 1

        console.log({ nextQuestion, length: questions.length })

        if (nextQuestion < questions.length) {
          set({ currentQuestion: nextQuestion })
        }
      },

      goPrevQuestion: () => {
        const { currentQuestion } = get()
        const previousQuestion = currentQuestion - 1

        if (previousQuestion >= 0) {
          set({ currentQuestion: previousQuestion })
        }
      },

      reset: () => {
        set({ currentQuestion: 0, questions: [] })
      },
    }),
    {
      name: 'questions-storage',
    }
  )
)
