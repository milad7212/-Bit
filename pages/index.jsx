import MenuHeader from "../components/menuHeader";
import Table from "../components/table";
import { dataApiStatic } from "../components/data.js";
import SettingTable from "../components/SettingTable/SettingTable";
import Head from "next/head";
import axios from "axios";
import { useState, useEffect } from "react";

export default function Home() {
  const [dataTable, setdataTable] = useState({});
  useEffect(() => {
    axios
      .get("https://api.bitbarg.me/api/v1/currencies")
      .then(({ data, status }) => {
        if (status == 200) {
          console.log(",moooooo :>> ", ",moooooo");
          setdataTable(data);
        }
        console.log("res", status, data);
      })
      .catch((e) => console.log(e));
  }, []);

  console.log("dataApiStatic :>> ", dataApiStatic.result);

  return (
    <>
      <Head>
        <title>قیمت لحظه‌ای | بیت برگ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuHeader />
      <div className="relative md:flex items-center justify-center bg-cover bg-[url('/background.png')]">
        <div className="md:w-[1200px] relative bg-white shadow-xl rounded-lg p-[32px] my-[50px] md:my-[90px] ">
          <SettingTable />
          {dataTable.result && <Table data={dataTable} />}
        </div>
      </div>
    </>
  );
}
