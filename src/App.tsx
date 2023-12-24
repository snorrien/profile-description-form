import styles from './App.module.css';
import Enter from './Enter/Enter';
import Form from './Form/Form';
import { BrowserRouter, Routes, Route} from 'react-router-dom';

function App() {
  return (
    <div className={styles.app}>
      <div className={styles.wrapper}>
        <BrowserRouter>
          <Routes >
            <Route path='/' element={<Enter />} />
            <Route path='/form' element={<Form/>} />
          </Routes>
        </BrowserRouter>
      </div>
    </div>
  );
}

export default App;
