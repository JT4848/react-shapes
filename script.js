const randomColor = () => {
  const letters = `0123456789ABCDEF`
  let color = `#`
  for(let i = 0; i < 6; i++){
    color += letters[Math.floor(Math.random() * 16)]
  }
  return color
}

const App = () => {
  return (
    <>
      <MyCircles />
      <MySquares />
    </>
  )
}

const MyCircles = () => {
return(
  <>
  <div id="circles1" style={{ backgroundColor: randomColor() }}></div>
  <div id="circles2" style={{ backgroundColor: randomColor() }}></div>
  <div id="circles3" style={{ backgroundColor: randomColor() }}></div>
  </>
  )
}

const MySquares = () => {
  return (
    <>
      <div id="squares1" style={{ backgroundColor: randomColor() }}></div>
      <div id="squares2" style={{ backgroundColor: randomColor() }}></div>
      <div id="squares3" style={{ backgroundColor: randomColor() }}></div>
    </>
  )
}

const container = document.querySelector(`#shapes`);
const root = ReactDOM.createRoot(container);
root.render(<App />);