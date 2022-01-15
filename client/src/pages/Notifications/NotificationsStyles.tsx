import {makeStyles, Theme} from "@material-ui/core";

export const useNotificationsStyles = makeStyles((theme: Theme) => ({
    container: {
        borderRadius: 0,
        minHeight: '100vh',
        borderTop: '0',
        borderBottom: '0',
        "& a": {
            color: theme.palette.primary.main,
            textDecoration: "none",
        },
    },
    header: {
        marginLeft: 15,
        position: "fixed",
        display: 'flex',
        width: 580,
        height: 53,
        zIndex: 1,
        border: 0,
        alignItems: 'center',
        flex: 1,
        "& svg": {
            marginRight: 20
        },
    },
    tabs: {
        borderBottom: `1px solid ${theme.palette.divider}`,
        "& .MuiTabs-indicator": {
            marginLeft: 116,
            maxWidth: 70,
            height: 4,
            backgroundColor: theme.palette.primary.main,
        },
        "& .MuiTab-root": {
            fontWeight: 700,
        },
    },
    infoWindow: {
        textAlign: "center",
        "& .MuiTypography-h4": {
            marginTop: 30,
        },
    },
    tab: {
        minWidth: 301,
        textTransform: 'none',
        '&:hover': {
            backgroundColor: theme.palette.secondary.light,
        },
    },
    notificationWrapper: {
        display: 'flex',
        cursor: 'pointer',
        alignItems: 'flex-start',
        padding: "11px 15px",
        flex: 1,
        borderTop: '0',
        borderLeft: '0',
        borderRight: '0',
        borderRadius: 0,
        '&:hover': {
            backgroundColor: theme.palette.secondary.main,
        },

    },
    notificationIcon: {
        alignItems: "flex-end",
        marginLeft: 15,
        marginRight: 11,
        '& #notification': {
            color: "rgb(29, 155, 240)",
        },
        '& #retweet': {
            color: "rgb(23, 191, 99)",
        },
        '& #like': {
            color: "rgb(224, 36, 94)",
        },
        '& #follow': {
            color: "rgb(29, 155, 240)",
        },
        "& svg": {
            verticalAlign: "bottom",
            height: "2.30em",
        },
    },
    notificationAvatarWrapper: {
        display: "inline-block",
    },
    notificationAvatar: {
        display: "inline-block",
        marginRight: 8,
        width: theme.spacing(4),
        height: theme.spacing(4),
        marginBottom: 11,
    },
    notificationInfo: {
        marginBottom: 11,
    },
    notificationText: {
        '& #hashtag': {
            color: theme.palette.primary.main,
        },
    },
    notificationInfoText: {
        "& .MuiTypography-h5": {
            fontWeight: 700
        },
    },
}));
