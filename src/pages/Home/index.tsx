import { Play } from 'phosphor-react'
import {
  CountdownContainer,
  FormContainer,
  HomeContainer,
  MinutesAmountInput,
  Separator,
  StartCountdownButton,
  TaskInput,
} from './styles'

import { useForm } from 'react-hook-form'
import { zodResolver } from '@hookform/resolvers/zod'
import * as zod from 'zod'
import { useState } from 'react'

const newCycleFormValidationSchema = zod.object({
  task: zod.string().min(1, 'Informe a tarefa'),
  minutesAmount: zod
    .number()
    .min(5, 'texto de erro min(5)')
    .max(60, 'texto de erro max(60)'),
})

type NewCycleFormData = zod.infer<typeof newCycleFormValidationSchema>
interface Cycle {
  id: string
  data: NewCycleFormData
}

export function Home() {
  const { register, handleSubmit, watch, reset } = useForm<NewCycleFormData>({
    resolver: zodResolver(newCycleFormValidationSchema),
    defaultValues: {
      task: '',
      minutesAmount: 0,
    },
  })
  const [cycles, setCycles] = useState<Cycle[]>([])
  const [activeCycleId, setActiveCycleId] = useState<string | null>(null)
  const [amountSecondsPassed, setAmountSecondsPassed] = useState(0) // segundos que se passaram

  const activeCycle = cycles.find((cycle) => cycle.id === activeCycleId)
  const task = watch('task')
  const isSubmitDisabled = !task
  const minutesAmountTotalSeconds = activeCycle
    ? activeCycle.data.minutesAmount * 60
    : 0
  const currentSeconds = activeCycle
    ? minutesAmountTotalSeconds - amountSecondsPassed
    : 0
  const minutesAmount = Math.floor(currentSeconds / 60) // arredonda para o menor valor
  const secondsAmount = currentSeconds % 60 // O que ainda tem de segundos

  const minutes = String(minutesAmount).padStart(2, '0') // Menor que 2 caracteres ele adiciona o '0'
  const seconds = String(secondsAmount).padStart(2, '0') // Menor que 2 caracteres ele adiciona o '0'

  function handleCreateNewCycle(data: NewCycleFormData) {
    const newCycle: Cycle = {
      id: String(new Date().getTime()),
      data,
    }
    setCycles((state) => [...state, newCycle])
    setActiveCycleId(newCycle.id)
    reset()
  }
  return (
    <HomeContainer>
      <form onSubmit={handleSubmit(handleCreateNewCycle)} autoComplete="off">
        <FormContainer>
          <label htmlFor="task">Vou trabalhar em</label>
          <TaskInput
            type="text"
            id="task"
            placeholder="Dê um nome para seu projeto"
            list="task-suggestions"
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
            min={5}
            // max={60}
            {...register('minutesAmount', { valueAsNumber: true })}
          />
          <span>minutos.</span>
        </FormContainer>

        <CountdownContainer>
          <span>{minutes[0]}</span>
          <span>{minutes[1]}</span>
          <Separator>:</Separator>
          <span>{seconds[0]}</span>
          <span>{seconds[1]}</span>
        </CountdownContainer>

        <StartCountdownButton type="submit" disabled={isSubmitDisabled}>
          <Play />
          começar
        </StartCountdownButton>
      </form>
    </HomeContainer>
  )
}
