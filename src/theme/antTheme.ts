const antTheme = {
  token: {
    colorPrimary: "#2f4f4f",
    colorInfo: "#2f4f4f",
  },
  components: {
    Layout: {
      bodyBg: "rgb(255,255,255)",
    },
    Menu: {
      itemSelectedColor: "var(--color-menu-item)",
      itemSelectedBg: "var(--color-main)",
      fontSize: 12,
    },
    Table: {
      headerBg: "#FFC3B0",
      headerColor: "#30303",
      colorBgContainer: "var(--color-section-bg)",
      headerSplitColor: "#FFC3B0",
      colorText: "var(--color-text-color)",
      borderColor: "var(--color-section-bg)",
      rowHoverBg: "#FFC3B0",
    },
    Modal: {
      colorIcon: "rgba(255,255,255,0.45)",
      contentBg: "var(--color-section-bg)",
      colorText: "var(--color-text-color)",
    },

    Button: {
      defaultBg: "var(--color-main)",
      defaultColor: "rgba(255,255,255,0.88)",
    },
    Popconfirm: {
      colorWarning: "rgb(205,3,53)",
    },
    Form: {
      labelFontSize: 18,
    },
  },
};

export default antTheme;
