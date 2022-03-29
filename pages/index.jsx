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
        <title>قیمت لحظه‌ای | بیت برگ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>

      <div className="px-6 ">
        <MenuHeader />
        <div className="pt-20">
          <div className="items-center hidden mb-4 md:flex">
            <h1 className="text-xl font-bold">قیمت لحظه‌ای</h1>
            <div className="w-[10px] h-[10px] rounded-full bg-yellow-400 mr-5"></div>
            <span className="mr-2 text-gray-500">{`${"۲۹۳"} ارز دیجیتال`}</span>
          </div>
          <SettingTable />
          <Table data={dataApiStatic} />
        </div>
      </div>
    </>
  );
}
