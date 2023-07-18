import { ReactNode } from "react";
import { Autocomplete, Box, Group } from "@mantine/core";
import { TbSearch } from "react-icons/tb";

type HeaderProps = {
  right: ReactNode;
};
export const Header = ({ right }: HeaderProps) => {
  return (
    <Box
      component="header"
      sx={(theme) => ({
        padding: `${theme.spacing.xs}px ${theme.spacing.md}px`,
        borderBottom: `1px solid ${theme.colors.gray[2]}`,
        backgroundColor: theme.white,
        height: 60
      })}
    >
      <Group spacing="lg" noWrap>
        {right}
        <GlobalFilter />
      </Group>
    </Box>
  );
};

const GlobalFilter = () => {
  return (
    <Autocomplete
      data={[]}
      size="lg"
      placeholder="جست و جو"
      icon={<TbSearch size={18} />}
      styles={{
        root: { flexGrow: 1 },
        input: { border: 0, backgroundColor: "transparent" }
      }}
      onChange={(value) => {
        console.log(value);
      }}
    />
  );
};
