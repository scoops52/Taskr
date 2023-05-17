import Confetti from "react-confetti"

interface ConfettiProps {
    active: boolean
}

const ConfettiComponent = ( { active }: ConfettiProps) => {
  return active ? <Confetti /> : null
}

export default ConfettiComponent