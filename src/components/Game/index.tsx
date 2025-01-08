import { useQuestionsStore } from '@/store/questions'

import { Question } from '@/components/Question'

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)

  const questionData = questions[currentQuestion]

  return (
    <>
      <div className='grid gap-3'>
        <button onClick={goPrevQuestion} disabled={currentQuestion === 0}>
          🔙
        </button>
        {currentQuestion + 1} / {questions.length}
        <button onClick={goNextQuestion} disabled={currentQuestion >= questions.length - 1}>
          ⏭️
        </button>
      </div>

      <Question data={questionData} />

      {/* <Footer /> */}
    </>
  )
}
