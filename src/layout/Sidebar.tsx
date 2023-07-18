import { useState } from "react";
import { useDisclosure } from "@mantine/hooks";
import {
  createStyles,
  Navbar,
  UnstyledButton,
  Tooltip,
  MediaQuery,
  NavLink,
  Box
} from "@mantine/core";
import {
  TbUsers,
  TbFileCode2,
  TbHome,
  TbDevices,
  TbArrowLeft,
  TbArrowRight
} from "react-icons/tb";

// import logo from "../../assets/images/podiot-logo.png";
import { Link } from "react-router-dom";

const useStyles = createStyles<string, { collapsed?: boolean }>(
  (theme, params) => {
    return {
      navbar: {
        position: "sticky",
        top: 0,
        padding: theme.spacing.md,
        width: params?.collapsed ? 80 : 264,
        transition: params?.collapsed ? "width 0.1s linear" : "none"
      },

      header: {
        paddingBottom: theme.spacing.xs,
        marginBottom: theme.spacing.md,
        borderBottom: `1px solid ${theme.colors.gray[2]}`
      },

      footer: {
        paddingTop: theme.spacing.xs,
        marginTop: theme.spacing.md,
        borderTop: `1px solid ${theme.colors.gray[2]}`
      },

      logo: {
        // ...theme.fn.focusStyles(),
        // width: "100%",
        // display: "flex",
        // alignItems: "center",
        // columnGap: theme.spacing.sm,
        // textDecoration: "none",
        // fontSize: theme.fontSizes.sm,
        // color: theme.colors.gray[7],
        // padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        // borderRadius: theme.radius.sm,
        // fontWeight: 700,
      },

      link: {
        ...theme.fn.focusStyles(),
        width: "100%",
        display: "flex",
        alignItems: "center",
        columnGap: theme.spacing.sm,
        textDecoration: "none",
        fontSize: theme.fontSizes.sm,
        color: theme.colors.gray[7],
        padding: `${theme.spacing.xs}px ${theme.spacing.sm}px`,
        borderRadius: theme.radius.sm,
        fontWeight: 500,

        "&:hover": {
          backgroundColor: theme.colors.gray[0],
          color: theme.black
        }
      },

      linkIcon: {
        color: theme.colors.gray[6],
        fontSize: "1.5rem"
      },

      linkLabel: params?.collapsed ? { display: "none" } : {}
    };
  }
);

const data = [
  { Icon: TbHome, label: "خانه", to: "/" },
  { Icon: TbUsers, label: "نقش ها", to: "/roles" },
  {
    Icon: TbFileCode2,
    label: "نوع دستگاه ها",
    to: "/devicetypes"
  },
  { Icon: TbDevices, label: "دستگاه ها", to: "/devices" }
];

type SidebarProps = {
  className?: string;
};
export const Sidebar = ({ className }: SidebarProps) => {
  const [collapsed, handlers] = useDisclosure(false);
  const { classes, cx } = useStyles({ collapsed });
  const [active, setActive] = useState(0);

  return (
    <Navbar className={cx(classes.navbar, className)}>
      <Navbar.Section grow>
        <Box className={classes.header}>
          <Link to="/">
            <div
              style={{
                width: "100%"
              }}
            >
              <img src="" width={collapsed ? 50 : 150} alt="Logo" />
            </div>
          </Link>
        </Box>
        {data.map(({ label, Icon, to }, index) => (
          <Tooltip
            key={label}
            label={label}
            disabled={!collapsed}
            position="right"
            withArrow
            sx={{ width: "100%" }}
          >
            <NavLink
              key={label}
              to={to}
              component={Link}
              active={index === active}
              label={label}
              icon={<Icon size={16} />}
              onClick={() => setActive(index)}
            />
          </Tooltip>
        ))}
      </Navbar.Section>

      <MediaQuery smallerThan="sm" styles={{ display: "none" }}>
        <Navbar.Section className={classes.footer}>
          <UnstyledButton className={classes.link} onClick={handlers.toggle}>
            {collapsed ? (
              <TbArrowRight className={classes.linkIcon} />
            ) : (
              <TbArrowLeft className={classes.linkIcon} />
            )}
          </UnstyledButton>
        </Navbar.Section>
      </MediaQuery>
    </Navbar>
  );
};
