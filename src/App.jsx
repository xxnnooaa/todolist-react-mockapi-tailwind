// import { useState } from "react";
// import Header from './components/Header'
// import Image from './components/Image'
// import Checkbox from './components/Checkbox'
// import Counter from './components/Counter'
// import Video from './components/Video'
// function App() {
// // การประกาศตัวแปร ต้องอยู่ก่อน return เสมอ
// const todoList = [
//   { text: 'coding react', isChecked: false },
//   { text: 'doing react', isChecked: true },
//   { text: 'test react', isChecked: false }
  
// ]
// const [isPlay, setIsPlaying] = useState(false)
// function buttonPlaying () {
//   setIsPlaying(!isPlay)
// }

//   return (
//       <div>
//       <Header/>
//       <p className="read-the-docs">
//         Hello
//       </p>
//       <Image 
//       imageUrl='https://images.unsplash.com/photo-1725714354934-2977a57f8fd5?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'/>
//       {/* วนลูป */}
//       {
//       todoList.map((todo, index) => (
//           <Checkbox
//           key={index}
//           text={todo.text}
//           isChecked={todo.isChecked}
//           />
//         ))
//       }
//       <Counter/> <br/>
//       <button onClick={buttonPlaying}>{isPlay ? 'Pause' : 'Play'}</button><br/>
//       <Video src="https://interactive-examples.mdn.mozilla.net/media/cc0-videos/flower.mp4" isPlaying={isPlay}/>
//       </div>
//   )
// }

// export default App
import TodoList from './components/TodoList';
import './index.css'
function App() {
  return (
    <TodoList/>
  )
}

export default App;
