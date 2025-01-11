import { useQuestionsStore } from '@/store/questions'

import { Question } from '@/components/Question'
import { ArrowNext, ArrowPrev } from '@/assets/icons'

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)

  const questionData = questions[currentQuestion]

  return (
    <section className='min-h-dvh flex flex-col justify-center items-center gap-7'>
      <div className='flex items-center gap-3 text-3xl'>
        <button
          className='bg-blue-600 px-4 py-2 rounded-md hover:opacity-85 transition-opacity'
          type='button'
          onClick={goPrevQuestion}
          disabled={currentQuestion === 0}
        >
          <ArrowPrev />
        </button>
        {currentQuestion + 1} / {questions.length}
        <button
          className='bg-blue-600 px-4 py-2 rounded-md hover:opacity-85 transition-opacity'
          type='button'
          onClick={goNextQuestion}
          disabled={currentQuestion >= questions.length - 1}
        >
          <ArrowNext />
        </button>
      </div>

      <Question data={questionData} />

      {/* <Footer /> */}
    </section>
  )
}
