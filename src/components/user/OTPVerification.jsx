import React, { useState } from 'react';
import { useNavigate, useParams, Link } from "react-router-dom";
import axios from 'axios';

function OTPVerification() {
    const [otp, setOTP] = useState("");
    const navigate = useNavigate();
    const { id, token } = useParams();

    axios.defaults.withCredentials = true;

    // const handleSubmit = (e) => {
    //     e.preventDefault();
    //     axios.post(`http://localhost:1000/api/user/verifyOTP`, { userId: id, otp })
    //         .then(res => {
    //             if (res.data.success) {
    //                 navigate('/login');
    //             } else {
    //                 console.log(res.data.message);
    //             }
    //         }).catch(err => console.log(err));
    // };
    const handleSubmit = (e) => {
        e.preventDefault();
        axios.post(`http://localhost:1000/api/user/verifyOTP/${id}`, { otp })
            .then(res => {
                if (res.data.success) {
                    navigate('/login');
                } else {
                    console.log(res.data.message);
                }
            }).catch(err => console.log(err));
    };

    return (
        <div className="d-flex justify-content-center align-items-center vh-100">
            <div className="bg-white text-dark p-3 rounded w-100 h-35">
                <h4>OTP Verification</h4>
                <form onSubmit={handleSubmit}>
                    <div className="mb-3">
                        <label htmlFor="otp">
                            <strong>Enter OTP</strong>
                        </label>
                        <input
                            type="text"
                            placeholder="Enter OTP"
                            autoComplete="off"
                            name="otp"
                            className="form-control rounded-0"
                            onChange={(e) => setOTP(e.target.value)}
                        />
                    </div>
                    <button type="submit" className="btn btn-success w-100 rounded-0">
                        Verify
                    </button>
                    <Link to ="/resendOTP">Resend OTP</Link>
                </form>
            </div>
           
        </div>
    );
}

export default OTPVerification;