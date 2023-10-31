import LoadingComponent from "./components/Loading";
import Posts from "./pages/Posts";
import { api } from "./services/api";
import { useEffect, useState } from "react";

const signIn = async () => {
  return await api.post(
    "https://realm.mongodb.com/api/client/v2.0/app/data-zozni/auth/providers/local-userpass/login",
    {
      username: process.env.REACT_APP_USERNAME,
      password: process.env.REACT_APP_PASSWORD,
    }
  );
};

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    signIn()
      .then((result) => {
        api.defaults.headers.common["Authorization"] =
          "Bearer " + result.data.access_token;
      })
      .finally(() => setLoading(false));
  }, []);
  return (
    <>
      {loading ? (
        <LoadingComponent />
      ) : (
        <div className="justify-center w-full h-full m-auto">
          <header className="bg-blue-500 h-16">
            <div className="container w-full h-full p-2 m-auto">
              <div className="flex flex-row gap-3 h-full">
                <p className="font-bold text-white my-auto">{"CSR BLOG: "}</p>
                <p className="text-white my-auto">{"a study case with CRA"}</p>
              </div>
            </div>
          </header>
          <div className="container p-2 m-auto">
            <Posts />
          </div>
          <div className="container m-auto p-2">{}</div>
        </div>
      )}
    </>
  );
}

export default App;
