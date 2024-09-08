import "./App.css";
import { Ban } from "lucide-react";
import Alert from "./Componrnts/UI/Alert";

function App() {
  return (
    <div>
      <Alert
        type="alert-default"
        icon={<Ban size={20} />}
        title="Something went wrong"
      >
        <p>
          Lorem ipsum, dolor sit amet consectetur adipisicing elit. Commodi
          nihil <a href="">hello call me 0599</a> culpa eveniet inventore eos
          impedit optio magnam perferendis repellendus dolore.
        </p>
      </Alert>

      <Alert
        type="alert-info"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias
        veritatis ea aliquid eligendi unde sit commodi laborum, nostrum
        adipisci?"
      />

      <Alert
        type="alert-warning"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias
        veritatis ea aliquid eligendi unde sit commodi laborum, nostrum
        adipisci?"
      />

      <Alert
        type="alert-error"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias
        veritatis ea aliquid eligendi unde sit commodi laborum, nostrum
        adipisci?"
      />

      <Alert
        type="alert-success"
        icon={<Ban size={20} />}
        title="Something went wrong"
        description="Lorem ipsum dolor sit amet consectetur adipisicing elit. Natus alias
        veritatis ea aliquid eligendi unde sit commodi laborum, nostrum
        adipisci?"
      />
    </div>
  );
}

export default App;
