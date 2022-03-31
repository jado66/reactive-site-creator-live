import Website from "reactive-site-creator/dist/components/Website";

function App() {
  return (
    <Website
      siteName = {"Reactive Site Creator"}
      basename = {"/reactive-site-creator-live"}
      isAdmin = {true}
    />
  );
}

export default App;
