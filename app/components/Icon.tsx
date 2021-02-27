type Props = {
  icon?: string
}

const Icon: React.FC<Props> = ({ icon }) => {
  if (icon) {
    return (
      <span className="material-icons inline-flex align-middle ">{icon}</span>
    )
  } else {
    return <span />
  }
}

export default Icon
