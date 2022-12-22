import { RouterProvider } from "react-router-dom";
import 'mapbox-gl/dist/mapbox-gl.css';
import { route } from "./layout/route";
import './App.css'

function App() {
  const router=route
  return (
    <div className="max-w-screen-xl mx-auto">
      <RouterProvider router={router}/>
    </div>
  );
}

export default App;
