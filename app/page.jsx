import Card from "./components/Card";
import Contador from "./components/Contador";

export default function Home() {
  return (
    <div className="contadores">
      <Card>
        <Contador inicial={0} final={10} />
      </Card>
      <Card>
        <Contador inicial={1} />
      </Card>
      <Card>
        <Contador />
      </Card>
    </div>
  );
}
