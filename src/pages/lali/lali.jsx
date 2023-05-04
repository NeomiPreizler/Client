import * as React from "react";
import Table from "@mui/material/Table";
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import axios from "axios";


// import date from 'dayjs'

// import {useNavigate} from 'react-router-dom'

// import {

// TableRow,

// TableHead,

// TableCell,

// TableBody,

// TableContainer,

// Table as MuiTable

// } from '@mui/material'


// import {type IndexRequest} from 'src/types'


// const Table = ({requests}: {requests?: IndexRequest[]}) => {
export const Table = () => {

    const navigate = useNavigate()

    return (

        <TableContainer>

            <MuiTable>

                <TableHead>

                    <TableRow>

                        <TableCell>Patient</TableCell>

                        <TableCell>Facility</TableCell>

                        <TableCell>Payer</TableCell>

                        <TableCell>Time Received</TableCell>

                        {/* <TableCell>Status</TableCell> */}

                    </TableRow>

                </TableHead>

                <TableBody>

                    {requests?.map(request => {

                        const { id, resident, payer, createdAt, facility } = request


                        return (

                            <TableRow

                                key={id}

                                sx={{ cursor: 'pointer' }}

                                onClick={() =>

                                    navigate(`/facility/${facility.id}/requests/${id}`)

                                }

                            >

                                <TableCell align="left">

                                    {resident.firstName + ' ' + resident.lastName}

                                </TableCell>

                                <TableCell align="left">{facility.name}</TableCell>

                                <TableCell align="left">{payer.name}</TableCell>

                                <TableCell align="left">

                                    {date(createdAt).format('MM/DD/YYYY h:mma')}

                                </TableCell>

                                {/* <TableCell align="left">{row.status}</TableCell> */}

                            </TableRow>

                        )

                    })}

                </TableBody>

            </MuiTable>

        </TableContainer>

    )

}