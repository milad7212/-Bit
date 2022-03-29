import MenuHeader from "../components/menuHeader";
import Table from "../components/table";
import { dataApiStatic } from "../components/data.js";
import SettingTable from "../components/SettingTable/SettingTable";
export default function Home() {
  console.log("dataApiStatic :>> ", dataApiStatic.result);
  return (
    <>
      <MenuHeader />
      <div className="pt-20">
        <SettingTable />
        <Table data={dataApiStatic} />
      </div>
    </>
  );
}
