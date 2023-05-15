
import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'
import { AuthContext } from "../../../context/authContext";
import { useContext } from "react";
import axios from "axios";



 export const DBusers = () => {
  const [data, setData] = useState();
  const { token } = useContext(AuthContext)

  const config = {
    headers: {
      Authorization: "Bearer " + token,
    }}
  const loadData = async () => {
    console.log("users db");
    try{
    const db = await axios.get("http://localhost:3600/api/users",config)

    setData(db.data);
    console.log(data, "db");}
    catch(err){console.log(err);}
  }
  

  useEffect(() => {
    loadData();
  }, []);
  //const navigate = useNavigate()

  return (

    <TableContainer>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>userId</TableCell>

            <TableCell>userName</TableCell>

            <TableCell>email</TableCell>

            <TableCell>role</TableCell>

          </TableRow>

        </TableHead>

        <TableBody>

          {data?.map(data => {

            const { userId,userName, email,role} = data


            return (

              <TableRow

                // key={id}

                sx={{ cursor: 'pointer' }}

              // onClick={() =>

              //     navigate(`/facility/${facility.id}/requests/${id}`)

              // }

              >

                <TableCell align="left">{userId}</TableCell>

                <TableCell align="left">{userName}</TableCell>

                <TableCell align="left">{email}</TableCell>

                <TableCell align="left">{role}</TableCell>


              </TableRow>

            )

          })}

        </TableBody>

      </Table>

    </TableContainer>

  )

        }
// export default DBusers;
