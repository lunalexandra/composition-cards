import { Card } from './components/Card/Card'
import img from "./assets/img/img1.jpg"
import './App.css'

function App() {

return (
  <>
      <Card
      key="id1"
        title="Card title"
        content="Some quick example text to build on the card title and make up the bulk of the card's content.">
        <img src={img} className="card-img-top" alt="..." />
      </Card>,

      <Card
      key="id2"
        title="Card titleSpecial title treatment"
        content="With supporting text below as a natural lead-in to additional content.">
      </Card>
  </>
);
}

export default App
