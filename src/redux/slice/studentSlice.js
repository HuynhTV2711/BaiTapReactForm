import { createSlice } from '@reduxjs/toolkit'

const initialState = {
    arrStudent: [],
}

const studentSlice = createSlice({
  name: "student",
  initialState,
  reducers: {
    // là nơi đặt các hàm để xử lí dữ liệu
    getValueStudent: (state, action)=>{
        console.log(state);
        console.log(action);
        const index = state.arrStudent.findIndex((item, index)=>{
            return item.maSinhVien == action.payload.maSinhVien
        });
        if (index != -1) {
            alert("mã sinh viên đã tồn tại")
        }else{
            state.arrStudent.push(action.payload);
        }
    },
    removeStudent: (state, action)=>{
        console.log(action);
        alert("Bạn chắc chắn muốn xóa?")
        const index = state.arrStudent.findIndex((item, index)=>{
            return item.maSinhVien == action.payload
        });
        if (index != -1) {
            state.arrStudent.splice(index, 1);
        }
    },
    updateStudent: (state, action)=>{
        console.log(action);
        const index = state.arrStudent.findIndex((item, index)=>{
            return item.maSinhVien = action.payload.maSinhVien;
        });
        if (index != -1) {
            state.arrStudent[index] = action.payload;
        }
    },
    findStudent: (state, action)=>{
        console.log(action);
        const index = state.arrStudent.findIndex((item, index)=>{
            return item.maSinhVien = action.payload.maSinhVien;
        });
        if (index != -1) {
            state.arrStudent[index] = action.payload;
        }
    }
  }
});

export const {getValueStudent, removeStudent, updateStudent} = studentSlice.actions

export default studentSlice.reducer