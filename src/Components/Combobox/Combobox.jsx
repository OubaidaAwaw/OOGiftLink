  // import css files
import './Combobox.css'

export default function Combobox(props) {
  return (
    <div className="comboContainer col gap10">
      <label htmlFor={props.name}>{props.children}</label>
      <select value={props.value} onChange={props.onChange} name={props.name} id={props.name}>
        <option value={props.defaultValue} defaultValue>{props.defaultValue}</option>
        {props.options?.map(op => <option value={op} key={op}>{op}</option>)}
      </select>
    </div>
  )
}
