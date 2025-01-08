import confetti from 'canvas-confetti'
import { useQuestionsStore } from '@/store/questions'
import { type Question as QuestionType } from '@/types'

const getBackgroundColor = (data: QuestionType, index: number) => {
  const { userSelectedAnswer, correctAnswer } = data

  if (userSelectedAnswer == null) return 'transparent'

  if (index !== correctAnswer && index !== userSelectedAnswer) return 'transparent'

  if (index === correctAnswer) return '#06D6A0'
  if (index === userSelectedAnswer) return '#EF476F'
}

export function Question({ data }: { data: QuestionType }) {
  const selectAnswer = useQuestionsStore(state => state.selectAnswer)

  const handleAnswerClick = (answerIndex: number) => () => {
    selectAnswer(data.id, answerIndex)

    if (data.correctAnswer === answerIndex) confetti()
  }

  return (
    <div>
      <h2 className='text-xl text-white mb-3'>{data.question}</h2>

      <ul className='flex gap-3'>
        {data.answers.map((answer, index) => (
          <li key={index}>
            <button
              disabled={data.userSelectedAnswer != null}
              onClick={handleAnswerClick(index)}
              className='text-white border border-blue-400 rounded-md px-5 py-3'
            >
              <span>{answer}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  )
}
