import {
    Box,
    createTheme,
    PaletteMode,
    Stack,
    ThemeProvider,
} from "@mui/material"
import { textAlign } from "@mui/system"
import { useState } from "react"
import Add from "./components/Add"
import Feed from "./components/Feed"
import Navbar from "./components/Navbar"
import Rightbar from "./components/Rightbar"
import Sidebar from "./components/Sidebar"

export default () => {
    const [mode, setMode] = useState<PaletteMode>("light")
    const darkThenme = createTheme({
        palette: {
            mode: mode,
        },
    })

    return (
        <ThemeProvider theme={darkThenme}>
            <Box bgcolor="background.default" color="text.primary">
                <Navbar />
                <Stack
                    direction="row"
                    spacing={2}
                    justifyContent="space-between"
                >
                    <Sidebar setMode={setMode} mode={mode} />
                    <Feed />
                    <Rightbar />
                </Stack>
                <Add />
            </Box>
        </ThemeProvider>
    )
}