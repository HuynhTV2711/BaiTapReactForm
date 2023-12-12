import * as Yup from 'yup'
export const validateStudent = Yup.object({
    // nơi chứa các thuộc tính cần validation
    maSinhVien: Yup.string().required("Vui lòng không bỏ trống"),
    hoTen: Yup.string().required("Vui lòng không bỏ trống"),
    soDienThoai: Yup.string().required("Vui lòng không bỏ trống").matches(/(84|0[3|5|7|8|9])+([0-9]{8})\b/g, "Vui lòng nhập đúng số điện thoại"),
    email: Yup.string().required("Vui lòng không bỏ trống").email("Vui lòng nhập đúng định dạng email")
})