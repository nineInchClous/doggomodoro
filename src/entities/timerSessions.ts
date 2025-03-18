export default class TimerSessions {
  private readonly _sequences: number[];
  private _currentSessionIndex: number;

  constructor(sequences: number[]) {
    this._sequences = sequences;
    this._currentSessionIndex = 0;
  }

  get currentSession() {
    return this._sequences[this._currentSessionIndex] * 60;
  }

  get currentSessionIndex() {
    return Math.ceil((this._currentSessionIndex + 1) / 2);
  }

  get sessionCount() {
    return this._sequences.length / 2;
  }

  get isWorkSession() {
    return this._currentSessionIndex % 2 === 0;
  }

  goToNextSession() {
    if (this._currentSessionIndex < this._sequences.length - 1) this._currentSessionIndex++;
  }

  resetSessions() {
    this._currentSessionIndex = 0;
  }

  areAllSessionsOver() {
    return this._currentSessionIndex === this._sequences.length - 1;
  }
}
