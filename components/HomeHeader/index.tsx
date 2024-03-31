import React from "react";
import { Layout, Avatar, Menu, Popover, Button } from "antd";
import styles from "./HomeHeader.module.scss";
import { CloudOutlined } from "@ant-design/icons";
import { useRouter } from "next/router";

export const HomeHeader: React.FC = () => {
  const router = useRouter();
  const selectedMenu = router.pathname;

  const onClickLogout = () => {
    {
      location.href = "/dashboard/auth";
    }
  };

  return (
    <Layout.Header className={styles.root}>
      <div className={styles.headerInner}>
        <div className={styles.headerLeft}>
          <h2>
            <CloudOutlined />
            RPIS-Cloud
          </h2>

          <Menu
            className={styles.topMenu}
            theme="dark"
            mode="horizontal"
            defaultSelectedKeys={[selectedMenu]}
            onSelect={({ key }) => router.push(key)}
            items={[{ key: "/", label: "Главная" }]}
          />
        </div>

        <div className={styles.headerRight}>
          <button onClick={onClickLogout}>Авторизация</button>
        </div>
      </div>
    </Layout.Header>
  );
};
