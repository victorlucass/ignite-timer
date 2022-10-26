import { useFormContext } from 'react-hook-form'
import { FormContainer, MinutesAmountInput, TaskInput } from './styled'
import { useContext } from 'react'
import { CyclesContext } from '../..'

export function NewCycleForm() {
  const { activeCycle } = useContext(CyclesContext)
  const { register } = useFormContext()

  return (
    <FormContainer>
      <label htmlFor="task">Vou trabalhar em</label>
      <TaskInput
        type="text"
        id="task"
        placeholder="Dê um nome para seu projeto"
        list="task-suggestions"
        disabled={!!activeCycle}
        {...register('task')}
      />
      <datalist id="task-suggestions">
        <option value="value 1"></option>
        <option value="value 1"></option>
        <option value="value 1"></option>
        <option value="value 1"></option>
      </datalist>
      <label htmlFor="minutesAmount">durante</label>
      <MinutesAmountInput
        type="number"
        id="minutesAmount"
        placeholder="00"
        step={5}
        min={1}
        max={60}
        disabled={!!activeCycle} // '!!' quer dizer => se tiver um valor converte para true senão para false
        {...register('minutesAmount', { valueAsNumber: true })}
      />
      <span>minutos.</span>
    </FormContainer>
  )
}
