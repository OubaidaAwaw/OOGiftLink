  // import css files
import './DragImage.css'

  // import dropzone
import Dropzone from 'react-dropzone'

export default function DragImage(props) {
  return (
    <Dropzone onDrop={props.onDrop}>
      {({getRootProps, getInputProps}) => (
        <section>
          <div {...getRootProps()}>
            <input {...getInputProps()} />
            <div className='dragContainer center'>
              {props.imgsrc?
                <img src={URL.createObjectURL(props.imgsrc)} alt='the selected gift'/>
              : <p>Drag drop some files here, or click to select files...</p>
              }
            </div>
          </div>
        </section>
      )}
    </Dropzone>
  )
}
