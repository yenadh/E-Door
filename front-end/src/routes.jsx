import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login";
import ErrorPage from "./404";
import Dashboard from "./admin/Dashboard";
import AddLocation from "./admin/AddLocation";
import ListLocation from "./admin/ListLocation";
import ListDoor from "./admin/ListDoor";
import AddDoor from "./admin/AddDoor";
import ListUser from "./admin/ListUser";
import AddUser from "./admin/AddUser";

function CustomRouter(){
    return(
        <>
        <BrowserRouter>
        <Routes>
          <Route path="login" element={<Login />} />          
          <Route path="/" element={<Dashboard />} />
          <Route path="addLocation" element={<AddLocation />} />
          <Route path="listLocation" element={<ListLocation />} />
          <Route path="listDoor" element={<ListDoor />} />
          <Route path="addDoor" element={<AddDoor />} />
          <Route path="listUser" element={<ListUser />} />
          <Route path="addUser" element={<AddUser />} />
          <Route path="*" element={<ErrorPage/>} />         
        </Routes>
      </BrowserRouter>
        </>
    )
} 
export default CustomRouter