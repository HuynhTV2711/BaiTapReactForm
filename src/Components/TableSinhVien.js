import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { removeStudent } from "../redux/slice/studentSlice";

const TableSinhVien = (props) => {
  const {setValues} = props;
  const dispatch = useDispatch();

  const redux = useSelector((state)=>{
    return state.studentSlice
  })
  const {arrStudent} = redux;
  console.log(arrStudent);
  return (
    <div className="relative overflow-x-auto mt-5">
      <table className="w-full text-sm text-left rtl:text-right text-gray-500 dark:text-gray-400">
        <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
          <tr>
            <th scope="col" className="px-6 py-3">
              Mã sinh viên
            </th>
            <th scope="col" className="px-6 py-3">
              Họ tên
            </th>
            <th scope="col" className="px-6 py-3">
              Email
            </th>
            <th scope="col" className="px-6 py-3">
              Số điện thoại
            </th>
            <th scope="col" className="px-6 py-3">
              Hành động
            </th>
          </tr>
        </thead>
        <tbody>
        {arrStudent.map((item, index)=>{
          return   <tr className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
          <td
            scope="row"
            className="px-6 py-4 font-medium text-gray-900 whitespace-nowrap dark:text-white"
          >
            {item.maSinhVien}
          </td>
          <td className="px-6 py-4">{item.hoTen}</td>
          <td className="px-6 py-4">{item.email}</td>
          <td className="px-6 py-4">{item.soDienThoai}</td>
          <td className="px-6 py-4">
              <button onClick={()=>{setValues(item)}} className="text-3xl text-yellow-500 me-3"><ion-icon name="create-outline"></ion-icon></button>
              <button onClick={()=>{dispatch(removeStudent(item.maSinhVien))}} className="text-3xl text-red-500"><ion-icon name="trash-outline"></ion-icon></button>
          </td>
        </tr>
        })}
        </tbody>
      </table>
    </div>
  );
};

export default TableSinhVien;
