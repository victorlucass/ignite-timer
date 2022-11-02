import { differenceInSeconds } from 'date-fns'
import { useContext, useEffect } from 'react'
import { CyclesContext } from '../../../../contexts/CyclesContextProvider'
import { CountdownContainer, Separator } from './styled'

export function Countdown() {
  const {
    activeCycle,
    activeCycleId,
    amountSecondsPassed,
    setSecondsPassed,
    markCurrentCycleAsFinished,
  } = useContext(CyclesContext)
  const minutesAmountTotalSeconds = activeCycle
    ? activeCycle.minutesAmount * 60
    : 0
  const currentSeconds = activeCycle
    ? minutesAmountTotalSeconds - amountSecondsPassed
    : 0
  const minutesAmount = Math.floor(currentSeconds / 60) // arredonda para o menor valor
  const secondsAmount = currentSeconds % 60 // O que ainda tem de segundos
  const minutes = String(minutesAmount).padStart(2, '0') // Menor que 2 caracteres ele adiciona o '0'
  const seconds = String(secondsAmount).padStart(2, '0') // Menor que 2 caracteres ele adiciona o '0'

  useEffect(() => {
    if (activeCycle) {
      document.title = `${minutes}:${seconds}`
    }
  }, [minutes, seconds, activeCycle])

  useEffect(() => {
    let interval: number
    if (activeCycle) {
      interval = setInterval(() => {
        const secondsDifference = differenceInSeconds(
          new Date(),
          new Date(activeCycle.startDate),
        )
        if (secondsDifference >= minutesAmountTotalSeconds) {
          markCurrentCycleAsFinished()
          setSecondsPassed(minutesAmountTotalSeconds)
          clearInterval(interval)
        } else {
          setSecondsPassed(secondsDifference)
        }
      }, 1000)
    }

    return () => {
      // o return serve para executar quando um effect anterior finaliza, ou seja, "limpa quando acabar o outro effect"
      clearInterval(interval)
    }
  }, [
    activeCycle,
    activeCycleId,
    minutesAmountTotalSeconds,
    markCurrentCycleAsFinished,
    setSecondsPassed,
  ])
  return (
    <CountdownContainer>
      <span>{minutes[0]}</span>
      <span>{minutes[1]}</span>
      <Separator>:</Separator>
      <span>{seconds[0]}</span>
      <span>{seconds[1]}</span>
    </CountdownContainer>
  )
}
