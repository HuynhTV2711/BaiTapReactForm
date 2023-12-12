import React from "react";
import TableSinhVien from "./TableSinhVien";
import { useFormik } from 'formik'
import { validateStudent } from "../util/validation";
import { useDispatch } from "react-redux";
import { getValueStudent, updateStudent } from "../redux/slice/studentSlice";
const BaiTapFormReact = () => {
    const dispatch = useDispatch();
    // maSinhVien, tenSinhVien, soDienThoai, email
    const formik = useFormik({
        // initialValues là object chứa các thuộc tính lưu trữ giá trị người dùng nhập vào
        // các thuộc tính này trùng tên với name của các input
        initialValues: {
            maSinhVien: '',
            hoTen: '',
            email: '',
            soDienThoai: '',
        },
        // onsubmit chạy khi onclick và pass quá hết validation
        // tham số value đại diện cho dữ liệu người dùng sau ki nhập xong
        onSubmit: (values, { resetForm }) => {
            console.log(values);
            dispatch(getValueStudent(values));
            resetForm();
        },
        validationSchema: validateStudent,
    })
    // bóc tách các thuộc tính của formik
    // Handle change lấy dữ liệu do người dùng nhập vào cho formik
    // HandelSubmit hàm giúp chạy sự kiện onsubmit và trả về các kết quả và xử lí
    // HandleBlur là hàm kiểm tra khi người dùng thoát ra khỏi ô input
    // touch kiểm tra người dùng đã thao tác với input hay chưa
    // values lưu trữ giá trị người dùng nhập
    // 
    const { handleChange, handleBlur, handleReset, handleSubmit, errors, values, touched, setValues } = formik;
    console.log(errors);
    return (
        <div className="max-w-7xl mx-auto py-10">
            <h1 className="mb-5 font-bold text-2xl bg-gray-800 text-white p-5">
                Thông tin sinh viên
            </h1>
            <div>
                <form onSubmit={handleSubmit}>
                    <div className="grid grid-cols-2 gap-5">
                        <div>
                            <label
                                htmlFor="maSinhVien"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Mã sinh viên
                            </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.maSinhVien}
                                type="text"
                                name="maSinhVien"
                                id="maSinhVien"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Vui lòng nhập mã sinh viên"
                            />
                            {errors.maSinhVien && touched.maSinhVien ? <p className='text-red-500'>{errors.maSinhVien}</p> : ''}

                        </div>
                        <div>
                            <label
                                htmlFor="hoTen"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Họ tên
                            </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.hoTen}
                                type="text"
                                name="hoTen"
                                id="hoTen"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Vui lòng nhập họ tên"
                            />
                            {errors.hoTen && touched.hoTen ? <p className='text-red-500'>{errors.hoTen}</p> : ''}

                        </div>
                        <div>
                            <label
                                htmlFor="email"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Email
                            </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.email}
                                type="email"
                                id="email"
                                name="email"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Vui lòng nhập email"
                            />
                            {errors.email && touched.email ? <p className='text-red-500'>{errors.email}</p> : ''}

                        </div>
                        <div>
                            <label
                                htmlFor="soDienThoai"
                                className="block mb-2 text-sm font-medium text-gray-900 "
                            >
                                Số điện thoại
                            </label>
                            <input
                                onChange={handleChange}
                                onBlur={handleBlur}
                                value={values.soDienThoai}
                                type="text"
                                name="soDienThoai"
                                id="soDienThoai"
                                className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                                placeholder="Vui lòng nhập số điện thoại"
                            />
                            {errors.soDienThoai && touched.soDienThoai ? <p className='text-red-500'>{errors.soDienThoai}</p> : ''}

                        </div>
                    </div>
                    <button
                        className="me-5 py-2 px-4 bg-green-500 rounded-md text-white mt-5 hover:bg-green-800 duration-500"
                        type="submit"
                    >
                        Thêm sinh viên
                    </button>
                    <button
                        onClick={() => {
                            dispatch(updateStudent(values))
                        }}
                        className="py-2 px-4 bg-blue-500 rounded-md text-white mt-5 hover:bg-blue-800 duration-500"
                        type="button"
                    >
                        Cập nhật
                    </button>
                </form>
            </div>
            <TableSinhVien setValues={setValues} />
        </div>
    );
};

export default BaiTapFormReact;
