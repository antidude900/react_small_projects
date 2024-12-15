import MenuList from "./menu-list";
import "./styles.css"

// eslint-disable-next-line react/prop-types
export default function Tree_view({menus  = []}){
  return <div className="container">
    <MenuList list={menus}/>
  </div>
  
}