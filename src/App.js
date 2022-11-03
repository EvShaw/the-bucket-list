import './App.css';
import data from './data'
import Header from './components/Header'
import Footer from './components/Footer'
import Location from './components/Location'


function App() {
  const locations = data.map(item => {
    return (
      <Location
        key={item.id}
        {...item}
      />
    )
  })

  return (
    <div className="App">
      <Header />
      <section className="location--list">
        {locations}
      </section>

      <Footer />
    </div>
  );
}

export default App;

