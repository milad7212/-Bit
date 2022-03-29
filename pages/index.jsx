import MenuHeader from "../components/menuHeader";
import Table from "../components/table";
import { dataApiStatic } from "../components/data.js";
import SettingTable from "../components/SettingTable/SettingTable";
import Head from "next/head";
export default function Home() {
  console.log("dataApiStatic :>> ", dataApiStatic.result);
  return (
    <>
      <Head>
        <title>قیمت لحظه ای | بیت برگ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuHeader />
      <div className="pt-20">
        <SettingTable />
        <Table data={dataApiStatic} />
      </div>
    </>
  );
}
