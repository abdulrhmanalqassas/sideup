import './App.css';
import styled from 'styled-components';
import { SideNave } from './main/SideNav';
import { Nav } from './main/Nav';
import { Dash } from './Dash/Dash';

const items = [{name:"alqassas"},{name:"hameed"},{name:"alqassas"},{name:"hameed"},{name:"alqassas"},{name:"hameed"}]

// const Layout = styled.div`
// display: flex;
// height:100%;

// `
const Pane = styled.div`
background: #FFF;
height: 100%;
width: 229px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
padding-top: 20px;
`;
const Main = styled.div`
margin-left: 260px; 
font-size: 28px; 
padding: 0px 10px;
`
function App() {
  return (
   <>

       <Pane >
       <SideNave items={items}></SideNave>
       </Pane>
       <Main>
       <Nav></Nav>
     <Dash></Dash>
       </Main>
     
     </>
  );
}

export default App;
