import { NavigationContainer } from "@react-navigation/native";
import { StatusBar } from "expo-status-bar";
import DrawerRoutes from "./drawer.routes";
import StackRoutes from "./stack.routes";
import TabsRoutes from "./tabs.routes";

export default function Routes() {
    return (
        <NavigationContainer>
        <StatusBar style="auto" />
        {/* <StackRoutes /> */}
        {/* <TabsRoutes/> */}
        <DrawerRoutes />
        </NavigationContainer>
    );
    }