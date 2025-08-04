import {
  getApiKeyByUserId,
  updateApiKeyByUserId,
} from "./supabaseCalls/useSupabase";
function App() {
  return (
    <>
      <div className="flex flex-col items-center justify-center text-center">
        <h1 className="font-bold text-3xl">Prompt Refiner</h1>
        <p
          onClick={() => {
            getApiKeyByUserId("1");
          }}
        >
          GET KEY
        </p>
        <p
          onClick={() => {
            updateApiKeyByUserId("1", "newkeypapi");
          }}
        >
          UPDATE KEY
        </p>
      </div>
    </>
  );
}

export default App;
