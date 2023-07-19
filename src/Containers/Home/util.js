

export const patientQueue = (setActivePa) => {
     setActivePa([])
}

export const activePaShow = (setActivePa,activePa1, activePa ) => {
  setActivePa([...activePa, activePa1])
}
