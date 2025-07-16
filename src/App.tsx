import { css } from '@emotion/react'
import { useAtom, useSetAtom } from 'jotai'
import { goToNextStepAtom, goToPrevStepAtom, stepAtom } from './atoms/step-atom.ts'
import { resetUserInfoAtom } from './atoms/user-info-atom.ts'
import { FirstStep } from './pages/FirstStep.tsx'
import { SecondStep } from './pages/SecondStep.tsx'
import { ThirdStep } from './pages/ThirdStep.tsx'
import { BottomCTA } from './components/BottomCTA.tsx'
import { Header } from './components/Header.tsx'
import { type Step } from './types.ts'
import { CompletePage } from './pages/CompletePage.tsx'

export const FORM_IDS: Record<Step, string> = {
  First: 'first-step-form',
  Second: 'second-step-form',
  Third: '',
  Complete: '',
} as const;

const emptyFunction = () => {};

export default function App() {
  const [step] = useAtom(stepAtom);
  const goToPrevStep = useSetAtom(goToPrevStepAtom);
  const goToNextStep = useSetAtom(goToNextStepAtom);
  const resetUserInfo = useSetAtom(resetUserInfoAtom);
  const FORM_ID = FORM_IDS[step];
  console.log(FORM_ID);
  

  const StepStatus = {
    isFirst: step === 'First',
    isSecond: step === 'Second',
    isThird: step === 'Third',
    isComplete: step === 'Complete',
  } as const;

  const bottomCTAText = StepStatus.isComplete ? '처음으로' : StepStatus.isThird ? '완료' : '다음';

  return (
    <div css={container}>
      {!StepStatus.isFirst && <Header onBack={goToPrevStep} />}

      {StepStatus.isFirst && <FirstStep onSubmit={goToNextStep} />}
      {StepStatus.isSecond && <SecondStep onSubmit={goToNextStep} />}
      {StepStatus.isThird && <ThirdStep />}
      {StepStatus.isComplete && <CompletePage />}
      
      <BottomCTA 
        formId={FORM_ID}
        onComplete={
          StepStatus.isThird ? goToNextStep : 
          StepStatus.isComplete ? () => {
            resetUserInfo();
            goToPrevStep();
        } : emptyFunction
        }
        type={StepStatus.isThird || StepStatus.isComplete ? "button" : "submit"} 
      >
        {bottomCTAText}
      </BottomCTA>
    </div>
  )
}

const container = css`
  margin: 0 auto;
  max-width: 550px;
  padding: 20px;
`