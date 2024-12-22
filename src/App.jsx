import { useState } from 'react';
import './App.css';
import Blogs from './Blogs/Blogs';
import Body from './components/Body';
import Cover from './components/Cover';
import Header from './components/Header/Header';
import Wantcooks from './Wantcooks/Wantcooks';

function App() {
  const [wantCooks, setWantCooks] = useState([]);
  const [wantcook, setWantCook] = useState([]);
  const [toastMessage, setToastMessage] = useState(''); 
  const [showToast, setShowToast] = useState(false); 

  const cookAddHandeler = (blog) => {
    const isExist = wantCooks.find(item => item.recipe_id === blog.recipe_id);

    if (isExist) {
      setToastMessage('Already Exist.'); 
      setShowToast(true); 
      setTimeout(() => setShowToast(false), 3000); 
    } else {
      const newWantCooks = [...wantCooks, blog];
      setWantCooks(newWantCooks);
      setWantCook([...wantcook, blog]);
    }
  };

  return (
    <>
      <div className="max-w-7xl mx-auto">
        <Header />
        <Cover />
        <Body />
      </div>
      <div className="flex md:flex-col lg:flex-row flex-col justify-between gap-x-20 max-w-7xl mx-auto space-x-6 space-y-6">
        <Blogs cookAddHandeler={cookAddHandeler} />
        <Wantcooks className="" wantCooks={wantCooks} />
      </div>
      
      {/* Toast notification */}
      {showToast && (
        <div className="toast">
          <div className="alert alert-info">
            <span>{toastMessage}</span>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
