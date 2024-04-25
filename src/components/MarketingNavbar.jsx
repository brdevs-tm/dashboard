import React from "react";
import { MdRefresh } from "react-icons/md";
import { FaLocationDot } from "react-icons/fa6";
import { MdEdit } from "react-icons/md";
import { FaPlus } from "react-icons/fa";
import { IoIosSearch } from "react-icons/io";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";
import { RiTableFill } from "react-icons/ri";
import { MdFilterAlt } from "react-icons/md";
import { MdFileDownload } from "react-icons/md";

const MarketingNavbar = () => {
  return (
    <div className="w-full bg-white">
      <div className="flex w-full items-center justify-between border-b-2 pl-5">
        <div className="pl-3">
          <h1 className="text-[30px] font-medium ">Список акций</h1>
        </div>
        <div className="flex items-center gap-3">
          <div className="flex h-[64px] w-[200px] items-center justify-center gap-2 border-x-2 p-[15px] text-blue-500">
            <span>
              <MdRefresh />
            </span>
            <span>Обновить Telegram</span>
          </div>
          <div className="flex h-[64px] w-[139px] items-center justify-center gap-2 border-r-2 p-[15px] text-[#1AC19D]">
            <span>
              <FaPlus />
            </span>
            <span>Добавить</span>
          </div>
        </div>
      </div>
      <div className="flex h-[56px] w-[100%] items-center justify-between bg-[#F7F9FB] px-5">
        <div className=" ml-2 flex h-[32px] w-[400px] items-center rounded-lg bg-white p-4">
          <span>
            <IoIosSearch />
          </span>
          <input
            type="text"
            placeholder="Поиск"
            className="w-[350px] pl-2 outline-none"
          />
        </div>
        <div className=" flex items-center justify-center gap-5">
          <div className="flex items-center rounded-lg border-2 bg-white">
            <span className="flex h-8 w-8 items-center justify-center text-blue-600">
              <IoIosArrowBack />
            </span>
            <span className="flex h-8 w-[81px] items-center justify-center border-x-2  ">
              Сегодня
            </span>
            <span className="flex h-8 w-8 items-center justify-center text-blue-600">
              <IoIosArrowForward />
            </span>
          </div>
          <div className="flex h-[48px] w-[113px] items-center justify-center gap-3 font-medium">
            <span>
              <RiTableFill />
            </span>
            <span className=" text-[14px] leading-6 text-[#303940]">
              Столбцы
            </span>
          </div>

          <div className="flex h-[48px] w-[113px] items-center justify-center gap-3 font-medium">
            <span>
              <MdFileDownload />
            </span>
            <span className=" text-[14px] leading-6 text-[#303940]">
              Скачать
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MarketingNavbar;
