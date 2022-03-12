import { AnyAction } from 'redux';
import * as Types from "./../constants";

const initialState = {};

export const AuthReducer = (state = initialState, action: AnyAction) => {
    switch (action.type) {
        // case Types.REGISTER_ACCOUNT: {
        //     if (action.payload.data.success) {
        //         swal({
        //             title: 'Đăng ký thành công!',
        //             text: `Kiểm tra email của bạn để xác thực tài khoản`,
        //             icon: 'success',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     } else {
        //         swal({
        //             title: 'Oops!',
        //             text: `Đã xảy ra lỗi! Mã lỗi: ${action.payload.data.message}`,
        //             icon: 'error',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     }
        //     return state;
        // }

        // case Types.VERIFY_ACCOUNT: {
        //     console.log(action);
        //     if (action.payload.data.success) {
        //         swal({
        //             title: 'Xác nhận tài khoản thành công!',
        //             text: `Vui lòng quay lại trang đăng nhập`,
        //             icon: 'success',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     }
        //     return state;
        // }
        // case Types.RESET_PASSWORD: {
        //     // console.log(action.payload.data.success);
        //     if (action.payload.data.success) {
        //         swal({
        //             title: 'Đặt lại mật khẩu!',
        //             text: `Kiểm tra Email của bạn`,
        //             icon: 'success',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     } else {
        //         swal({
        //             title: 'Oops!',
        //             text: `Đã xảy ra lỗi! Mã lỗi: ${action.payload.data.message}`,
        //             icon: 'error',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     }
        //     return state;
        // }

        // case Types.VERIFY_PASSWORD: {
        //     // console.log(action.payload.data.success);
        //     if (action.payload.data.success) {
        //         swal({
        //             title: 'Yaaa!',
        //             text: `Đặt lại mật khẩu thành công, vui lòng quay lại trang đăng nhập`,
        //             icon: 'success',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     } else {
        //         swal({
        //             title: 'Oops!',
        //             text: `Đã xảy ra lỗi! Mã lỗi: ${action.payload.data.message}`,
        //             icon: 'error',
        //             buttons: {
        //                 cancel: true,
        //             },
        //         });
        //     }
        //     return state;
        // }
        case Types.LOGIN: {
            let cloneState = JSON.parse(JSON.stringify(state));
            console.log(action.payload);
            if (action.payload.data.success) {
                localStorage.setItem('tk', action.payload.data.data.token);
                localStorage.setItem('rtk', action.payload.data.data.refreshToken);
                cloneState = action.payload.data.data.userData;
            }
            return cloneState;
        }
        case Types.GET_USER_DATA: {
            let cloneState = JSON.parse(JSON.stringify(state));
            console.log(action);
            if (action.payload.data.success) {
                cloneState = action.payload.data.data[0];
                return cloneState;
            }
            return state;
        }
        case Types.LOGOUT: {
            localStorage.clear();
            state = { data: { token: null } };
            return state;
        }
        default:
            return state;
    }
};
