export const Square = ({ children, isSelected, updateBoard, index}) => {
  const squareClass = `square ${isSelected ? 'is-selected' : ''}`

  const handleClick = () => {
    updateBoard(index)
  }
  return (
    <div onClick={handleClick} className={squareClass}>
      {children}
    </div>
  )
}
