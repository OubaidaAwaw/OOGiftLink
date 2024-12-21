  // import css files
import './InputContainer.css'

export default function InputContainer(props) {
  return (
    <div className="inputContainer col gap10">
      <label htmlFor={props.name}>{props.children}</label>
      <input pattern={props.pattern} placeholder='typing...' value={props.value} onChange={props.onChange} type={props.type} name={props.name} id={props.name} />
    </div>
  )
}
