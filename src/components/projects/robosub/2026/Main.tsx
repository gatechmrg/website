import { Box } from "@mui/material";
import FirstBanner from "./FirstBanner";
//import Competition from "./Competition";
import VehicleOverview from "./VehicleOverview";
import Mechanical from "./Mechanical";
import Electrical from "./Electrical";
import Software from "./Software";
import Firmware from "./Firmware";
import TeamRoster from "./TeamRoster";

export default function Main() {

    return (
        <Box>
            <FirstBanner />
            <VehicleOverview/>
            <Mechanical />
            <Electrical />
            <Firmware />
            <Software />
            <TeamRoster />
        </Box>
    )
}