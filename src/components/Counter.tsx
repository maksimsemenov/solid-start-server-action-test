import { useCounter } from "~/modules/api/hooks";
import "./Counter.css";

export default function Counter() {
  const {count, setCount} = useCounter();
  return (
    <button class="increment" onClick={() => setCount(count() + 1)}>
      Clicks: {count()}
    </button>
  );
}
