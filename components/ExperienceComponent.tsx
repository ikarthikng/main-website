import React from "react"
import { Card, CardContent, Grid, List, ListItem, ListItemText, Typography } from "@mui/material"
import { experienceData } from "../data/ExperienceData"

export const ExperienceComponent = () => {
  return (
    <>
      {experienceData.map((record) => (
        <Grid textAlign="center" item xs={12} md={12} lg={12}>
          <Card variant="outlined">
            <CardContent>
              <Typography sx={{ fontWeight: "bold", color: "#2196f3" }} variant="h6">
                {`${record.company} - ${record.startDate} to ${record.endDate}`}
              </Typography>
              <Typography>
                <List>
                  {record.projects.map((project) => (
                    <ListItem>
                      <ListItemText primary={project.title} secondary={project.description} />
                    </ListItem>
                  ))}
                </List>
              </Typography>
            </CardContent>
          </Card>
        </Grid>
      ))}
    </>
  )
}
