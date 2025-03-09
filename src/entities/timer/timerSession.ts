﻿import TimerSequence from '@/entities/timer/timerSequence';

export default class TimerSession {
  private readonly _sequenceCount: number;
  private readonly _workSequenceDuration: number;
  private readonly _shortPauseSequenceDuration: number;
  private readonly _longPauseSequenceDuration: number;
  private _currentSequenceIndex: number;
  private readonly _sequences: TimerSequence[];

  constructor(
    sequenceCount: number = 4,
    workSequenceDuration: number = 25,
    shortPauseSequenceDuration: number = 5,
    longPauseSequenceDuration: number = 15
  ) {
    this._sequenceCount = sequenceCount;
    this._workSequenceDuration = workSequenceDuration;
    this._shortPauseSequenceDuration = shortPauseSequenceDuration;
    this._longPauseSequenceDuration = longPauseSequenceDuration;

    this._sequences = [] as TimerSequence[];
    for (let i = 0; i < this._sequenceCount - 1; i++) {
      this._sequences.push(new TimerSequence(this._workSequenceDuration, this._shortPauseSequenceDuration));
    }
    this._sequences.push(new TimerSequence(this._workSequenceDuration, this._longPauseSequenceDuration));

    this._currentSequenceIndex = 0;
  }

  get currentSequence() {
    return this._sequences[this._currentSequenceIndex];
  }

  isLastSequence() {
    return this._currentSequenceIndex === this._sequenceCount - 1;
  }

  goToNextSequence() {
    if (this.isLastSequence()) return;
    this._currentSequenceIndex++;
  }
}
