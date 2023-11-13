type InputProps = {
    value:string;
    handleChange:(event:React.ChangeEvent<HTMLInputElement>) => void;
}

const Input = ({value , handleChange}: InputProps) => {

    // const handleChange = (event:React.ChangeEvent<HTMLInputElement>) => {
    //     console.log(event.target.value)
    // }

  return (
    <input style={{margin:"0 10px"}} type="text" value={value} onChange={handleChange}/>
  )
}

export default Input