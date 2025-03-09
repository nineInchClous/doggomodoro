export default class TimerStep {
  private readonly _isWorkStep: boolean;
  private readonly _stepDuration: number;
  private _timeLeft: number;

  constructor(isWorkSequence: boolean, stepDuration: number) {
    this._isWorkStep = isWorkSequence;
    this._stepDuration = stepDuration;
    this._timeLeft = stepDuration;
  }

  get isWorkStep() {
    return this._isWorkStep;
  }

  get stepDuration() {
    return this._stepDuration;
  }

  get timeLeft() {
    return this._timeLeft;
  }
  set timeLeft(value: number) {
    if (value < 0) {
      this._timeLeft = 0;
      return;
    }

    this._timeLeft = value;
  }
}
