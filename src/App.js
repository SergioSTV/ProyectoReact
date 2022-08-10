import logo from './logo.svg';
import './App.css';
import NavBar from './components/NavBar/NavBar';
import ItemListContainer from './components/ItemListContainer/ItemListContainer';
import contador from './components/Counter/ItemCount';




function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <NavBar />
        <header className="App-header">
            <Switch>
              <Route path="/item/:id" >
                <ItemDetailContainer />
              </Route>
              <Route path="/category/:name" >
                <ItemListContainer />
              </Route>
              <Route exact path="/">
                <ItemListContainer />
              </Route>
              <Route path="*">
                Comming soon
              </Route>
            </Switch>
        </header>
      </BrowserRouter>
    </div>
  );
}

export default App;
