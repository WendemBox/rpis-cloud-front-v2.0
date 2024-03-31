import React from "react";
import { Layout, Menu } from "antd";
import styles from "./Header.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

import * as Api from "@/api";

const { Header } = Layout;

const AppHeader = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    if (window.confirm("Вы действительно хотите выйти?")) {
      Api.auth.logout();
      location.href = "/";
    }
  };

  return (
    <Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined/>
            RPIS-Cloud
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[
              { key: "/dashboard", label: "Хранилище" },
              { key: "/dashboard/profile", label: "Профиль" },
            ]}
          />
        </div>

        <div className={styles.headerRight}>
          <button onClick={onClickLogout}>Выход</button>
        </div>
      </div>
    </Header>
  );
};

export default AppHeader;
