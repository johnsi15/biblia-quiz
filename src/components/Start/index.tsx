'use client'

import { useQuestionsStore } from '@/store/questions'
import { Game } from '../Game'

const LIMIT_QUESTIONS = 10

export function Start() {
  const getQuestions = useQuestionsStore(state => state.getQuestions)
  const questions = useQuestionsStore(state => state.questions)

  console.log({ questions })

  const handleClick = () => {
    getQuestions(LIMIT_QUESTIONS)
  }

  return (
    <>
      {questions.length === 0 && (
        <button onClick={handleClick} className='mt-6 bg-blue-500 text-white font-semibold'>
          ¡Empezar el juego!
        </button>
      )}

      {questions.length > 0 && <Game />}
    </>
  )
}
