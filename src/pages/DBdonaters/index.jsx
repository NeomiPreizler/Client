import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { useEffect, useState } from "react";
import { useNavigate } from 'react-router-dom'

import axios from "axios";



export const DBdonaters = () => {
  const [data, setData] = useState();

  const loadData = async () => {
    console.log("DBdonaters");
    const db = await axios.get("http://localhost:3600/api/donater")
    console.log(db, "dbdbdbdb");
    setData(db.data);
    console.log(data, "db");
  }
  // function createData(userId,id,email,first_name,last_name,avaliable,has_pair,id_pair){
  //   return{userId,id,email,first_name,last_name,avaliable,has_pair,id_pair};
  // }


  useEffect(() => {
    loadData();
  }, []);
  const navigate = useNavigate()

  return (

    <TableContainer>

      <Table>

        <TableHead>

          <TableRow>

            <TableCell>userId</TableCell>

            <TableCell>id</TableCell>

            <TableCell>email</TableCell>

            <TableCell>first_name</TableCell>

            <TableCell>last_name</TableCell>

            <TableCell>avaliable</TableCell>

            <TableCell>has_pair</TableCell>

            <TableCell>id_pair</TableCell>



            {/* <TableCell>Status</TableCell> */}

          </TableRow>

        </TableHead>

        <TableBody>

          {data?.map(data => {

            const { userId, id, email, first_name, last_name, avaliable, has_pair, id_pair } = data


            return (

              <TableRow

                key={id}

                sx={{ cursor: 'pointer' }}

              // onClick={() =>

              //     navigate(`/facility/${facility.id}/requests/${id}`)

              // }

              >

                <TableCell align="left">{userId}</TableCell>

                <TableCell align="left">{id}</TableCell>

                <TableCell align="left">{email}</TableCell>

                <TableCell align="left">{first_name}</TableCell>

                <TableCell align="left">{last_name}</TableCell>

                <TableCell align="left">{avaliable}</TableCell>

                <TableCell align="left">{has_pair}</TableCell>

                <TableCell align="left">{id_pair}</TableCell>


              </TableRow>

            )

          })}

        </TableBody>

      </Table>

    </TableContainer>

  )

}