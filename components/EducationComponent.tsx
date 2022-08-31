import { Paper, Table, TableBody, TableCell, TableContainer, TableHead, TableRow, Typography } from "@mui/material"
import React from "react"

export const EducationComponent = () => {
  return (
    <>
      <TableContainer component={Paper}>
        <Table aria-label="Education Table">
          <TableHead>
            <TableRow>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#673ab7" }}>
                  Institution
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#673ab7" }}>
                  Program
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#673ab7" }}>
                  Duration
                </Typography>
              </TableCell>
              <TableCell>
                <Typography variant="h6" sx={{ fontWeight: "bold", color: "#673ab7" }}>
                  Score
                </Typography>
              </TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>
                <Typography variant="body1">The University of Texas at Arlington @ Arlington, Texas</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Master's in Computer Science</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">August 2013 - May 2015</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">3.4 GPA</Typography>
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>
                <Typography variant="body1">Dayananda Sagar College of Engineering @ Bangalore, India</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">Bachelor's in Information Science</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">September 2006 - June 2010</Typography>
              </TableCell>
              <TableCell>
                <Typography variant="body1">71.25/100</Typography>
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </TableContainer>
    </>
  )
}
