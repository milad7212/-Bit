import Head from "next/head";
import { useState, useEffect } from "react";
import axios from "axios";
import InfiniteScroll from "react-infinite-scroller";

import { BaseUrl } from "../config";
import MenuHeader from "../components/menuHeader";
import Table from "../components/table";
import SettingTable from "../components/SettingTable/SettingTable";

export default function Home() {
  const [dataTable, setDataTable] = useState([]);
  const [metaDataTable, setMetaDataTable] = useState({});
  const [unitTable, setUnitTable] = useState("toman");
  const [page, setPage] = useState(1);
  
  const [hasMore, setHasMore] = useState(true)

  useEffect(() => {
    async function fetchData() {
      const { data, status } = await axios.get(BaseUrl);
      if (status == 200) {
        setMetaDataTable(data.result.meta);
        setDataTable(data.result.items);
      }
      console.log("data", data);
    }
    fetchData();
  }, []);

  // functhtions for change table
  const handelChangeUnit = (unit) => {
    unit == "toman" ? setUnitTable("toman") : setUnitTable("tether");
  };

  const handelSort = async (sort) => {
    if (sort == 0) {
      const { data, status } = await axios.get(BaseUrl);
      if (status == 200) {
        setDataTable(data.result.items);
      }
      return;
    }
    const { data, status } = await axios.get(BaseUrl, {
      params: {
        page: 1,
        sort,
      },
    });
    if (status == 200) {
      setDataTable(data.result.items);
    }
  };

  const handelSearch = async (q) => {
    const { data, status } = await axios.get(BaseUrl, {
      params: {
        page: 1,
        q,
      },
    });
    if (status == 200) {
      setDataTable(data.result.items);
    }
  };

  const handelCallAnotherPage = async () => {
    
    
    const { data, status } = await axios.get(BaseUrl, {
      params: {
        page: page+1,
        
      },
    });
    if (status == 200) {
      setDataTable([ ...dataTable,...data.result.items]);
    }
   
    if(+page+1===15){
      setHasMore(false)
      
    }
    setPage(()=>page+1);
    
  };

  return (
    <>
      <Head>
        <title>قیمت لحظه‌ای | بیت برگ</title>
        <meta name="viewport" content="initial-scale=1.0, width=device-width" />
      </Head>
      <MenuHeader />
      <div className="relative md:flex items-center justify-center bg-cover bg-[url('/background.png')]">
        <div className="md:w-[1200px] relative bg-white shadow-xl rounded-lg py-[32px] px-[4px]  md:p-[32px] my-[50px] md:my-[90px] ">
          <SettingTable
            handelChangeUnit={handelChangeUnit}
            handelSort={handelSort}
            handelSearch={handelSearch}
          />

          {!!dataTable.length && (
            <InfiniteScroll
              pageStart={0}
              loadMore={handelCallAnotherPage}
              hasMore={hasMore}
              loader={
                <div className="loader" key={0}>
                  Loading ...
                </div>
              }
            >
              <Table
                handelCallAnotherPage={handelCallAnotherPage}
                unitTable={unitTable}
                data={dataTable}
                meta={metaDataTable}
              />
            </InfiniteScroll>
          )}
        </div>
      </div>
    </>
  );
}
