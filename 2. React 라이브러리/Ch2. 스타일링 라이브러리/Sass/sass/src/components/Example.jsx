import './Example.scss'

export default function Example() {
  return (
    <div>
      <p>Example</p>
      <p className='font'>font</p>
      <nav>
        <ul>
          <li>nav li</li>
          <li>
            <a>nav a</a>
          </li>
        </ul>
      </nav>
      <p className='base'>base</p>
      <p className='inverse'>inverse</p>
      <p className='info'>info</p>
      <p className='alert'>alert</p>
      <p className='success'>success</p>
      <p className='message'>message</p>
      <p className='good'>good</p>
      <p className='error'>error</p>
      <p className='warning'>warning</p>
      <div className='square-av'>square-av</div>
      <div className='circle-av'>circle-av</div>
      <div className='sidebar'>sidebar</div>
      <div className='makingError'>makingError</div>
      <div className='gray'>gray</div>
      <div className='button'>button</div>
      <div className='pulse'>pulse</div>
    </div>
  )
}
