import useStore from "./store/useStore";
import CreateGroup from "./screens/CreateGroup";
import AddExpense from "./screens/AddExpense";

function App() {
  const { screen } = useStore();

  return (
    <>
      {screen === "create" && <CreateGroup />}
      {screen === "expense" && <AddExpense />}
    </>
  );
}

export default App;