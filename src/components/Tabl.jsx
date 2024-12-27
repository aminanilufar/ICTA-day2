import { Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from '@mui/material'
import React from 'react'

const Tabl = () => {
    return (
        <div>
            <br /><br />
            <Typography variant="h2" gutterBottom>Login List</Typography>
            <TableContainer align="center">
                <Table sx={{ minWidth:650 }}>
                    <TableHead>
                        <TableRow>
                            <TableCell><b>S.No</b></TableCell>
                            <TableCell><b>NAME</b></TableCell>
                            <TableCell><b>EMAIL</b></TableCell>
                            <TableCell><b>COURSE</b></TableCell>
                            <TableCell><b>LOGIN TIME</b></TableCell>
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        <TableRow>
                            <TableCell>1</TableCell>
                            <TableCell>rumy</TableCell>
                            <TableCell>rumy@gmail.com</TableCell>
                            <TableCell>full stack developer</TableCell>
                            <TableCell>2022-02-01 09:00:45</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>2</TableCell>
                            <TableCell>sam</TableCell>
                            <TableCell>sam@gmail.com</TableCell>
                            <TableCell>figma</TableCell>
                            <TableCell>2022-02-01 09:45:32</TableCell>
                        </TableRow>
                    </TableBody>
                    <TableBody>
                        <TableRow>
                            <TableCell>3</TableCell>
                            <TableCell>tessa</TableCell>
                            <TableCell>tessa@gmail.com</TableCell>
                            <TableCell>flutter</TableCell>
                            <TableCell>2022-02-01 10:54:06</TableCell>
                        </TableRow>
                    </TableBody>
                </Table >
            </TableContainer>
        </div>
    )
}

export default Tabl
