import { AppShell, MediaQuery, ActionIcon, Box } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { PropsWithChildren } from "react";
import { TbMenu2 } from "react-icons/tb";

import { Sidebar } from "./Sidebar";
import { Header } from "./Header";
import DrawerNav from "./DrawerNav";

const Layout = ({ children }: PropsWithChildren<any>) => {
  const [opened, handlers] = useDisclosure(false);

  return (
    <AppShell
      padding="md"
      navbar={
        <>
          <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
            <Sidebar />
          </MediaQuery>
          <MediaQuery largerThan="sm" styles={{ display: "none" }}>
            <DrawerNav opened={opened} handleClose={handlers.close} />
          </MediaQuery>
        </>
      }
      styles={(theme) => ({
        body: { minHeight: "100vh" },
        main: {
          padding: 0,
          backgroundColor:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.teal[0]
        }
      })}
    >
      <div>
        <Header
          right={
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <ActionIcon
                variant="hover"
                radius="xl"
                size={40}
                onClick={handlers.open}
              >
                <TbMenu2 size={24} />
              </ActionIcon>
            </MediaQuery>
          }
        />
        <Box py="md" px="md">
          {children}
        </Box>
      </div>
    </AppShell>
  );
};

export default Layout;
