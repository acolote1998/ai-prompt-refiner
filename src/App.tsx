import { getApiKeyByUserId } from "./supabaseCalls/useSupabase";
function App() {
  return (
    <>
      <div className="flex items-center justify-center text-center">
        <h1 className="font-bold text-3xl">Prompt Refiner</h1>
        <p
          onClick={() => {
            getApiKeyByUserId("1");
          }}
        >
          Test Me
        </p>
      </div>
    </>
  );
}

export default App;
