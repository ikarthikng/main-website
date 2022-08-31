import { ListItem, ListItemButton, ListItemIcon, ListItemText, SvgIconTypeMap } from "@mui/material"
import { OverridableComponent } from "@mui/material/OverridableComponent"
import React from "react"

type ListItemProps = {
  componentText: string
  IconComponent: OverridableComponent<SvgIconTypeMap<{}, "svg">> & {
    muiName: string
  }
  sidebarOpen: boolean
}

export const ListItemComponent = ({ componentText, IconComponent, sidebarOpen }: ListItemProps) => {
  return (
    <ListItem key={componentText} disablePadding sx={{ display: "block" }}>
      <ListItemButton sx={{ minHeight: 48, justifyContent: sidebarOpen ? "initial" : "center", px: 2.5 }}>
        <ListItemIcon
          sx={{
            minWidth: 0,
            mr: sidebarOpen ? 3 : "auto",
            justifyContent: "center"
          }}
        >
          <IconComponent />
        </ListItemIcon>
        <ListItemText primary={componentText} sx={{ opacity: sidebarOpen ? 1 : 0 }} />
      </ListItemButton>
    </ListItem>
  )
}
