import React from 'react'
import Layout from './components/Layout/Layout'
import BurgerBuilder from './containers/BurgerBuilder/BurgerBuilder'
import Aux from './hoc/Auxi'
const App= () =>{
  return (
    <Aux>
      <Layout>
        <BurgerBuilder/>
      </Layout>
    </Aux>
  );
}

export default App;
