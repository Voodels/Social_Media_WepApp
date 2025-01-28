import Header from "./components/common/Header";
import Loading from "./components/common/Loading";
import { BrowserRouter , Routes,Route} from 'react-router-dom';



function App() {
  return (
    <>
      <BrowserRouter>
      <Header/>
        <Routes>
          <Route exact path="/" element={< br/>}/>

          <Route exact path="/c" element={<h1>
            Contacts
          </h1>} />

          <Route exact path="/up" element={<h1>
            User Profile
          </h1>} />

        </Routes>
      </BrowserRouter>
    </>
  )
}

export default App;