import './App.css';
import { useState } from 'react';
import Select from 'react-select';
import Buttons from './components/Buttons'

function App() {
  
  const options = [
    { value: 'default', label: 'Default' },
    { value: 'primary', label: 'Primary' },
    { value: 'secondary', label: 'Secondary' },
    { value: 'danger', label: 'Danger' }
  ];
  const [selectedOption, setSelectedOption] = useState('default')

  const handleOnChange = ({value}) =>{
    setSelectedOption(value);
  }
  return (

    <>
      <main>
        <h1>Buttons</h1>
        <section className='row'>
          <div className='container'>
            <label htmlFor="">Color </label>
            <Select options={options} onChange={handleOnChange}/>
            <div className='btnContainer'>
              <div className='col1'>
               <Buttons color={selectedOption} textCode='<Button />'/>
              </div>
              <div className='col2'>
               <Buttons variant='outline' color={selectedOption} textCode='<Button variant=”outline” />'/>
              </div>

              <div className='col2'>
                <Buttons variant='text' color={selectedOption} textCode='<Button variant=”text” />'/>
              </div>
            </div>
          </div>

          <div className='container'>
            
            <div className='btnContainer'>
              <div className='col1'>
              <Buttons color={selectedOption} size='sm' textCode='<Button size=”sm” />'/>
              </div>

              <div className='col1'>
              <Buttons color={selectedOption} size='md' textCode='<Button size=”md” />'/>
              </div>

              <div className='col1'>
                <Buttons color={selectedOption} size='lg' textCode='<Button size=”lg” />'/>
              </div>
            </div>
          </div>
            
          <div className='container'>
            
            <div className='btnContainer'>
              <div className='col3'>
              <Buttons color={selectedOption} startIcon='fa-solid fa-cart-plus' textCode='<Button startIcon=”Icon_Name” />' />
              </div>

              <div className='col3'>
              <Buttons color={selectedOption} endIcon='fa-solid fa-cart-plus' textCode='<Button endIcon=”Icon_Name” />'/>
              </div>

            </div>
          </div>

          <div className='container'>
            
            <div className='btnContainer'>
              <div className='col3'>
              <Buttons variant='outline' color={selectedOption} size='lg' disable='true' startIcon='fa-solid fa-cart-plus' textCode='<Button variant="outline" size="lg" disable startIcon=”Icon_Name” />' />
              </div>

              <div className='col3'>
              <Buttons variant='text' color={selectedOption} size='sm' disable='true' startIcon='fa-solid fa-cart-plus' textCode='<Button variant="text" size="sm" disable startIcon=”Icon_Name” />' />
              </div>

            </div>
          </div>

        </section>
      </main>

      <footer>
        <p className='textCenter'>created by <span>JosephPL</span> - devChallenges.io</p>
      </footer>
 
    </>
   
    
  );
}


export default App;
