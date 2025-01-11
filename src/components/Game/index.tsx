import { Question } from '@/components/Question'
import { useQuestionsStore } from '@/store/questions'
import { useQuestionData } from '@/hooks/useQuestionsData'
import { ArrowNext, ArrowPrev, Success } from '@/assets/icons'
import Wrong from '@/assets/icons/Wrong'
import Unanswered from '@/assets/icons/Unanswered'

export function Game() {
  const questions = useQuestionsStore(state => state.questions)
  const currentQuestion = useQuestionsStore(state => state.currentQuestion)

  const { correct, incorrect, unanswered } = useQuestionData()

  const goNextQuestion = useQuestionsStore(state => state.goNextQuestion)
  const goPrevQuestion = useQuestionsStore(state => state.goPrevQuestion)

  const questionData = questions[currentQuestion]

  return (
    <section className='min-h-screen flex flex-col justify-center items-center gap-7'>
      <ul className='flex gap-8 items-center justify-center'>
        <li className='flex gap-2 items-center text-green-500'>
          <Success />
          <span>{correct}</span>
        </li>
        <li className='flex gap-2 items-center text-red-500'>
          <Wrong />
          <span>{incorrect}</span>
        </li>
        <li className='flex gap-2 items-center text-blue-500'>
          <Unanswered />
          <span>{unanswered}</span>
        </li>
      </ul>
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
