import { css } from '@emotion/react'
import { useAtom, useSetAtom } from 'jotai'
import { goToNextStepAtom, goToPrevStepAtom, stepAtom } from './atoms/step-atom.ts'
import { FirstStep } from './pages/FirstStep.tsx'
import { SecondStep } from './pages/SecondStep.tsx'
import { ThirdStep } from './pages/ThirdStep.tsx'
import { BottomCTA } from './components/BottomCTA.tsx'
import { Header } from './components/Header.tsx'
import { type Step } from './types.ts'

export const FORM_IDS: Record<Step, string> = {
  First: 'first-step-form',
  Second: 'second-step-form',
  Third: '',
} as const;

export default function App() {
  const [step] = useAtom(stepAtom);
  const goToPrevStep = useSetAtom(goToPrevStepAtom);
  const goToNextStep = useSetAtom(goToNextStepAtom);
  const FORM_ID = FORM_IDS[step];
  
  return (
    <div css={container}>
      {step !== 'First' && <Header onBack={goToPrevStep} />}

      {step === 'First' && <FirstStep onSubmit={goToNextStep} />}
      {step === 'Second' && <SecondStep onSubmit={goToNextStep} />}
      {step === 'Third' && <ThirdStep />}
      
      <BottomCTA formId={FORM_ID}>
        {step !== 'Third' ? '다음' : '완료'}
      </BottomCTA>
    </div>
  )
}

const container = css`
  margin: 0 auto;
  max-width: 550px;
  padding: 20px;
`