import { Cycle } from './reducer'

export enum ActionType {
  CREATE_NEW_CYCLE = 'CREATE_NEW_CYCLE',
  INTERRUPT_CURRENT_CYCLE = 'INTERRUPT_CURRENT_CYCLE',
  MARK_CURRENT_CYCLE_AS_FINISHED = 'MARK_CURRENT_CYCLE_AS_FINISHED',
}

export function addNewCycleAction(newCycle: Cycle) {
  return {
    type: ActionType.CREATE_NEW_CYCLE,
    payload: {
      newCycle,
    },
  }
}
export function interruptCurrentCycleAction() {
  return {
    type: ActionType.INTERRUPT_CURRENT_CYCLE,
  }
}
export function markCurrentCycleAsFinishedAction() {
  return {
    type: ActionType.MARK_CURRENT_CYCLE_AS_FINISHED,
  }
}
