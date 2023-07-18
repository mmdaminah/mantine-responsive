import { CloseButton, Drawer } from "@mantine/core";
import { Sidebar } from "./Sidebar";

type DrawerNavProps = {
  opened: boolean;
  handleClose: () => void;
};

const DrawerNav = ({ opened, handleClose }: DrawerNavProps) => {
  return (
    <Drawer
      opened={opened}
      onClose={handleClose}
      size="auto"
      withCloseButton={false}
      styles={{
        body: {
          padding: 0
        },
        inner: {
          right: 0
        }
      }}
      // sx={{ position: "relative" }}
    >
      <Sidebar />
    </Drawer>
  );
};

export default DrawerNav;
