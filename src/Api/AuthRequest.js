import axios from "axios";
const API=axios.create({baseURL:"https://server.possindia.in"})
//const API=axios.create({baseURL:"http://localhost:5005"})

export const signUp=(data)=>API.post('/auth/register',data)
export const login=(data)=>API.post('/auth/login',data)
export const otpLogin=(data)=>API.post('/auth/mobile',data)
export const otpConfirm=(data)=>API.post('/auth/otp',data)