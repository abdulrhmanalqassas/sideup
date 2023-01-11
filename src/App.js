import './App.css';
import styled from 'styled-components';
import { SideNave } from './main/SideNav';
import { Nav } from './main/Nav';
import { Dash } from './Dash/Dash';
import { Character} from "./main/Character";
import { MobNav } from './main/MobNav';

const items = [{name:"My Customers"},{name:"Dashboard"},{name:"alqassas"},{name:"Dashboard"},{name:"My Customers"},{name:"My Customers"}]

// const Layout = styled.div`
// display: flex;
// height:100%;

// `
const Pane = styled.div`
background: #FFF;
height: 100%;
width: 185px;
position: fixed;
z-index: 1;
top: 0;
left: 0;
overflow-x: hidden;
padding-top: 20px;
@media (max-width: 900px) {
  display:none;
}
`;
const Main = styled.div`
margin-left:185px; 
@media (max-width: 900px) {
  margin-left:5px; 
}
font-size: 28px; 
padding: 0px 10px;
`
function App() {
  return (
   <>
<MobNav></MobNav>
       <Pane >
       <SideNave items={items}></SideNave>
       </Pane>
       <Main>
       <Nav></Nav>
       < Character/>
     <Dash></Dash>
       </Main>
     
     </>
  );
}

export default App;
