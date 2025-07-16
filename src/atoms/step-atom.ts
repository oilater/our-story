import { atom } from "jotai";
import { type Step } from "../types";

export const stepAtom = atom<Step>('First');

export const goToNextStepAtom = atom(
  null,
  (get, set) => {
    const currentStep = get(stepAtom);

    switch (currentStep) {
      case 'First':
        set(stepAtom, 'Second');
        break;
      case 'Second':
        set(stepAtom, 'Third');
        break;
      case 'Third':
        break;
    }
  }
);

export const goToPrevStepAtom = atom(
  null,
  (get, set) => {
    const currentStep = get(stepAtom);

    switch (currentStep) {
      case 'Second':
        set(stepAtom, 'First');
        break;
      case 'Third':
        set(stepAtom, 'Second');
        break;
      case 'First':
        break;
    }
  }
);