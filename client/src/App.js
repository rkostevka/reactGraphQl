import {
    Container,
    CssBaseline
} from '@mui/material';
import {Navigation} from "./components/navigation";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import { Home } from './pages/home';
import { Settings } from './pages/settings';
import { Recommend } from './pages/recommend';

function App() {


    return (
    <BrowserRouter>
        <CssBaseline />
        <Navigation/>

        <Container maxWidth='lg'>
            <Routes>
                <Route path='/' element={<Home />} />
                <Route path='settings' element={<Settings />} />
                <Route path='recommend' element={<Recommend />} />
            </Routes>
        </Container>

    </BrowserRouter>

  );
}

export default App;
