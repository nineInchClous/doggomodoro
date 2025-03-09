import TimerStep from '@/entities/timer/timerStep';

export default class TimerSequence {
  private readonly _workStepDuration: number;
  private readonly _pauseStepDuration: number;
  private readonly _timerSteps: TimerStep[];

  constructor(workStepDuration: number, pauseStepDuration: number) {
    this._workStepDuration = workStepDuration;
    this._pauseStepDuration = pauseStepDuration;

    const workStep = new TimerStep(true, this._workStepDuration);
    const pauseStep = new TimerStep(false, this._pauseStepDuration);
    this._timerSteps = [workStep, pauseStep];
  }

  get workStep(): TimerStep {
    return this._timerSteps[0];
  }

  get pauseStep(): TimerStep {
    return this._timerSteps[1];
  }

  get currentStep(): TimerStep {
    if (!this.isWorkStepOver()) return this.workStep;
    return this.pauseStep;
  }

  isWorkStepOver(): boolean {
    return this._timerSteps[0].isTimeOver();
  }

  isPauseStepOver(): boolean {
    return this._timerSteps[1].isTimeOver();
  }
}
