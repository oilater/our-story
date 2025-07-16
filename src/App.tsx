import { css } from '@emotion/react'
import { useAtom, useSetAtom } from 'jotai'
import { goToNextStepAtom, goToPrevStepAtom, stepAtom } from './atoms/step-atom.ts'
import { FirstStep } from './pages/FirstStep.tsx'
import { SecondStep } from './pages/SecondStep.tsx'
import { ThirdStep } from './pages/ThirdStep.tsx'
import { BottomCTA } from './components/BottomCTA.tsx'
import { Header } from './components/Header.tsx'

export default function App() {
  const [step] = useAtom(stepAtom);
  const goToPrevStep = useSetAtom(goToPrevStepAtom);
  const goToNextStep = useSetAtom(goToNextStepAtom);
  
  return (
    <div css={container}>
      <Header onBack={goToPrevStep} />
      {step === 'First' && <FirstStep />}
      {step === 'Second' && <SecondStep />}
      {step === 'Third' && <ThirdStep />}
      
      <BottomCTA onNext={goToNextStep}>다음</BottomCTA>
    </div>
  )
}

const container = css`
  margin: 0 auto;
  max-width: 650px;
  padding: 20px;
`