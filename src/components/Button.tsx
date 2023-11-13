type ButtonProps = {
    handleClick:(event:React.MouseEvent<HTMLButtonElement> , id:number) => void
}

const Button = ({handleClick}: ButtonProps) => {
  return (
    <button style={{backgroundColor:"yellow",marginTop:"5px"}} onClick={(event) => handleClick(event,1)}>Click</button>
  )
}

export default Button