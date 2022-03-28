import MenuHeader from "../components/menuHeader";
import Table from "../components/table";
import { dataApiStatic } from "../components/data.js";
export default function Home() {
  console.log("dataApiStatic :>> ", dataApiStatic.result);
  return (
    <>
      <MenuHeader />

      <Table data={dataApiStatic} />
    </>
  );
}
