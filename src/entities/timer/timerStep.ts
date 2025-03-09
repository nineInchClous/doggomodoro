export default class TimerStep {
  private readonly _isWorkStep: boolean;
  private readonly _stepDuration: number;
  private _timeLeft: number;

  constructor(isWorkSequence: boolean, stepDuration: number) {
    this._isWorkStep = isWorkSequence;
    this._stepDuration = stepDuration;
    this._timeLeft = stepDuration;
  }

  get isWorkStep(): boolean {
    return this._isWorkStep;
  }

  get stepDuration(): number {
    return this._stepDuration;
  }

  get timeLeft(): number {
    return this._timeLeft;
  }

  isTimeOver(): boolean {
    return this._timeLeft <= 0;
  }

  tick(): void {
    if (this.isTimeOver()) return;
    this._timeLeft--;
  }
}
